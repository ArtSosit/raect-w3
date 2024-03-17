import React from "react";
import landmarks from "../../data/landmarks";
import "./AllUserPage.css";
import { Link } from "react-router-dom";

function AllLandmarkPage() {
  return (
    <div className="all-users-container">
      <Link to="/index" style={{ textDecoration: "none", color: "black" }}>
        <h1>All LandMark</h1>
      </Link>
      <div className="users-list">
        {landmarks.map((landmark) => (
          <div key={landmark.id} className="user-card">
            <div className="user-info">
              <div className="user-avatar">
                <img src={landmark.img} alt="Landmark Image" />
              </div>
              <div>
                <strong>Name:</strong> {landmark.name}
              </div>
              <div>
                <strong>Landmark:</strong> {landmark.landmark}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllLandmarkPage;
