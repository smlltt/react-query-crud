import React, { ReactNode } from "react";
import { Flex } from "rebass";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <Flex maxWidth={1024} width={["90%", "90%", "80%", "90%"]} mx={"auto"}>
      {children}
    </Flex>
  );
};

export default Container;
