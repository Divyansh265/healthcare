import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
    return (
        <div className="container">
            <h2>Welcome, {user.profile?.first_name}!</h2>

            <div className="grid" style={{ marginTop: '30px' }}>
                {user.role === 'patient' && (
                    <>
                        <div className="card" style={{ textAlign: 'center' }}>
                            <h3>📅 Book Appointment</h3>
                            <p style={{ margin: '16px 0', color: '#666' }}>
                                Schedule an appointment with our doctors
                            </p>
                            <Link to="/book-appointment">
                                <button className="btn btn-primary">Book Now</button>
                            </Link>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <h3>📋 My Appointments</h3>
                            <p style={{ margin: '16px 0', color: '#666' }}>
                                View your upcoming and past appointments
                            </p>
                            <Link to="/appointments">
                                <button className="btn btn-secondary">View Appointments</button>
                            </Link>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <h3>📄 Upload Report</h3>
                            <p style={{ margin: '16px 0', color: '#666' }}>
                                Upload your medical reports securely
                            </p>
                            <Link to="/upload-report">
                                <button className="btn btn-primary">Upload</button>
                            </Link>
                        </div>
                    </>
                )}

                {user.role === 'doctor' && (
                    <>
                        <div className="card" style={{ textAlign: 'center' }}>
                            <h3>📅 My Schedule</h3>
                            <p style={{ margin: '16px 0', color: '#666' }}>
                                View your appointments and schedule
                            </p>
                            <Link to="/appointments">
                                <button className="btn btn-primary">View Schedule</button>
                            </Link>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <h3>👥 Patients</h3>
                            <p style={{ margin: '16px 0', color: '#666' }}>
                                Manage your patient appointments
                            </p>
                            <Link to="/appointments">
                                <button className="btn btn-secondary">View Patients</button>
                            </Link>
                        </div>
                    </>
                )}
            </div>

            <div className="card" style={{ marginTop: '30px' }}>
                <h3>Profile Information</h3>
                <div style={{ marginTop: '16px' }}>
                    <p><strong>Name:</strong> {user.profile?.first_name} {user.profile?.last_name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                    {user.role === 'doctor' && (
                        <>
                            <p><strong>Specialty:</strong> {user.profile?.specialty}</p>
                            <p><strong>Qualification:</strong> {user.profile?.qualification}</p>
                        </>
                    )}
                    {user.role === 'patient' && (
                        <>
                            <p><strong>Phone:</strong> {user.profile?.phone}</p>
                            <p><strong>Blood Group:</strong> {user.profile?.blood_group || 'Not specified'}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
