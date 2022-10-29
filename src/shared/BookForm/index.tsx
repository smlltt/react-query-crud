import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label } from "@rebass/forms/styled-components";
import { Box, Flex } from "rebass/styled-components";
import React, { FC } from "react";
import { ButtonWithLoaderContent, FormError } from "shared/atoms";

export type BookFormInputs = {
  title: string;
  author: string;
  id?: string;
};

interface BookFormInterface {
  defaultValues?: BookFormInputs;
  onFormSubmit: (data: BookFormInputs) => void;
  isLoading: boolean;
}

const BookForm: FC<BookFormInterface> = ({
  defaultValues,
  onFormSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormInputs>({ defaultValues });
  const onSubmit: SubmitHandler<BookFormInputs> = (data) => onFormSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection={"column"} justifyContent={"space-between"} mt={4}>
        <Box>
          <Label htmlFor="title">Title</Label>
          <Input {...register("title", { required: true })} />
          {errors.title && <FormError />}
        </Box>
        <Box mt={"15px"}>
          <Label htmlFor="author">Author</Label>
          <Input {...register("author", { required: true })} />
          {errors.author && <FormError />}
        </Box>
        <Flex
          onClick={handleSubmit(onSubmit)}
          variant={"primaryButton"}
          justifyContent={"center"}
          mt={"15px"}
        >
          <ButtonWithLoaderContent isLoading={isLoading} text={"Submit"} />
        </Flex>
      </Flex>
    </form>
  );
};

export default BookForm;
