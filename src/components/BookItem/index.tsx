import React, { FC } from "react";
import { Flex } from "rebass";
import { Box } from "rebass/styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { removeBook } from "api";
import { useMutation, useQueryClient } from "react-query";
import { ButtonWithLoaderContent } from "shared/atoms";

export interface BookItemProps {
  author: string;
  title: string;
  id: string;
}

const BookItem: FC<BookItemProps> = ({ author, title, id }) => {
  const queryClient = useQueryClient();
  const { mutateAsync: remove, isLoading } = useMutation(() =>
    removeBook(id, title)
  );
  const handleRemoveClick = async () => {
    await remove();
    queryClient.invalidateQueries("books");
  };
  return (
    <Flex width={1} py={2} alignItems={"center"} flexWrap={"wrap"} mb={4}>
      <Flex
        width={[1, 1, "60%"]}
        justifyContent={["center", "center", "flex-start"]}
        mb={[3, 3, 0]}
      >
        <StyledLink to={`/update-book/${id}`}>{title}</StyledLink>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        width={[1, 1, "40%"]}
        flexDirection={["column", "column", "row"]}
      >
        <Flex
          style={{ textOverflow: "ellipsis", overflow: "hidden" }}
          width={[1, 1, "200px"]}
          justifyContent={["center", "center", "start"]}
          mb={[3, 3, 0]}
        >
          {author}
        </Flex>

        <Box
          variant={"primaryButton"}
          onClick={isLoading ? undefined : handleRemoveClick}
          opacity={isLoading ? 0.5 : 1}
        >
          <ButtonWithLoaderContent isLoading={isLoading} text={"Remove"} />
        </Box>
      </Flex>
      <Box
        mt={4}
        display={["block", "block", "none"]}
        variant={"divider"}
        width={1}
      />
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
