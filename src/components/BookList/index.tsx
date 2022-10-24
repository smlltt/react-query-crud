import React from "react";
import { useQuery } from "react-query";
import { getAllBooks } from "api";
import { Container, Loader } from "shared";
import { BookListType } from "./types";
import { Flex } from "rebass";
import BookItem from "../BookItem";

const BookList = () => {
  const { data, error, isLoading, isError } = useQuery<BookListType, Error>(
    "books",
    getAllBooks
  );

  if (isLoading) return <Loader />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        width={"100%"}
        pt={4}
        justifyContent={"center"}
      >
        {data?.map(({ author, title, id }) => (
          <BookItem author={author} title={title} id={id} key={id} />
        ))}
      </Flex>
    </Container>
  );
};

export default BookList;
