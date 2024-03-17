import React from "react";
import users from "../../data/Users";
import "./AllUserPage.css"; // Import CSS file for styling

function AllUserPage() {
  return (
    <div className="all-users-container">
      <h1>All Users</h1>
      <div className="users-list">
        {users.map(
          (user) =>
            // Check if the username is not "admin" before rendering user info
            user.username !== "admin" && (
              <div key={user.id} className="user-card">
                <div className="user-info">
                  <div className="user-avatar">
                    <img src={user.avatar} alt="User Avatar" />
                  </div>
                  <div>
                    <strong>Username:</strong> {user.username}
                  </div>
                  <div>
                    <strong>Password:</strong> {user.password}
                  </div>
                  <div>
                    <strong>Type:</strong> {user.type}
                  </div>
                  <div>
                    <strong>Country:</strong> {user.country}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default AllUserPage;
