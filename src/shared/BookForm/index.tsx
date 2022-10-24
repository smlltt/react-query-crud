import { useForm, SubmitHandler } from "react-hook-form";
import { Flex } from "rebass";

type Inputs = {
  title: string;
  author: string;
};

const BookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection={"column"}>
        <input defaultValue="test" {...register("title", { required: true })} />
        {errors.title && <span>This field is required</span>}
        <input {...register("author", { required: true })} />
        {errors.author && <span>This field is required</span>}

        <input type="submit" />
      </Flex>
    </form>
  );
};

export default BookForm;
