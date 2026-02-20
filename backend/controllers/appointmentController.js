const db = require('../config/database');

// Get all doctors
const getDoctors = async (req, res) => {
  try {
    const { specialty, search } = req.query;
    
    let doctors = db.doctors.findAll({ available: true });
    
    if (specialty) {
      doctors = doctors.filter(d => d.specialty === specialty);
    }
    
    if (search) {
      const searchLower = search.toLowerCase();
      doctors = doctors.filter(d => 
        d.first_name.toLowerCase().includes(searchLower) || 
        d.last_name.toLowerCase().includes(searchLower)
      );
    }
    
    res.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
};

// Get available slots for a doctor
const getAvailableSlots = async (req, res) => {
  try {
    const { doctorId, date } = req.query;

    if (!doctorId || !date) {
      return res.status(400).json({ error: 'Doctor ID and date are required' });
    }

    const doctor = db.doctors.findOne({ id: doctorId });
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    // Get booked slots for this doctor on this date
    const appointments = db.appointments.findAll({ 
      doctor_id: doctorId, 
      appointment_date: date 
    });
    
    const bookedSlots = appointments
      .filter(apt => apt.status !== 'cancelled')
      .map(apt => apt.appointment_time);

    // Return doctor's schedule info and booked slots
    const schedule = {
      day_of_week: new Date(date).getDay(),
      start_time: '09:00',
      end_time: '17:00',
      slot_duration: 30
    };

    res.json({ schedule, bookedSlots });
  } catch (error) {
    console.error('Error fetching slots:', error);
    res.status(500).json({ error: 'Failed to fetch available slots' });
  }
};

// Book appointment
const bookAppointment = async (req, res) => {
  try {
    const { doctorId, appointmentDate, appointmentTime, reason } = req.body;
    const patientId = req.user.profileId;

    if (!patientId) {
      return res.status(400).json({ error: 'Patient profile not found' });
    }

    // Check if slot is available
    const existingAppointment = db.appointments.findOne({
      doctor_id: doctorId,
      appointment_date: appointmentDate,
      appointment_time: appointmentTime
    });

    if (existingAppointment && existingAppointment.status !== 'cancelled') {
      return res.status(409).json({ error: 'This time slot is already booked' });
    }

    // Create appointment
    const appointment = db.appointments.create({
      patient_id: patientId,
      doctor_id: doctorId,
      appointment_date: appointmentDate,
      appointment_time: appointmentTime,
      reason,
      status: 'scheduled'
    });

    res.status(201).json({ 
      message: 'Appointment booked successfully', 
      appointment 
    });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ error: 'Failed to book appointment' });
  }
};

// Get user appointments
const getAppointments = async (req, res) => {
  try {
    const { role, profileId } = req.user;
    
    let appointments = [];
    
    if (role === 'patient') {
      appointments = db.appointments.findAll({ patient_id: profileId });
      
      // Add doctor details
      appointments = appointments.map(apt => {
        const doctor = db.doctors.findOne({ id: apt.doctor_id });
        return {
          ...apt,
          doctor_first_name: doctor?.first_name,
          doctor_last_name: doctor?.last_name,
          specialty: doctor?.specialty
        };
      });
    } else if (role === 'doctor') {
      appointments = db.appointments.findAll({ doctor_id: profileId });
      
      // Add patient details
      appointments = appointments.map(apt => {
        const patient = db.patients.findOne({ id: apt.patient_id });
        return {
          ...apt,
          patient_first_name: patient?.first_name,
          patient_last_name: patient?.last_name,
          patient_phone: patient?.phone
        };
      });
    }

    // Sort by date (newest first)
    appointments.sort((a, b) => {
      const dateA = new Date(a.appointment_date + ' ' + a.appointment_time);
      const dateB = new Date(b.appointment_date + ' ' + b.appointment_time);
      return dateB - dateA;
    });

    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};

// Cancel appointment
const cancelAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = db.appointments.update(id, { status: 'cancelled' });

    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.json({ message: 'Appointment cancelled successfully' });
  } catch (error) {
    console.error('Cancellation error:', error);
    res.status(500).json({ error: 'Failed to cancel appointment' });
  }
};

module.exports = { 
  getDoctors, 
  getAvailableSlots, 
  bookAppointment, 
  getAppointments, 
  cancelAppointment 
};
