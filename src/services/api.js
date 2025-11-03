 import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "d32cdf2bd2b3a6a6df32a7e071e21d06"; // Replace with your TMDb API key

export const getCollectionDetails = async (collectionId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/collection/${collectionId}`, {
      params: { api_key: API_KEY, language: "en-US" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching collection:", error);
    throw error;
  }
};
