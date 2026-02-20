import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyAppointments = ({ user }) => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get('/api/appointments', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAppointments(data);
        } catch (err) {
            setError('Failed to fetch appointments');
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = async (id) => {
        if (!window.confirm('Are you sure you want to cancel this appointment?')) {
            return;
        }

        try {
            const token = localStorage.getItem('token');
            await axios.patch(`/api/appointments/${id}/cancel`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Appointment cancelled successfully');
            fetchAppointments();
        } catch (err) {
            alert('Failed to cancel appointment');
        }
    };

    if (loading) return <div className="loading">Loading appointments...</div>;

    return (
        <div className="container">
            <h2>My Appointments</h2>

            {error && <div className="error">{error}</div>}

            {appointments.length === 0 ? (
                <div className="card" style={{ marginTop: '20px', textAlign: 'center', padding: '40px' }}>
                    <p style={{ color: '#666' }}>No appointments found</p>
                </div>
            ) : (
                <div style={{ marginTop: '20px' }}>
                    {appointments.map((appointment) => (
                        <div
                            key={appointment.id}
                            className={`appointment-card ${appointment.status === 'cancelled' ? 'cancelled' : ''}`}
                        >
                            {user.role === 'patient' ? (
                                <>
                                    <h4>Dr. {appointment.doctor_first_name} {appointment.doctor_last_name}</h4>
                                    <p>{appointment.specialty}</p>
                                </>
                            ) : (
                                <>
                                    <h4>{appointment.patient_first_name} {appointment.patient_last_name}</h4>
                                    <p>Phone: {appointment.patient_phone}</p>
                                </>
                            )}

                            <p><strong>Date:</strong> {new Date(appointment.appointment_date).toLocaleDateString()}</p>
                            <p><strong>Time:</strong> {appointment.appointment_time.slice(0, 5)}</p>
                            {appointment.reason && <p><strong>Reason:</strong> {appointment.reason}</p>}

                            <span className={`status-badge ${appointment.status}`}>
                                {appointment.status.toUpperCase()}
                            </span>

                            {appointment.status === 'scheduled' && (
                                <button
                                    onClick={() => handleCancel(appointment.id)}
                                    className="btn btn-danger"
                                    style={{ marginLeft: '12px', marginTop: '8px' }}
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyAppointments;
