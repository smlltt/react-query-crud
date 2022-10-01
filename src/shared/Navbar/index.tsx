import React from "react";
import { Flex } from "rebass";
import { Link } from "react-router-dom";
import theme from "config/theme";
import routes from "config/routes";
import styled from "styled-components";
import Container from "../Container";

const Navbar = () => {
  const { home, createBook } = routes;
  return (
    <Flex
      bg={theme.colors.primary}
      color={theme.text.color.light}
      justifyContent={"center"}
      py={2}
    >
      <Container>
        <Flex justifyContent={"space-between"} width={"100%"} px={2}>
          <StyledLink to={home}>React Query CRUD</StyledLink>
          <StyledLink to={createBook}>+ Add new book</StyledLink>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;

const StyledLink = styled(Link)`
  color: ${(props) => `${props.theme.text.color.light}`};
  text-decoration: none;
`;
