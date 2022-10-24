import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label } from "@rebass/forms/styled-components";
import { Box, Flex } from "rebass/styled-components";
import { BookType } from "components/BookList/types";
import React, { FC } from "react";
import { FormError } from "shared/atoms";
import { ThreeDots } from "react-loader-spinner";
import theme from "../../config/theme";

type Inputs = {
  title: string;
  author: string;
};

interface BookFormInterface {
  initialValues?: BookType;
  onFormSubmit: (data: Inputs) => void;
  isLoading: boolean;
}

const BookForm: FC<BookFormInterface> = ({
  initialValues,
  onFormSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => onFormSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        flexDirection={"column"}
        height={"180px"}
        justifyContent={"space-between"}
        mt={4}
      >
        <Box>
          <Label htmlFor="title">Title</Label>
          <Input
            {...register("title", { required: true })}
            defaultValue={initialValues?.title}
          />
          {errors.title && <FormError />}
        </Box>
        <Box>
          <Label htmlFor="author">Author</Label>
          <Input
            {...register("author", { required: true })}
            defaultValue={initialValues?.author}
          />
          {errors.author && <FormError />}
        </Box>
        <Flex
          onClick={handleSubmit(onSubmit)}
          variant={"primaryButton"}
          justifyContent={"center"}
        >
          {isLoading ? (
            <ThreeDots height="15" color={theme.colors.secondary} />
          ) : (
            <>Submit</>
          )}
        </Flex>
      </Flex>
    </form>
  );
};

export default BookForm;
