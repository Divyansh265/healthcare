const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Helper functions to read/write JSON files
const readData = (filename) => {
  const filePath = path.join(dataDir, filename);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]');
    return [];
  }
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const writeData = (filename, data) => {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Database operations
const db = {
  users: {
    findAll: () => readData('users.json'),
    findOne: (query) => {
      const users = readData('users.json');
      return users.find(user => {
        return Object.keys(query).every(key => user[key] === query[key]);
      });
    },
    create: (userData) => {
      const users = readData('users.json');
      const newUser = {
        id: Date.now().toString(),
        ...userData,
        created_at: new Date().toISOString()
      };
      users.push(newUser);
      writeData('users.json', users);
      return newUser;
    },
    update: (id, updates) => {
      const users = readData('users.json');
      const index = users.findIndex(u => u.id === id);
      if (index !== -1) {
        users[index] = { ...users[index], ...updates };
        writeData('users.json', users);
        return users[index];
      }
      return null;
    }
  },

  doctors: {
    findAll: (query = {}) => {
      const doctors = readData('doctors.json');
      if (Object.keys(query).length === 0) return doctors;
      return doctors.filter(doctor => {
        return Object.keys(query).every(key => doctor[key] === query[key]);
      });
    },
    findOne: (query) => {
      const doctors = readData('doctors.json');
      return doctors.find(doctor => {
        return Object.keys(query).every(key => doctor[key] === query[key]);
      });
    },
    create: (doctorData) => {
      const doctors = readData('doctors.json');
      const newDoctor = {
        id: Date.now().toString(),
        ...doctorData,
        created_at: new Date().toISOString()
      };
      doctors.push(newDoctor);
      writeData('doctors.json', doctors);
      return newDoctor;
    }
  },

  patients: {
    findAll: () => readData('patients.json'),
    findOne: (query) => {
      const patients = readData('patients.json');
      return patients.find(patient => {
        return Object.keys(query).every(key => patient[key] === query[key]);
      });
    },
    create: (patientData) => {
      const patients = readData('patients.json');
      const newPatient = {
        id: Date.now().toString(),
        ...patientData,
        created_at: new Date().toISOString()
      };
      patients.push(newPatient);
      writeData('patients.json', patients);
      return newPatient;
    }
  },

  appointments: {
    findAll: (query = {}) => {
      const appointments = readData('appointments.json');
      if (Object.keys(query).length === 0) return appointments;
      return appointments.filter(apt => {
        return Object.keys(query).every(key => apt[key] === query[key]);
      });
    },
    findOne: (query) => {
      const appointments = readData('appointments.json');
      return appointments.find(apt => {
        return Object.keys(query).every(key => apt[key] === query[key]);
      });
    },
    create: (appointmentData) => {
      const appointments = readData('appointments.json');
      const newAppointment = {
        id: Date.now().toString(),
        ...appointmentData,
        created_at: new Date().toISOString()
      };
      appointments.push(newAppointment);
      writeData('appointments.json', appointments);
      return newAppointment;
    },
    update: (id, updates) => {
      const appointments = readData('appointments.json');
      const index = appointments.findIndex(a => a.id === id);
      if (index !== -1) {
        appointments[index] = { ...appointments[index], ...updates };
        writeData('appointments.json', appointments);
        return appointments[index];
      }
      return null;
    }
  },

  reports: {
    findAll: (query = {}) => {
      const reports = readData('reports.json');
      if (Object.keys(query).length === 0) return reports;
      return reports.filter(report => {
        return Object.keys(query).every(key => report[key] === query[key]);
      });
    },
    create: (reportData) => {
      const reports = readData('reports.json');
      const newReport = {
        id: Date.now().toString(),
        ...reportData,
        created_at: new Date().toISOString()
      };
      reports.push(newReport);
      writeData('reports.json', reports);
      return newReport;
    }
  }
};

console.log('✓ Local JSON database initialized');

module.exports = db;
