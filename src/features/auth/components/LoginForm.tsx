import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { type SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
import Form from "../../../components/Form/Form";
import Input from "../../../components/Input/Input";
import { loginSchema, type LoginFormValues } from "../schemas/login.schema";

export const LoginForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = () => {
    navigate("/");
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        control={control}
        label="Correo electrónico"
        type="email"
        placeholder="correo@ejemplo.com"
        autoComplete="email"
        error={errors.email}
      />
      <Input
        name="password"
        control={control}
        label="Contraseña"
        type="password"
        placeholder="••••••••"
        autoComplete="current-password"
        error={errors.password}
      />
      <Button type="submit" className="mt-2 w-full" disabled={isSubmitting}>
        {isSubmitting ? "Ingresando..." : "Entrar"}
      </Button>
    </Form>
  );
};

export default LoginForm;
