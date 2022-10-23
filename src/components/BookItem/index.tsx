import React, { FC } from "react";
import { Flex } from "rebass";
import { Box } from "rebass/styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { removeBook } from "api";
import { useMutation, useQueryClient } from "react-query";

interface BookItemProps {
  author: string;
  title: string;
  id: string;
}

const BookItem: FC<BookItemProps> = ({ author, title, id }) => {
  const queryClient = useQueryClient();
  const { mutateAsync: remove, isLoading } = useMutation(removeBook);
  const handleRemoveClick = async () => {
    await remove(id);
    queryClient.invalidateQueries("books");
  };
  return (
    <Flex
      width={1}
      py={2}
      alignItems={"center"}
      flexWrap={"wrap"}
      mb={4}
      // TODO add line at the bottom for small screens
    >
      <Flex
        width={[1, 1, 1 / 2]}
        justifyContent={["center", "center", "flex-start"]}
        mb={[3, 3, 0]}
      >
        <StyledLink to={`/update-book/${id}`}>{title}</StyledLink>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        ml={"auto"}
        width={[1, 1, 1 / 2]}
      >
        <Flex
          style={{ textOverflow: "ellipsis", overflow: "hidden" }}
          width={"200px"}
        >
          {author}
        </Flex>

        <Box
          variant={"primaryButton"}
          onClick={isLoading ? undefined : handleRemoveClick}
          opacity={isLoading ? 0.5 : 1}
        >
          Remove
        </Box>
      </Flex>
    </Flex>
  );
};

export default BookItem;

const StyledLink = styled(Link)`
  color: ${(props) => `${props.theme.text.color.dark}`};
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
`;