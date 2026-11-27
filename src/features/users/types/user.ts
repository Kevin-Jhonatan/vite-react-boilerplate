export interface User {
  id: string;
  name: string;
  email: string;
  role: "Administrador" | "Editor" | "Consulta";
  status: "Activo" | "Pendiente";
  department: string;
  location: string;
  lastAccess: string;
}
