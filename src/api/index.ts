import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});

export const getAllBooks = async () => {
  const response = await api.get("/books");
  if (response.status !== 200) {
    throw new Error("Something went wrong");
  }
  return response.data;
};
