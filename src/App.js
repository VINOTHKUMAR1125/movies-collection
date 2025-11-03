 import React, { useEffect, useState } from "react";
import { getCollectionDetails } from "./services/api";
import MovieList from "./components/MovieList";
import {
  Container,
  Typography,
  CircularProgress,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [collectionTitle, setCollectionTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [collectionId, setCollectionId] = useState(10); // Default: Star Wars

  const collections = [
    { id: 10, name: "Star Wars" },
    { id: 1241, name: "Harry Potter" },
    { id: 86311, name: "The Avengers" },
    { id: 119, name: "The Lord of the Rings" },
    { id: 9485, name: "Fast & Furious" },
    { id: 328, name: "Jurassic Park" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getCollectionDetails(collectionId);
        setCollectionTitle(data.name);
        setMovies(data.parts);
      } catch (err) {
        setError("Failed to fetch movie collection.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionId]);

  return (
    <Container>
      <Typography variant="h4" className="header">
        {collectionTitle || "Movie Collection"}
      </Typography>

      <FormControl fullWidth style={{ marginBottom: "20px" }}>
        <InputLabel>Select Collection</InputLabel>
        <Select
          value={collectionId}
          label="Select Collection"
          onChange={(e) => setCollectionId(e.target.value)}
        >
          {collections.map((col) => (
            <MenuItem key={col.id} value={col.id}>
              {col.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && <MovieList movies={movies} />}
    </Container>
  );
}

export default App;
