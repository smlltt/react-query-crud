import React from "react";
import { useQuery } from "react-query";
import { getAllBooks } from "api";
import { Container, Loader } from "shared";
import { BookListType } from "./types";
import { Flex } from "rebass";

const BookList = () => {
  const { data, error, isLoading, isError } = useQuery<BookListType, Error>(
    "books",
    getAllBooks
  );

  if (isLoading) return <Loader />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <Flex flexDirection={"column"} alignItems={"center"} width={"100%"}>
        {data?.map(({ author, title, id }) => (
          <div key={id}>
            {author} - {title}
          </div>
        ))}
      </Flex>
    </Container>
  );
};

export default BookList;
