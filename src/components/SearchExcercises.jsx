import React from "react";
import { useEffect, useState } from "react";
import { Stack, Button, Box, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchDetail.js";
import HorizontalScrollBar from "./HorizontalScrollBar.jsx";

const SearchExcercises = ({setExcercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  // const [excercises, setExcercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData()
  }, []);

  const handleSearch = async () => {
    if (search) {
      // search = search.toLowerCase()
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExcercises = exerciseData.filter(
        (excercise) =>
          excercise.name.toLowerCase().includes(search.toLowerCase()) ||
          excercise.target.toLowerCase().includes(search.toLowerCase()) ||
          excercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          excercise.bodyPart.toLowerCase().includes(search.toLowerCase())
      );
      setSearch("");
      setExcercises(searchedExcercises);
      window.scrollTo({top:1800, left:100, behavior:'smooth'})
    }
  };

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSearch()
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
          placeholder="Search Exercise"
          type="text"
        />
        <Button
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "relative",
            right: "0",
          }}
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
     <Box sx={{position:'relative', width:'100%', p:'20px'}}>
          <HorizontalScrollBar data={bodyParts}
            bodyPart = {bodyPart} setBodyPart = {setBodyPart} isBodyParts
          />
     </Box>
    </Stack>
  );
};

export default SearchExcercises;
