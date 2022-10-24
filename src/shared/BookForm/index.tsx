import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@rebass/forms";
import { Flex } from "rebass/styled-components";

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
      <Flex
        flexDirection={"column"}
        height={"160px"}
        justifyContent={"space-between"}
        mt={4}
      >
        <Input defaultValue="test" {...register("title", { required: true })} />
        {/*TODO create variant for form errors */}
        {errors.title && <span>This field is required</span>}
        <Input {...register("author", { required: true })} />
        {errors.author && <span>This field is required</span>}
        <Flex
          onClick={handleSubmit(onSubmit)}
          variant={"primaryButton"}
          justifyContent={"center"}
        >
          Submit
        </Flex>
      </Flex>
    </form>
  );
};

export default BookForm;
