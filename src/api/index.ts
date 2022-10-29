import axios, { AxiosResponse } from "axios";
import { BookFormInputs } from "shared/BookForm";
import { toast } from "react-toastify";
import { BookType } from "components/BookList/types";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});

const handleMutationResponse = (
  response: AxiosResponse,
  customContent: string
) => {
  if (response.status !== 200 && response.status !== 201) {
    toast.error(customContent || "Something went wrong");
    throw new Error("Something went wrong");
  }
  toast.success(customContent || "Success");
  return true;
};

const handleGetResponse = (response: AxiosResponse) => {
  if (response.status !== 200) {
    throw new Error("Something went wrong");
  }
  return response.data;
};

export const getBooks = async () => {
  const response = await api.get("/books");
  return handleGetResponse(response);
};

export const getBook = async (id: string) => {
  const response = await api.get(`/books/${id}`);
  return handleGetResponse(response);
};

export const removeBook = async (id: string, title: string) => {
  const response = await api.delete(`/books/${id}`);
  return handleMutationResponse(
    response,
    `${title} removed from your book list`
  );
};

export const addBook = async (book: BookFormInputs) => {
  const response = await api.post("/books", book);
  return handleMutationResponse(
    response,
    `${book.title} added to your book list`
  );
};

export const updateBook = async (book: BookType) => {
  const response = await api.put(`/books/${book.id}`, book);
  return handleMutationResponse(response, "The book was updated");
};
