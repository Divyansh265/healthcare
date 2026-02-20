const fs = require('fs');
const path = require('path');
const pool = require('../config/database');

const migrate = async () => {
  try {
    console.log('Starting database migration...');
    
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    await pool.query(schema);
    
    console.log('✓ Database migration completed successfully');
    console.log('\nSample Login Credentials:');
    console.log('Admin: admin@healthcare.com / admin123');
    console.log('Doctor: dr.smith@healthcare.com / doctor123');
    console.log('Patient: patient@test.com / patient123');
    
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

migrate();
