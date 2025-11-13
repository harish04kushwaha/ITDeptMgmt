import React, { useEffect, useState } from "react";
import "./MemberList.css";

// Later replace with backend API
const sampleData = [
  {
    id: 1,
    name: "Ashok Kumar Singh",
    designation: "Sr. Software Developer",
    email: "2011aksingh@gmail.com",
  },
  {
    id: 2,
    name: "Anita Singh",
    designation: "Network Engineer",
    email: "anita@company.com",
  },
  {
    id: 3,
    name: "James Patel",
    designation: "Sr. Software Developer",
    email: "vikash@company.com",
  },
  {
    id: 4,
    name: "Dark Knight",
    designation: "System Admin",
    email: "robin@company.com",
  },
  {
    id: 5,
    name: "Alpha Yadav",
    designation: "Database Administrator",
    email: "alpha@company.com",
  },
  {
    id: 6,
    name: "Bravo Singh",
    designation: "Sr. Software Developer",
    email: "bravo@company.com",
  },
  {
    id: 7,
    name: "Delta chaudhari",
    designation: "Developer",
    email: "delta@company.com",
  },
];
function MemberList() {
  const [members, setMembers] = useState([]);
  const [designation, setDesignation] = useState("");

  useEffect(() => {
    if (designation === "") setMembers(sampleData);
    else setMembers(sampleData.filter((m) => m.designation === designation));
  }, [designation]);

  return (
    <div className="member-container">
      <h2>IT Department Members</h2>
      <select
        onChange={(e) => setDesignation(e.target.value)}
        className="filter-dropdown"
      >
        <option value="">All Designations</option>
        <option value="Developer">Developer</option>
        <option value="Network Engineer">Network Engineer</option>
        <option value="System Admin">System Admin</option>
        <option value="Sr. Software Developer">Sr. Software Developer</option>
        <option value="Database Administrator">Database Administrator</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.designation}</td>
              <td>{m.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MemberList;
