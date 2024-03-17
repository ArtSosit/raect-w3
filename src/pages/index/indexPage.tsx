import React from "react";
import users from "../../data/Users";
import landmarks from "../../data/landmarks";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const user = users.find((user) => user.username === username);

  // Find the landmark corresponding to the user's country
  const userLandmark = landmarks.find(
    (landmark) => landmark.name === user?.country
  );
  function logOut() {
    if (confirm("Do you want to log out?")) {
      localStorage.clear();
      navigate("/");
    }
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hi {user?.username}
            </Typography>
            {user?.type === "admin" && (
              <>
                <Button
                  color="inherit"
                  onClick={() => {
                    navigate("/allUser");
                  }}
                >
                  All Users
                </Button>
                <Button
                  color="inherit"
                  onClick={() => {
                    navigate("/allLandmark");
                  }}
                >
                  All Landmark
                </Button>
              </>
            )}
            <Button color="inherit" onClick={logOut}>
              LogOut
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <main className="content">
        {user && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <h2>Welcome, {user.username}</h2>
            <img src={user.avatar} alt="User Avatar" />
            <p>Type: {user.type}</p>
            <p>Country: {user.country}</p>
            {userLandmark && (
              <div>
                <h2>Landmark: {userLandmark.landmark}</h2>
                {/* You can display additional information about the landmark here */}
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}

export default IndexPage;
