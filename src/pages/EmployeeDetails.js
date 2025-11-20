import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sampleData } from "../data";
import "./EmployeeDetails.css";

function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const employee = sampleData.find((e) => e.id === parseInt(id));

  if (!employee) return <h2>Employee Not Found</h2>;

  return (
    <div className="details-wrapper">
      <div className="employee-details-container">
        <h2>Employee Details</h2>

        <div className="details-card">
          <p>
            <strong>Name:</strong> {employee.name}
          </p>
          <p>
            <strong>Designation:</strong> {employee.designation}
          </p>
          <p>
            <strong>Email:</strong> {employee.email}
          </p>
          <p>
            <strong>Phone:</strong> {employee.phone}
          </p>
            <p>
            <strong>Location:</strong> {employee.location}
          </p>
        </div>

        <button className="back-btn" onClick={() => navigate("/memberlist")}>
          ⬅ Back to Member List
        </button>
      </div>
    </div>
  );
}

export default EmployeeDetails;
