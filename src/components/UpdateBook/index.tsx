import React from "react";
import { useMutation, useQuery } from "react-query";
import { BookType } from "components/BookList/types";
import { getBook, updateBook } from "api";
import { useNavigate, useParams } from "react-router-dom";
import { BookForm, Container, Loader } from "shared";
import { Flex } from "rebass";
import { Box } from "rebass/styled-components";
import { BookFormInputs } from "shared/BookForm";
import routes from "config/routes";

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: defaultValues,
    error,
    isLoading,
    isError,
  } = useQuery<BookType, Error>(["book", id], () => getBook(id || ""));

  const { mutateAsync: update, isLoading: isMutating } =
    useMutation(updateBook);
  const handleUpdateBook = async (book: BookFormInputs) => {
    await update({ ...book, id: id || "" });
    navigate(routes.home);
  };

  if (isLoading) return <Loader />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <Flex width={"90%"} flexDirection={"column"} pt={50}>
        <Box variant={"title"}>Update book</Box>
        <BookForm
          onFormSubmit={(data) => handleUpdateBook(data)}
          isLoading={isMutating}
          defaultValues={defaultValues}
        />
      </Flex>
    </Container>
  );
};

export default UpdateBook;
