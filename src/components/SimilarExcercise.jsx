import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExcercise = ({ targetMuscle, equipmentExcercise }) => {
  console.log(targetMuscle, equipmentExcercise)
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Excercises That Target The Same Muscle
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscle.length ? (
          <HorizontalScrollbar data={targetMuscle} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Excercises That Use The Same Equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExcercise.length ? (
          <HorizontalScrollbar data={equipmentExcercise} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
    
  );
};

export default SimilarExcercise;
