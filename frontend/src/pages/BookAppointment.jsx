import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookAppointment = ({ user }) => {
    const [step, setStep] = useState(1);
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState('');
    const [reason, setReason] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchDoctors();
    }, []);

    useEffect(() => {
        if (selectedDoctor && selectedDate) {
            fetchSlots();
        }
    }, [selectedDoctor, selectedDate]);

    const fetchDoctors = async () => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get('/api/appointments/doctors', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setDoctors(data);
        } catch (err) {
            setError('Failed to fetch doctors');
        }
    };

    const fetchSlots = async () => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get('/api/appointments/slots', {
                params: { doctorId: selectedDoctor.id, date: selectedDate },
                headers: { Authorization: `Bearer ${token}` }
            });

            if (data.schedule) {
                const slots = generateTimeSlots(data.schedule, data.bookedSlots);
                setAvailableSlots(slots);
            } else {
                setAvailableSlots([]);
                setError('Doctor not available on this day');
            }
        } catch (err) {
            setError('Failed to fetch slots');
        }
    };

    const generateTimeSlots = (schedule, bookedSlots) => {
        const slots = [];
        const startTime = new Date(`2000-01-01 ${schedule.start_time}`);
        const endTime = new Date(`2000-01-01 ${schedule.end_time}`);
        const duration = schedule.slot_duration;

        while (startTime < endTime) {
            const timeString = startTime.toTimeString().slice(0, 5);
            const isBooked = bookedSlots.some(slot => slot.slice(0, 5) === timeString);

            slots.push({ time: timeString, available: !isBooked });
            startTime.setMinutes(startTime.getMinutes() + duration);
        }

        return slots;
    };

    const handleBooking = async () => {
        setLoading(true);
        setError('');

        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/appointments', {
                doctorId: selectedDoctor.id,
                appointmentDate: selectedDate,
                appointmentTime: selectedSlot,
                reason
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            alert('Appointment booked successfully!');
            setStep(1);
            setSelectedDoctor(null);
            setSelectedDate('');
            setSelectedSlot('');
            setReason('');
        } catch (err) {
            setError(err.response?.data?.error || 'Booking failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2>Book Appointment</h2>

            <div className="progress-bar" style={{ marginTop: '20px' }}>
                <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Select Doctor</div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Choose Date & Time</div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Confirm</div>
            </div>

            {error && <div className="error">{error}</div>}

            {step === 1 && (
                <div>
                    <h3 style={{ marginTop: '20px' }}>Select a Doctor</h3>
                    <div className="grid">
                        {doctors.map((doctor) => (
                            <div
                                key={doctor.id}
                                className="doctor-card"
                                onClick={() => {
                                    setSelectedDoctor(doctor);
                                    setStep(2);
                                }}
                            >
                                <h3>Dr. {doctor.first_name} {doctor.last_name}</h3>
                                <p>{doctor.specialty}</p>
                                <p>{doctor.qualification}</p>
                                <p className="fee">₹{doctor.consultation_fee}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="card" style={{ marginTop: '20px' }}>
                    <button onClick={() => setStep(1)} className="btn">← Back</button>
                    <h3 style={{ marginTop: '16px' }}>
                        Dr. {selectedDoctor.first_name} {selectedDoctor.last_name} - {selectedDoctor.specialty}
                    </h3>

                    <div className="form-group" style={{ marginTop: '20px' }}>
                        <label>Select Date</label>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>

                    {selectedDate && availableSlots.length > 0 && (
                        <>
                            <h4 style={{ marginTop: '20px' }}>Available Time Slots</h4>
                            <div className="slots-grid">
                                {availableSlots.map((slot) => (
                                    <button
                                        key={slot.time}
                                        className={`slot ${selectedSlot === slot.time ? 'active' : ''}`}
                                        disabled={!slot.available}
                                        onClick={() => {
                                            setSelectedSlot(slot.time);
                                            setStep(3);
                                        }}
                                    >
                                        {slot.time}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}

                    {selectedDate && availableSlots.length === 0 && (
                        <p style={{ marginTop: '20px', color: '#666' }}>No slots available for this date</p>
                    )}
                </div>
            )}

            {step === 3 && (
                <div className="card" style={{ marginTop: '20px' }}>
                    <button onClick={() => setStep(2)} className="btn">← Back</button>
                    <h3 style={{ marginTop: '16px' }}>Confirm Appointment</h3>

                    <div style={{ marginTop: '20px', padding: '16px', background: '#f5f5f5', borderRadius: '4px' }}>
                        <p><strong>Doctor:</strong> Dr. {selectedDoctor.first_name} {selectedDoctor.last_name}</p>
                        <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
                        <p><strong>Date:</strong> {selectedDate}</p>
                        <p><strong>Time:</strong> {selectedSlot}</p>
                        <p><strong>Fee:</strong> ₹{selectedDoctor.consultation_fee}</p>
                    </div>

                    <div className="form-group" style={{ marginTop: '20px' }}>
                        <label>Reason for Visit</label>
                        <textarea
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            rows="4"
                            placeholder="Describe your symptoms or reason for consultation"
                            required
                        />
                    </div>

                    <button
                        onClick={handleBooking}
                        className="btn btn-primary"
                        disabled={loading || !reason}
                        style={{ marginTop: '16px' }}
                    >
                        {loading ? 'Booking...' : 'Confirm Booking'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default BookAppointment;
