import React, { FC } from "react";
import { Flex } from "rebass";
import { Box } from "rebass/styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface BookItemProps {
  author: string;
  title: string;
  id: string;
}

const BookItem: FC<BookItemProps> = ({ author, title, id }) => {
  return (
    <Flex width={"100%"} py={2} alignItems={"center"}>
      <StyledLink to={`/update-book/${id}`}>{title}</StyledLink>
      <Box ml={"auto"}>{author}</Box>
      <Box variant={"primaryButton"} ml={4}>
        Remove
      </Box>
    </Flex>
  );
};

export default BookItem;

const StyledLink = styled(Link)`
  color: ${(props) => `${props.theme.text.color.dark}`};
  text-decoration: none;
`;
