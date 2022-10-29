import React from "react";
import { useMutation, useQuery } from "react-query";
import { BookType } from "components/BookList/types";
import { getBook, updateBook } from "api";
import { useParams } from "react-router-dom";
import { BookForm, Container, Loader } from "shared";
import { Flex } from "rebass";
import { Box } from "rebass/styled-components";

const UpdateBook = () => {
  const { id } = useParams();
  const {
    data: defaultValues,
    error,
    isLoading,
    isError,
  } = useQuery<BookType, Error>(["book", id], () => getBook(id || ""));

  const { mutateAsync: update, isLoading: isMutating } =
    useMutation(updateBook);
  const handleUpdateBook = async (book: BookType) => {
    await update(book);
  };

  if (isLoading) return <Loader />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <Flex width={"90%"} flexDirection={"column"} pt={50}>
        <Box variant={"title"}>Update book</Box>
        {/*data as BookType because when BookForm is used in the UpdateBook page, it will always have defaultValues which include an id.
        But the id needs to be options in BookFormInputs, because the id is missing when BookForm is used in the CreateBook page
        */}
        <BookForm
          onFormSubmit={(data) => handleUpdateBook(data as BookType)}
          isLoading={isMutating}
          defaultValues={defaultValues}
        />
      </Flex>
    </Container>
  );
};

export default UpdateBook;
