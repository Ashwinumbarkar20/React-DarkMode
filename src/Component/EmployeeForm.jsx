import React, { useState } from "react";
import "./EmployeeForm.css";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    designation: "",
    department: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Details:", employee);
    alert("Employee details submitted!");
    setEmployee({ name: "", email: "", designation: "", department: "" });
  };

  return (
    <div className="form-container">
      <h2>Add Employee Details</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        <label>
          Name:
          </label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        
        <label>
          Email:
        </label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />

        <label>
          Designation:
                  </label>
          <input
            type="text"
            name="designation"
            value={employee.designation}
            onChange={handleChange}
            required
          />
        
        <label>
          Department:
                </label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
            required
          />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
