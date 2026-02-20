-- Comprehensive Dummy Data for Healthcare Appointment System
-- Run this after the main schema.sql migration

-- Note: All passwords are hashed with bcrypt (12 rounds)
-- Default password for all users: "password123"
-- Password hash: $2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW

-- ============================================
-- ADDITIONAL DOCTORS (Total: 10 doctors)
-- ============================================

-- Doctor 3: Pediatrician
INSERT INTO users (email, password_hash, role) VALUES 
('dr.williams@healthcare.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'doctor');

INSERT INTO doctors (user_id, first_name, last_name, specialty, qualification, phone, consultation_fee, experience_years) 
SELECT id, 'Emily', 'Williams', 'Pediatrics', 'MBBS, MD (Pediatrics)', '+1234567893', 700, 12 
FROM users WHERE email = 'dr.williams@healthcare.com';

-- Doctor 4: Orthopedic
INSERT INTO users (email, password_hash, role) VALUES 
('dr.brown@healthcare.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'doctor');

INSERT INTO doctors (user_id, first_name, last_name, specialty, qualification, phone, consultation_fee, experience_years) 
SELECT id, 'Michael', 'Brown', 'Orthopedics', 'MBBS, MS (Ortho)', '+1234567894', 1200, 15 
FROM users WHERE email = 'dr.brown@healthcare.com';

-- Doctor 5: Neurologist
INSERT INTO users (email, password_hash, role) VALUES 
('dr.davis@healthcare.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'doctor');

INSERT INTO doctors (user_id, first_name, last_name, specialty, qualification, phone, consultation_fee, experience_years) 
SELECT id, 'Jennifer', 'Davis', 'Neurology', 'MBBS, DM (Neurology)', '+1234567895', 1500, 18 
FROM users WHERE email = 'dr.davis@healthcare.com';

-- Doctor 6: Gynecologist
INSERT INTO users (email, password_hash, role) VALUES 
('dr.wilson@healthcare.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'doctor');

INSERT INTO doctors (user_id, first_name, last_name, specialty, qualification, phone, consultation_fee, experience_years) 
SELECT id, 'Lisa', 'Wilson', 'Gynecology', 'MBBS, MD (Gynec)', '+1234567896', 900, 10 
FROM users WHERE email = 'dr.wilson@healthcare.com';

-- Doctor 7: ENT Specialist
INSERT INTO users (email, password_hash, role) VALUES 
('dr.taylor@healthcare.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'doctor');

INSERT INTO doctors (user_id, first_name, last_name, specialty, qualification, phone, consultation_fee, experience_years) 
SELECT id, 'Robert', 'Taylor', 'ENT', 'MBBS, MS (ENT)', '+1234567897', 800, 9 
FROM users WHERE email = 'dr.taylor@healthcare.com';

-- Doctor 8: Psychiatrist
INSERT INTO users (email, password_hash, role) VALUES 
('dr.anderson@healthcare.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'doctor');

INSERT INTO doctors (user_id, first_name, last_name, specialty, qualification, phone, consultation_fee, experience_years) 
SELECT id, 'David', 'Anderson', 'Psychiatry', 'MBBS, MD (Psychiatry)', '+1234567898', 1100, 14 
FROM users WHERE email = 'dr.anderson@healthcare.com';

-- Doctor 9: Ophthalmologist
INSERT INTO users (email, password_hash, role) VALUES 
('dr.thomas@healthcare.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'doctor');

INSERT INTO doctors (user_id, first_name, last_name, specialty, qualification, phone, consultation_fee, experience_years) 
SELECT id, 'Maria', 'Thomas', 'Ophthalmology', 'MBBS, MS (Ophth)', '+1234567899', 850, 11 
FROM users WHERE email = 'dr.thomas@healthcare.com';

-- Doctor 10: General Physician
INSERT INTO users (email, password_hash, role) VALUES 
('dr.jackson@healthcare.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'doctor');

INSERT INTO doctors (user_id, first_name, last_name, specialty, qualification, phone, consultation_fee, experience_years) 
SELECT id, 'James', 'Jackson', 'General Medicine', 'MBBS, MD', '+1234567800', 600, 7 
FROM users WHERE email = 'dr.jackson@healthcare.com';

-- ============================================
-- DOCTOR SCHEDULES (for new doctors)
-- ============================================

-- Dr. Williams (Pediatrics) - Mon to Fri, 8 AM - 4 PM
INSERT INTO doctor_schedules (doctor_id, day_of_week, start_time, end_time, slot_duration)
SELECT id, 1, '08:00', '16:00', 30 FROM doctors WHERE first_name = 'Emily'
UNION ALL
SELECT id, 2, '08:00', '16:00', 30 FROM doctors WHERE first_name = 'Emily'
UNION ALL
SELECT id, 3, '08:00', '16:00', 30 FROM doctors WHERE first_name = 'Emily'
UNION ALL
SELECT id, 4, '08:00', '16:00', 30 FROM doctors WHERE first_name = 'Emily'
UNION ALL
SELECT id, 5, '08:00', '16:00', 30 FROM doctors WHERE first_name = 'Emily';

-- Dr. Brown (Orthopedics) - Mon to Sat, 10 AM - 6 PM
INSERT INTO doctor_schedules (doctor_id, day_of_week, start_time, end_time, slot_duration)
SELECT id, 1, '10:00', '18:00', 30 FROM doctors WHERE first_name = 'Michael'
UNION ALL
SELECT id, 2, '10:00', '18:00', 30 FROM doctors WHERE first_name = 'Michael'
UNION ALL
SELECT id, 3, '10:00', '18:00', 30 FROM doctors WHERE first_name = 'Michael'
UNION ALL
SELECT id, 4, '10:00', '18:00', 30 FROM doctors WHERE first_name = 'Michael'
UNION ALL
SELECT id, 5, '10:00', '18:00', 30 FROM doctors WHERE first_name = 'Michael'
UNION ALL
SELECT id, 6, '10:00', '18:00', 30 FROM doctors WHERE first_name = 'Michael';

-- Dr. Davis (Neurology) - Mon, Wed, Fri, 11 AM - 5 PM
INSERT INTO doctor_schedules (doctor_id, day_of_week, start_time, end_time, slot_duration)
SELECT id, 1, '11:00', '17:00', 45 FROM doctors WHERE first_name = 'Jennifer'
UNION ALL
SELECT id, 3, '11:00', '17:00', 45 FROM doctors WHERE first_name = 'Jennifer'
UNION ALL
SELECT id, 5, '11:00', '17:00', 45 FROM doctors WHERE first_name = 'Jennifer';

-- Dr. Wilson (Gynecology) - Tue, Thu, Sat, 9 AM - 3 PM
INSERT INTO doctor_schedules (doctor_id, day_of_week, start_time, end_time, slot_duration)
SELECT id, 2, '09:00', '15:00', 30 FROM doctors WHERE first_name = 'Lisa'
UNION ALL
SELECT id, 4, '09:00', '15:00', 30 FROM doctors WHERE first_name = 'Lisa'
UNION ALL
SELECT id, 6, '09:00', '15:00', 30 FROM doctors WHERE first_name = 'Lisa';

-- Dr. Taylor (ENT) - Mon to Fri, 9 AM - 5 PM
INSERT INTO doctor_schedules (doctor_id, day_of_week, start_time, end_time, slot_duration)
SELECT id, 1, '09:00', '17:00', 30 FROM doctors WHERE first_name = 'Robert'
UNION ALL
SELECT id, 2, '09:00', '17:00', 30 FROM doctors WHERE first_name = 'Robert'
UNION ALL
SELECT id, 3, '09:00', '17:00', 30 FROM doctors WHERE first_name = 'Robert'
UNION ALL
SELECT id, 4, '09:00', '17:00', 30 FROM doctors WHERE first_name = 'Robert'
UNION ALL
SELECT id, 5, '09:00', '17:00', 30 FROM doctors WHERE first_name = 'Robert';

-- Dr. Anderson (Psychiatry) - Mon to Fri, 2 PM - 8 PM
INSERT INTO doctor_schedules (doctor_id, day_of_week, start_time, end_time, slot_duration)
SELECT id, 1, '14:00', '20:00', 60 FROM doctors WHERE first_name = 'David'
UNION ALL
SELECT id, 2, '14:00', '20:00', 60 FROM doctors WHERE first_name = 'David'
UNION ALL
SELECT id, 3, '14:00', '20:00', 60 FROM doctors WHERE first_name = 'David'
UNION ALL
SELECT id, 4, '14:00', '20:00', 60 FROM doctors WHERE first_name = 'David'
UNION ALL
SELECT id, 5, '14:00', '20:00', 60 FROM doctors WHERE first_name = 'David';

-- Dr. Thomas (Ophthalmology) - Mon to Sat, 10 AM - 4 PM
INSERT INTO doctor_schedules (doctor_id, day_of_week, start_time, end_time, slot_duration)
SELECT id, 1, '10:00', '16:00', 20 FROM doctors WHERE first_name = 'Maria'
UNION ALL
SELECT id, 2, '10:00', '16:00', 20 FROM doctors WHERE first_name = 'Maria'
UNION ALL
SELECT id, 3, '10:00', '16:00', 20 FROM doctors WHERE first_name = 'Maria'
UNION ALL
SELECT id, 4, '10:00', '16:00', 20 FROM doctors WHERE first_name = 'Maria'
UNION ALL
SELECT id, 5, '10:00', '16:00', 20 FROM doctors WHERE first_name = 'Maria'
UNION ALL
SELECT id, 6, '10:00', '16:00', 20 FROM doctors WHERE first_name = 'Maria';

-- Dr. Jackson (General Medicine) - Mon to Fri, 8 AM - 8 PM
INSERT INTO doctor_schedules (doctor_id, day_of_week, start_time, end_time, slot_duration)
SELECT id, 1, '08:00', '20:00', 30 FROM doctors WHERE first_name = 'James'
UNION ALL
SELECT id, 2, '08:00', '20:00', 30 FROM doctors WHERE first_name = 'James'
UNION ALL
SELECT id, 3, '08:00', '20:00', 30 FROM doctors WHERE first_name = 'James'
UNION ALL
SELECT id, 4, '08:00', '20:00', 30 FROM doctors WHERE first_name = 'James'
UNION ALL
SELECT id, 5, '08:00', '20:00', 30 FROM doctors WHERE first_name = 'James';

-- ============================================
-- ADDITIONAL PATIENTS (Total: 10 patients)
-- ============================================

-- Patient 2
INSERT INTO users (email, password_hash, role) VALUES 
('john.doe@email.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'patient');

INSERT INTO patients (user_id, first_name, last_name, date_of_birth, gender, phone, blood_group) 
SELECT id, 'John', 'Doe', '1988-03-20', 'Male', '+1234567801', 'A+' 
FROM users WHERE email = 'john.doe@email.com';

-- Patient 3
INSERT INTO users (email, password_hash, role) VALUES 
('mary.smith@email.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'patient');

INSERT INTO patients (user_id, first_name, last_name, date_of_birth, gender, phone, blood_group) 
SELECT id, 'Mary', 'Smith', '1992-07-15', 'Female', '+1234567802', 'B+' 
FROM users WHERE email = 'mary.smith@email.com';

-- Patient 4
INSERT INTO users (email, password_hash, role) VALUES 
('robert.wilson@email.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'patient');

INSERT INTO patients (user_id, first_name, last_name, date_of_birth, gender, phone, blood_group) 
SELECT id, 'Robert', 'Wilson', '1985-11-30', 'Male', '+1234567803', 'O-' 
FROM users WHERE email = 'robert.wilson@email.com';

-- Patient 5
INSERT INTO users (email, password_hash, role) VALUES 
('emma.brown@email.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'patient');

INSERT INTO patients (user_id, first_name, last_name, date_of_birth, gender, phone, blood_group) 
SELECT id, 'Emma', 'Brown', '1998-02-14', 'Female', '+1234567804', 'AB+' 
FROM users WHERE email = 'emma.brown@email.com';

-- Patient 6
INSERT INTO users (email, password_hash, role) VALUES 
('david.lee@email.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'patient');

INSERT INTO patients (user_id, first_name, last_name, date_of_birth, gender, phone, blood_group) 
SELECT id, 'David', 'Lee', '1990-09-08', 'Male', '+1234567805', 'A-' 
FROM users WHERE email = 'david.lee@email.com';

-- Patient 7
INSERT INTO users (email, password_hash, role) VALUES 
('sophia.garcia@email.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'patient');

INSERT INTO patients (user_id, first_name, last_name, date_of_birth, gender, phone, blood_group) 
SELECT id, 'Sophia', 'Garcia', '1987-06-25', 'Female', '+1234567806', 'B-' 
FROM users WHERE email = 'sophia.garcia@email.com';

-- Patient 8
INSERT INTO users (email, password_hash, role) VALUES 
('michael.martinez@email.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'patient');

INSERT INTO patients (user_id, first_name, last_name, date_of_birth, gender, phone, blood_group) 
SELECT id, 'Michael', 'Martinez', '1993-12-10', 'Male', '+1234567807', 'O+' 
FROM users WHERE email = 'michael.martinez@email.com';

-- Patient 9
INSERT INTO users (email, password_hash, role) VALUES 
('olivia.rodriguez@email.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'patient');

INSERT INTO patients (user_id, first_name, last_name, date_of_birth, gender, phone, blood_group) 
SELECT id, 'Olivia', 'Rodriguez', '1996-04-18', 'Female', '+1234567808', 'AB-' 
FROM users WHERE email = 'olivia.rodriguez@email.com';

-- Patient 10
INSERT INTO users (email, password_hash, role) VALUES 
('william.anderson@email.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'patient');

INSERT INTO patients (user_id, first_name, last_name, date_of_birth, gender, phone, blood_group) 
SELECT id, 'William', 'Anderson', '1989-08-22', 'Male', '+1234567809', 'A+' 
FROM users WHERE email = 'william.anderson@email.com';

-- ============================================
-- SAMPLE APPOINTMENTS (Mix of scheduled, completed, cancelled)
-- ============================================

-- Future appointments (Scheduled)
INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status, reason)
SELECT 
    (SELECT id FROM patients WHERE first_name = 'Alice'),
    (SELECT id FROM doctors WHERE first_name = 'John'),
    CURRENT_DATE + INTERVAL '2 days',
    '10:00',
    'scheduled',
    'Regular checkup';

INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status, reason)
SELECT 
    (SELECT id FROM patients WHERE first_name = 'John'),
    (SELECT id FROM doctors WHERE first_name = 'Emily'),
    CURRENT_DATE + INTERVAL '3 days',
    '09:00',
    'scheduled',
    'Child vaccination';

INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status, reason)
SELECT 
    (SELECT id FROM patients WHERE first_name = 'Mary'),
    (SELECT id FROM doctors WHERE first_name = 'Sarah'),
    CURRENT_DATE + INTERVAL '1 day',
    '11:00',
    'scheduled',
    'Skin rash consultation';

INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status, reason)
SELECT 
    (SELECT id FROM patients WHERE first_name = 'Robert'),
    (SELECT id FROM doctors WHERE first_name = 'Michael'),
    CURRENT_DATE + INTERVAL '5 days',
    '14:00',
    'scheduled',
    'Knee pain';

INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status, reason)
SELECT 
    (SELECT id FROM patients WHERE first_name = 'Emma'),
    (SELECT id FROM doctors WHERE first_name = 'Lisa'),
    CURRENT_DATE + INTERVAL '4 days',
    '10:30',
    'scheduled',
    'Routine gynecological checkup';

-- Past appointments (Completed)
INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status, reason)
SELECT 
    (SELECT id FROM patients WHERE first_name = 'Alice'),
    (SELECT id FROM doctors WHERE first_name = 'John'),
    CURRENT_DATE - INTERVAL '5 days',
    '10:00',
    'completed',
    'Follow-up consultation';

INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status, reason)
SELECT 
    (SELECT id FROM patients WHERE first_name = 'David'),
    (SELECT id FROM doctors WHERE first_name = 'Robert'),
    CURRENT_DATE - INTERVAL '3 days',
    '11:30',
    'completed',
    'Ear infection';

INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status, reason)
SELECT 
    (SELECT id FROM patients WHERE first_name = 'Sophia'),
    (SELECT id FROM doctors WHERE first_name = 'Maria'),
    CURRENT_DATE - INTERVAL '7 days',
    '15:00',
    'completed',
    'Eye examination';

-- Cancelled appointments
INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status, reason)
SELECT 
    (SELECT id FROM patients WHERE first_name = 'Michael'),
    (SELECT id FROM doctors WHERE first_name = 'David'),
    CURRENT_DATE + INTERVAL '1 day',
    '16:00',
    'cancelled',
    'Stress consultation';

INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status, reason)
SELECT 
    (SELECT id FROM patients WHERE first_name = 'Olivia'),
    (SELECT id FROM doctors WHERE first_name = 'James'),
    CURRENT_DATE - INTERVAL '2 days',
    '09:30',
    'cancelled',
    'General checkup';

-- ============================================
-- SAMPLE NOTIFICATIONS
-- ============================================

INSERT INTO notifications (user_id, type, message, is_read)
SELECT 
    (SELECT user_id FROM patients WHERE first_name = 'Alice'),
    'appointment_reminder',
    'Reminder: You have an appointment with Dr. John Smith tomorrow at 10:00 AM',
    false;

INSERT INTO notifications (user_id, type, message, is_read)
SELECT 
    (SELECT user_id FROM patients WHERE first_name = 'John'),
    'appointment_confirmed',
    'Your appointment with Dr. Emily Williams has been confirmed for ' || (CURRENT_DATE + INTERVAL '3 days') || ' at 09:00 AM',
    false;

INSERT INTO notifications (user_id, type, message, is_read)
SELECT 
    (SELECT user_id FROM doctors WHERE first_name = 'John'),
    'new_appointment',
    'New appointment booked by Alice Johnson for ' || (CURRENT_DATE + INTERVAL '2 days'),
    false;

-- ============================================
-- SAMPLE PRESCRIPTIONS
-- ============================================

INSERT INTO prescriptions (appointment_id, patient_id, doctor_id, diagnosis, medications, instructions)
SELECT 
    (SELECT id FROM appointments WHERE status = 'completed' LIMIT 1),
    (SELECT id FROM patients WHERE first_name = 'Alice'),
    (SELECT id FROM doctors WHERE first_name = 'John'),
    'Hypertension',
    'Amlodipine 5mg - Once daily, Aspirin 75mg - Once daily',
    'Take medications after breakfast. Monitor blood pressure daily. Follow up in 2 weeks.';

INSERT INTO prescriptions (appointment_id, patient_id, doctor_id, diagnosis, medications, instructions)
SELECT 
    (SELECT id FROM appointments WHERE status = 'completed' OFFSET 1 LIMIT 1),
    (SELECT id FROM patients WHERE first_name = 'David'),
    (SELECT id FROM doctors WHERE first_name = 'Robert'),
    'Acute Otitis Media',
    'Amoxicillin 500mg - Three times daily for 7 days, Paracetamol 500mg - As needed for pain',
    'Complete the full course of antibiotics. Avoid water in ears. Return if symptoms worsen.';

-- ============================================
-- SUMMARY
-- ============================================

-- Display summary
SELECT 'Data insertion completed!' as status;
SELECT COUNT(*) as total_users FROM users;
SELECT COUNT(*) as total_doctors FROM doctors;
SELECT COUNT(*) as total_patients FROM patients;
SELECT COUNT(*) as total_appointments FROM appointments;
SELECT COUNT(*) as total_schedules FROM doctor_schedules;
SELECT COUNT(*) as total_notifications FROM notifications;
SELECT COUNT(*) as total_prescriptions FROM prescriptions;
