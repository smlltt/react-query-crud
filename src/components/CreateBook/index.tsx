import React from "react";
import { BookForm, Container } from "shared";
import { Flex } from "rebass";
import { Box } from "rebass/styled-components";
import { useMutation } from "react-query";
import { addBook } from "api";
import { BookFormInputs } from "shared/BookForm";
import { useNavigate } from "react-router-dom";
import routes from "config/routes";

const CreateBook = () => {
  const navigate = useNavigate();
  const { mutateAsync: add, isLoading } = useMutation(addBook);
  const handleAddBook = async (book: BookFormInputs) => {
    await add(book);
    navigate(routes.home);
  };

  return (
    <Container>
      <Flex width={"90%"} flexDirection={"column"} pt={50}>
        <Box variant={"title"}>Create book</Box>
        <BookForm
          onFormSubmit={(data) => handleAddBook(data)}
          isLoading={isLoading}
        />
      </Flex>
    </Container>
  );
};

export default CreateBook;
