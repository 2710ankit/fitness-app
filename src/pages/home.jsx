import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExcercises from "../components/SearchExcercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [excercises, setExcercises] = useState([]);
  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      <SearchExcercises
        setExcercises={setExcercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExcercises={setExcercises}
        bodyPart={bodyPart}
        excercises={excercises}
      />
    </Box>
  );
};

export default Home;
