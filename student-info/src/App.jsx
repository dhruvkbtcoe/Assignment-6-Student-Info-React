import React, { useState } from 'react';

// Component 1: Student Form
function StudentForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [department, setDepartment] = useState('Information Technology');
  const [marks, setMarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !rollNo || !marks) {
      alert('Please fill in all fields');
      return;
    }

    // Name Validation: Only letters and spaces allowed
    const nameRule = /^[a-zA-Z\s]+$/;
    if (!nameRule.test(name.trim())) {
      alert('Name must contain only letters and spaces (numbers are not allowed)');
      return;
    }

    if (Number(rollNo) <= 0) {
      alert('Roll number must be greater than 0');
      return;
    }

    if (Number(marks) < 0 || Number(marks) > 100) {
      alert('Marks must be between 0 and 100');
      return;
    }

    onSubmit({
      name: name.trim(),
      rollNo: rollNo,
      department: department,
      marks: marks,
    });

    // Reset input fields
    setName('');
    setRollNo('');
    setDepartment('Information Technology');
    setMarks('');
  };

  return (
    <div className="card-box form-card">
      <div className="card-header">
        <h3>Registration Form</h3>
        <span className="pill-badge form-badge">Input</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Student Name</label>
          <input
            type="text"
            placeholder="e.g. Dhruv Girase"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Roll Number</label>
          <input
            type="number"
            placeholder="e.g. 36"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="Information Technology">Information Technology</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
          </select>
        </div>

        <div className="input-group">
          <label>Marks (out of 100)</label>
          <input
            type="number"
            placeholder="e.g. 85"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Student Record
        </button>
      </form>
    </div>
  );
}

// Component 2: Student Details Display
function StudentDetails({ student }) {
  if (!student) {
    return (
      <div className="card-box empty-box">
        <div className="empty-content">
          <span className="empty-icon">📋</span>
          <h4>No Record Submitted</h4>
          <p>Fill out the form on the left to preview student details here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card-box details-card">
      <div className="card-header border-bottom">
        <h3>Student Details</h3>
        <span className="pill-badge success-badge">Active</span>
      </div>

      <div className="details-list">
        <div className="detail-item">
          <span className="detail-label">Full Name</span>
          <span className="detail-value highlight-name">{student.name}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Roll Number</span>
          <span className="detail-value">{student.rollNo}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Department</span>
          <span className="detail-value">{student.department}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Marks</span>
          <span className="detail-value marks-tag">{student.marks} / 100</span>
        </div>
      </div>
    </div>
  );
}

// Main Parent Component
function App() {
  const [studentData, setStudentData] = useState(null);

  const handleFormSubmit = (data) => {
    setStudentData(data);
  };

  return (
    <div className="app-wrapper">
      <div className="main-card">
        <header className="title-header">
          <h2>Student Information System</h2>
          <p>React Component Architecture Assignment</p>
        </header>

        <div className="layout-grid">
          <StudentForm onSubmit={handleFormSubmit} />
          <StudentDetails student={studentData} />
        </div>
      </div>
    </div>
  );
}

export default App;