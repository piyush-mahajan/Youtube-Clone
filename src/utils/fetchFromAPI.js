// import axios from "axios";

// export const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

// const options = {
//   url: BASE_URL,
//   params: {
//     maxResults: "50",
//   },
//   headers: {
//     // "X-RapidAPI-Key": "3e12f56198mshf04dc81dbc2142dp1ce2c3jsn07cc45956320",
//     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };
// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };
import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
