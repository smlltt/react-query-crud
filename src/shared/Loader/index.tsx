import React from "react";
import { Flex } from "rebass";
import { ThreeDots } from "react-loader-spinner";
import theme from "config/theme";

const Loader = () => {
  return (
    <Flex py={5} justifyContent={"center"}>
      <ThreeDots height="15" color={theme.colors.secondary} />
    </Flex>
  );
};

export default Loader;
