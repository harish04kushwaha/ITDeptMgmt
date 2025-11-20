import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sampleData } from "../data";
import "./MemberList.css";

function MemberList() {
  const [members, setMembers] = useState(sampleData);
  const [search, setSearch] = useState("");
  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const navigate = useNavigate();

  // -------------------------
  // FILTER LOGIC
  // -------------------------
  useEffect(() => {
    let filtered = sampleData;

    if (search.trim() !== "") {
      filtered = filtered.filter((m) =>
        m.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (designation !== "") {
      filtered = filtered.filter((m) => m.designation === designation);
    }

    if (location !== "") {
      filtered = filtered.filter((m) => m.location === location);
    }

    setMembers(filtered);
    setCurrentPage(1); // Reset page when filters change
  }, [search, designation, location]);

  // -------------------------
  // PAGINATION LOGIC
  // -------------------------
  const last = currentPage * itemsPerPage;
  const first = last - itemsPerPage;

  const currentPageData = members.slice(first, last);

  const totalPages = Math.ceil(members.length / itemsPerPage);

  // -------------------------
  // RESET FILTERS
  // -------------------------
  const resetFilters = () => {
    setSearch("");
    setDesignation("");
    setLocation("");
    setMembers(sampleData);
    setCurrentPage(1);
  };

  return (
    <div className="member-container">
      <h2>IT Department Members</h2>

      {/* FILTER ROW */}
      <div className="filter-row">
        <input
          type="text"
          placeholder="Search by name..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="filter-dropdown"
        >
          <option value="">All Designations</option>

          {[...new Set(sampleData.map((d) => d.designation))].map((des) => (
            <option key={des} value={des}>
              {des}
            </option>
          ))}
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="filter-dropdown"
        >
          {" "}
          <option value="">All Locations</option>{" "}
          {[...new Set(sampleData.map((d) => d.location))].map((loc) => (
            <option key={loc} value={loc}>
              {" "}
              {loc}{" "}
            </option>
          ))}{" "}
        </select>

        <button className="reset-btn" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      {/* TABLE WITH CARD SUPPORT */}
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {currentPageData.map((m) => (
            <tr key={m.id}>
              <td data-label="Location">{m.location}</td>

              <td
                data-label="Name"
                className="clickable-name"
                onClick={() => navigate(`/employee/${m.id}`)}
              >
                {m.name}
              </td>

              <td data-label="Designation">{m.designation}</td>
              <td data-label="Email">{m.email}</td>
              <td data-label="Phone">{m.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MemberList;
