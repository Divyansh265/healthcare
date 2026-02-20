import React, { useState } from 'react';
import axios from 'axios';

const UploadReport = ({ user }) => {
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        reportType: '',
        reportDate: '',
        description: ''
    });
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
            if (!validTypes.includes(selectedFile.type)) {
                setError('Only PDF and image files are allowed');
                setFile(null);
                return;
            }

            if (selectedFile.size > 10 * 1024 * 1024) {
                setError('File size must be less than 10MB');
                setFile(null);
                return;
            }

            setFile(selectedFile);
            setError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setError('Please select a file');
            return;
        }

        setUploading(true);
        setError('');
        setSuccess(false);

        const data = new FormData();
        data.append('report', file);
        data.append('patientId', user.profile.id);
        data.append('reportType', formData.reportType);
        data.append('reportDate', formData.reportDate);
        data.append('description', formData.description);

        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/reports', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });

            setSuccess(true);
            setFile(null);
            setFormData({ reportType: '', reportDate: '', description: '' });
            e.target.reset();
        } catch (err) {
            setError(err.response?.data?.error || 'Upload failed');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '600px' }}>
            <h2>Upload Medical Report</h2>

            <div className="card" style={{ marginTop: '20px' }}>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">Report uploaded successfully!</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Report Type</label>
                        <select
                            value={formData.reportType}
                            onChange={(e) => setFormData({ ...formData, reportType: e.target.value })}
                            required
                        >
                            <option value="">Select type</option>
                            <option value="lab">Lab Report</option>
                            <option value="xray">X-Ray</option>
                            <option value="mri">MRI</option>
                            <option value="ct_scan">CT Scan</option>
                            <option value="prescription">Prescription</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Report Date</label>
                        <input
                            type="date"
                            value={formData.reportDate}
                            onChange={(e) => setFormData({ ...formData, reportDate: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows="3"
                            placeholder="Add any notes about this report"
                        />
                    </div>

                    <div className="form-group">
                        <label>File (PDF or Image, max 10MB)</label>
                        <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            required
                        />
                        {file && (
                            <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
                                {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </p>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={uploading}>
                        {uploading ? 'Uploading...' : 'Upload Report'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UploadReport;
