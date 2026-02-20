const express = require('express');
const { 
  getDoctors, 
  getAvailableSlots, 
  bookAppointment, 
  getAppointments, 
  cancelAppointment 
} = require('../controllers/appointmentController');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/doctors', authenticate, getDoctors);
router.get('/slots', authenticate, getAvailableSlots);
router.post('/', authenticate, authorize('patient'), bookAppointment);
router.get('/', authenticate, getAppointments);
router.patch('/:id/cancel', authenticate, cancelAppointment);

module.exports = router;
