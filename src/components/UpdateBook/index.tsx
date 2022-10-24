import React from "react";
import { useQuery } from "react-query";
import { BookListType } from "components/BookList/types";
import { getBook } from "api";
import { useParams } from "react-router-dom";

const UpdateBook = () => {
  //TODO to finish
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery<BookListType, Error>(
    "book",
    () => getBook(id || "")
  );
  console.log({ data, error, isLoading, isError });
  return <div>UpdateBook</div>;
};

export default UpdateBook;
