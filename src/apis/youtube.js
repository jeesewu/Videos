import axios from "axios";

const API_KEY = "AIzaSyAs5Ze8wcmr807LNWPKsD5gyEn077YfkYs";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: API_KEY },
});

export default youtube;
