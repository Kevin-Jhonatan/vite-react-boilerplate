import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input/Input.tsx";
import {type FormValues, schema} from "../../schemas/form.ts";

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="name" control={control} label="Name" type="text" error={errors.name}/>
      <Input name="email" control={control} label="Email" type="email" error={errors.email}/>
      <Input name="password" control={control} label="Password" type="password" error={errors.password}/>
      <Input name="confirmPassword" control={control} label="Confirm Password" type="password" error={errors.confirmPassword}/>
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default Form;
