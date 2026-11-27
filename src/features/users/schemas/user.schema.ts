import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Ingresa un correo válido"),
  role: z.enum(["Administrador", "Editor", "Consulta"]),
  department: z.string().min(1, "Selecciona un departamento"),
  location: z.string().min(1, "Selecciona una ubicación"),
});

export type UserFormValues = z.infer<typeof userSchema>;
