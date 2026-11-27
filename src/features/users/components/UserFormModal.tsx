import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from "lucide-react";
import {
  Controller,
  useForm,
  type Control,
  type Path,
  type SubmitHandler,
} from "react-hook-form";
import { useEffect } from "react";
import Button from "../../../components/Button/Button";
import Form from "../../../components/Form/Form";
import Input from "../../../components/Input/Input";
import Modal from "../../../components/Modal/Modal";
import type { User } from "../types/user";
import { userSchema, type UserFormValues } from "../schemas/user.schema";

interface UserFormModalProps {
  open: boolean;
  user: User | null;
  onClose: () => void;
  onSubmit: (values: UserFormValues) => void;
}

const departmentOptions = ["Ventas", "Operaciones", "Finanzas", "Marketing"];
const locationOptions = ["Santo Domingo", "Santiago", "Puerto Plata", "La Romana"];
const roleOptions = ["Administrador", "Editor", "Consulta"] as const;

const defaultValues: UserFormValues = {
  name: "",
  email: "",
  role: "Consulta",
  department: "Ventas",
  location: "Santo Domingo",
};

interface UserSelectFieldProps {
  control: Control<UserFormValues>;
  label: string;
  name: Path<UserFormValues>;
  options: readonly string[];
}

const UserSelectField = ({ control, label, name, options }: UserSelectFieldProps) => {
  const inputId = `user-${name}`;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-2">
          <label htmlFor={inputId} className="text-sm font-medium text-foreground">
            {label}
          </label>
          <div className="relative">
            <select
              id={inputId}
              {...field}
              className="w-full appearance-none rounded-lg border border-border bg-background px-4 py-2.5 pr-10 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />
          </div>
          {fieldState.error && (
            <p className="text-sm text-danger">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export const UserFormModal = ({ open, user, onClose, onSubmit }: UserFormModalProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues,
  });

  useEffect(() => {
    if (open) {
      reset(
        user
          ? {
              name: user.name,
              email: user.email,
              role: user.role,
              department: user.department,
              location: user.location,
            }
          : defaultValues,
      );
    }
  }, [open, reset, user]);

  const submit: SubmitHandler<UserFormValues> = (formValues) => {
    onSubmit(formValues);
    reset(defaultValues);
  };

  return (
    <Modal
      open={open}
      title={user ? "Editar usuario" : "Registrar usuario"}
      description={user ? "Actualiza la información del usuario." : "Completa los datos del nuevo usuario."}
      onClose={onClose}
    >
      <Form noValidate onSubmit={handleSubmit(submit)}>
        <Input
          name="name"
          control={control}
          label="Nombre completo"
          placeholder="Ej. Ana María Fernández"
          autoComplete="name"
          error={errors.name}
        />
        <Input
          name="email"
          control={control}
          label="Correo electrónico"
          type="email"
          placeholder="correo@ejemplo.com"
          autoComplete="email"
          error={errors.email}
        />
        <UserSelectField
          control={control}
          label="Rol"
          name="role"
          options={roleOptions}
        />
        <UserSelectField
          control={control}
          label="Departamento"
          name="department"
          options={departmentOptions}
        />
        <UserSelectField
          control={control}
          label="Ubicación"
          name="location"
          options={locationOptions}
        />
        <div className="flex flex-col-reverse gap-4 pt-2 sm:flex-row sm:justify-end">
          <Button type="button" className="bg-muted text-foreground hover:bg-muted/80" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {user ? "Guardar cambios" : "Registrar usuario"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default UserFormModal;
