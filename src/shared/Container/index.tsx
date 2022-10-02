import React, { ReactNode } from "react";
import { Flex } from "rebass";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <Flex maxWidth={1024} width={"100%"}>
      {children}
    </Flex>
  );
};

export default Container;
