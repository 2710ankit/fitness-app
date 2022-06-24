import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home";
import ExerciseDetails from "./pages/ExcersiseDetails";

const App = () => {
  return (
    <Box width="400px" m="auto" sx={{ width: { xl: "1488px" } }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
    </Box>
  );
};

export default App;
