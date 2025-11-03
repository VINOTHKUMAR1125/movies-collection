 import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <Grid container spacing={2} className="movie-list">
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
          <Card className="movie-card">
            <CardMedia
              component="img"
              height="350"
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="h6">{movie.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {movie.release_date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
