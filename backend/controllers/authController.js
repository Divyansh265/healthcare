const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

// Register new user
const register = async (req, res) => {
  try {
    const { email, password, role, firstName, lastName, dateOfBirth, phone, specialty, qualification } = req.body;

    // Check if user exists
    const existingUser = db.users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create user
    const user = db.users.create({
      email,
      password_hash: hashedPassword,
      role,
      is_active: true
    });

    // Create profile based on role
    let profile = null;
    if (role === 'patient') {
      profile = db.patients.create({
        user_id: user.id,
        first_name: firstName,
        last_name: lastName,
        date_of_birth: dateOfBirth,
        phone
      });
    } else if (role === 'doctor') {
      profile = db.doctors.create({
        user_id: user.id,
        first_name: firstName,
        last_name: lastName,
        specialty,
        qualification,
        phone,
        consultation_fee: 500,
        available: true
      });
    }

    res.status(201).json({ 
      message: 'Registration successful', 
      user: { id: user.id, email: user.email, role: user.role }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Get user
    const user = db.users.findOne({ email, is_active: true });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Get profile data
    let profile = null;
    if (user.role === 'patient') {
      profile = db.patients.findOne({ user_id: user.id });
    } else if (user.role === 'doctor') {
      profile = db.doctors.findOne({ user_id: user.id });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role,
        profileId: profile?.id 
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ 
      token, 
      user: { 
        id: user.id, 
        email: user.email, 
        role: user.role,
        profile 
      } 
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = { register, login };
