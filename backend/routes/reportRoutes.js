const express = require('express');
const { uploadReport, getReports, downloadReport } = require('../controllers/reportController');
const { authenticate } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/', authenticate, upload.single('report'), uploadReport);
router.get('/patient/:patientId', authenticate, getReports);
router.get('/:id/download', authenticate, downloadReport);

module.exports = router;
