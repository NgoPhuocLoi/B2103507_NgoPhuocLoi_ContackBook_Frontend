import axios from "axios";

export default (baseURL) =>
  axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
