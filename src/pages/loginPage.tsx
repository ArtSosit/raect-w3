import { Button, TextField, Box } from "@mui/material";
import { useEffect, useRef } from "react";
import users from "../data/Users";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

function LoginPage() {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      navigate("/index");
    }
  });

  const changeLocalStorage = async () => {
    const username = nameRef.current!.value;
    const password = passRef.current!.value;
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      localStorage.setItem("username", user.username);
      try {
        const hashedPassword = await hashPassword(user.password);
        localStorage.setItem("password", hashedPassword);
      } catch (error) {
        console.error("Error hashing password:", error);
        // Handle error appropriately
        return;
      }
      localStorage.setItem("type", user.type);
      navigate("/index");
    } else {
      alert("Invalid username or password!");
    }
  };

  const hashPassword = async (password: string): Promise<string> => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      return hashedPassword;
    } catch (error) {
      console.error("Error hashing password:", error);
      throw error;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        alignContent: "center",
      }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: "10px",
          boxShadow: "4px 5px 4px rgba(0, 0, 0, 0.1)",
          // bgcolor: "red",
        }}
      >
        <h1>Login</h1>

        <TextField
          inputRef={nameRef}
          label="Username"
          variant="filled"
          size="medium"
        />
        <br />
        <br />
        <TextField
          inputRef={passRef}
          label="Password"
          variant="outlined"
          size="medium"
          type="password"
        />
        <br />
        <br />
        <Button variant="contained" onClick={changeLocalStorage}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default LoginPage;
