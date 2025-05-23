import express from "express";

import {getMoviesByCategory, getSimilarMovie, getMovieDetailes, getMovieTrailers, getTrendingMovie } from "../controllers/movie.controller.js";


const router = express.Router();

router.get("/trending", getTrendingMovie);

router.get("/:id/trailers", getMovieTrailers);

router.get("/:id/detailes", getMovieDetailes);

router.get("/:id/similar", getSimilarMovie);

router.get("/:category", getMoviesByCategory);



export default router;