import React, { FC } from "react";
import { ThreeDots } from "react-loader-spinner";
import theme from "../../../config/theme";

interface ButtonWithLoaderContentProps {
  isLoading: boolean;
  text: string;
}

const ButtonWithLoaderContent: FC<ButtonWithLoaderContentProps> = ({
  isLoading,
  text,
}) =>
  isLoading ? (
    <ThreeDots height="15" color={theme.colors.secondary} />
  ) : (
    <>{text}</>
  );

export default ButtonWithLoaderContent;
