import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { data } = await axios.post('/api/auth/login', formData);
            onLogin(data.token, data.user);
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '400px', marginTop: '80px' }}>
            <div className="card">
                <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>Login</h2>

                {error && <div className="error">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p style={{ marginTop: '20px', textAlign: 'center' }}>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>

                <div style={{ marginTop: '30px', padding: '16px', background: '#f5f5f5', borderRadius: '4px' }}>
                    <p style={{ fontSize: '14px', marginBottom: '8px' }}><strong>Test Credentials:</strong></p>
                    <p style={{ fontSize: '13px', margin: '4px 0' }}>Patient: patient@test.com / patient123</p>
                    <p style={{ fontSize: '13px', margin: '4px 0' }}>Doctor: dr.smith@healthcare.com / doctor123</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
