import axios, { AxiosResponse } from "axios";
import { BookFormInputs } from "shared/BookForm";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});

const handleToast = (response: AxiosResponse, customContent: string) => {
  if (response.status !== 200 && response.status !== 201) {
    toast.error(customContent || "Something went wrong");
    throw new Error("Something went wrong");
  }
  toast.success(customContent || "Success");
};

export const getBooks = async () => {
  const response = await api.get("/books");
  if (response.status !== 200) {
    throw new Error("Something went wrong");
  }
  return response.data;
};

export const getBook = async (id: string) => {
  const response = await api.get(`/books/${id}`);
  if (response.status !== 200) {
    throw new Error("Something went wrong");
  }
  return response.data;
};

export const removeBook = async (id: string, title: string) => {
  const response = await api.delete(`/books/${id}`);
  handleToast(response, `${title} removed from your book list`);
  return true;
};

export const addBook = async (book: BookFormInputs) => {
  const response = await api.post("/books", book);
  handleToast(response, `${book.title} added to your book list`);
  return true;
};
