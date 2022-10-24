import React from "react";
import { BookForm, Container } from "shared";
import { Flex } from "rebass";
import { Box } from "rebass/styled-components";

const CreateBook = () => {
  return (
    <Container>
      <Flex width={"90%"} flexDirection={"column"} pt={50}>
        <Box variant={"title"}>Create book</Box>
        <BookForm />
      </Flex>
    </Container>
  );
};

export default CreateBook;
