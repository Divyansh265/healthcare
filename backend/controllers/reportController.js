const db = require('../config/database');
const path = require('path');

// Upload medical report
const uploadReport = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { patientId, appointmentId, reportType, reportDate, description } = req.body;
    const filePath = req.file.path;
    const fileName = req.file.originalname;
    const fileType = req.file.mimetype;

    const report = db.reports.create({
      patient_id: patientId,
      appointment_id: appointmentId || null,
      file_name: fileName,
      file_path: filePath,
      file_type: fileType,
      report_type: reportType,
      report_date: reportDate,
      description
    });

    res.status(201).json({ 
      message: 'Report uploaded successfully', 
      report 
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload report' });
  }
};

// Get patient reports
const getReports = async (req, res) => {
  try {
    const { patientId } = req.params;

    const reports = db.reports.findAll({ patient_id: patientId });
    
    // Sort by date (newest first)
    reports.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    res.json(reports);
  } catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({ error: 'Failed to fetch reports' });
  }
};

// Download report
const downloadReport = async (req, res) => {
  try {
    const { id } = req.params;

    const report = db.reports.findAll().find(r => r.id === id);
    
    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }

    res.download(report.file_path, report.file_name);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Failed to download report' });
  }
};

module.exports = { uploadReport, getReports, downloadReport };
