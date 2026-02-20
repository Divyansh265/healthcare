import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
    return (
        <div className="navbar">
            <div className="container">
                <h1>🏥 Healthcare System</h1>
                <nav>
                    <Link to="/dashboard">Dashboard</Link>
                    {user.role === 'patient' && (
                        <>
                            <Link to="/book-appointment">Book Appointment</Link>
                            <Link to="/upload-report">Upload Report</Link>
                        </>
                    )}
                    <Link to="/appointments">Appointments</Link>
                    <span style={{ marginLeft: '20px', opacity: 0.8 }}>
                        {user.profile?.first_name} ({user.role})
                    </span>
                    <button
                        onClick={onLogout}
                        style={{
                            marginLeft: '20px',
                            background: 'transparent',
                            border: '1px solid white',
                            color: 'white',
                            padding: '6px 16px',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
