import React, { useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [members, setMembers] = useState([
    { id: 1, name: "Amit Sharma", designation: "Developer", email: "amit@example.com" },
    { id: 2, name: "Priya Patel", designation: "Tester", email: "priya@example.com" },
    { id: 3, name: "Ravi Kumar", designation: "Network Engineer", email: "ravi@example.com" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editMember, setEditMember] = useState(null);
  const [formData, setFormData] = useState({ name: "", designation: "", email: "" });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or Update Member
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMember) {
      setMembers(
        members.map((m) => (m.id === editMember.id ? { ...editMember, ...formData } : m))
      );
      setEditMember(null);
    } else {
      const newMember = {
        id: Date.now(),
        name: formData.name,
        designation: formData.designation,
        email: formData.email,
      };
      setMembers([...members, newMember]);
    }

    setFormData({ name: "", designation: "", email: "" });
    setShowForm(false);
  };

  // Edit Member
  const handleEdit = (member) => {
    setEditMember(member);
    setFormData({
      name: member.name,
      designation: member.designation,
      email: member.email,
    });
    setShowForm(true);
  };

  // Delete Member
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setMembers(members.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>IT Department - Admin Dashboard</h1>

      <div className="dashboard-controls">
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "Add Member"}
        </button>
      </div>

      {showForm && (
        <form className="member-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="designation"
            placeholder="Enter Designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">{editMember ? "Update" : "Add"} Member</button>
        </form>
      )}

      <div className="member-table-container">
        <table className="member-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.designation}</td>
                <td>{member.email}</td>
                <td>
                  <div className="action-btns">
                    <button className="edit-btn" onClick={() => handleEdit(member)}>
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(member.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
