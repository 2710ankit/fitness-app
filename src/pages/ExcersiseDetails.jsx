import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  fetchData,
  exerciseOptions,
  youtubeOptions,
} from "../utils/fetchDetail.js";
import Detail from "../components/Detail.jsx";
import ExcerciseVideo from "../components/ExcerciseVideo.jsx";
import SimilarExcercise from "../components/SimilarExcercise.jsx";

const ExerciseDetails = () => {
  const [excerciseDetail, setExcerciseDetail] = useState({});
  const [excerciseVideoDetail, setExcerciseVideoDetail] = useState({});
  const { id } = useParams();
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentExcercise, setEquipmentExcercise] = useState([]);
  console.log(excerciseDetail)

  // useEffect(() => {
  //   const fetchExcericseData = async () => {
  //     const excerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises";
  //     const youtubeSearchUrl =
  //       "https://youtube-search-and-download.p.rapidapi.com";

  //     const excerciseDetailData = await fetchData(
  //       `${excerciseDbUrl}/exercise/${id}`,
  //       exerciseOptions
  //     );
  //     setExcerciseDetail(excerciseDetailData);

  //     const exerciseVideoData = await fetchData(
  //       `${youtubeSearchUrl}/search?query=/${excerciseDetail.name}`,
  //       youtubeOptions
  //     );
  //     setExcerciseVideoDetail(exerciseVideoData.contents);

  //     // const targetMuscleData = await fetchData(
  //     //   `${excerciseDbUrl}/target/${excerciseDetailData.target}`,
  //     //   exerciseOptions
  //     // );
  //     // setTargetMuscle(targetMuscleData);

  //     // const equipmentExcerciseData = await fetchData(
  //     //   `${excerciseDbUrl}/equipment/${excerciseDetailData.equipment}`,
  //     //   exerciseOptions
  //     // );
  //     // setEquipmentExcercise(equipmentExcerciseData);
  //   };
  //   fetchExcericseData();
  // }, [id]);




  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const excerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExcerciseDetail(excerciseDetailData);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${excerciseDetailData.name} exercise`, youtubeOptions);
      setExcerciseVideoDetail(exerciseVideoData.contents);

      const targetMuscleData = await fetchData(`${exerciseDbUrl}/exercises/target/${excerciseDetailData.target}`, exerciseOptions);
      setTargetMuscle(targetMuscleData);

      const equipmentExcerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${excerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExcercise(equipmentExcerciseData);
    };

    fetchExercisesData();
  }, [id]);

  if (!excerciseDetail) return <div>No Data</div>;

  return (
    <Box>
      <Detail excerciseDetail={excerciseDetail} />
      <ExcerciseVideo
        excerciseVideoDetail={excerciseVideoDetail}
        name={excerciseDetail.name}
      />
      <SimilarExcercise  targetMuscle={targetMuscle} equipmentExcercise={equipmentExcercise}/>
    </Box>
  );
};

export default ExerciseDetails;
