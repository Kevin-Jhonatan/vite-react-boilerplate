import type { User } from "../types/user";

const baseUsers: Omit<User, "department" | "location" | "lastAccess">[] = [
  {
    id: "usr-001",
    name: "Ana María Fernández de la Cruz",
    email: "ana@example.com",
    role: "Administrador",
    status: "Activo",
  },
  { id: "usr-002", name: "Bruno García", email: "bruno@example.com", role: "Editor", status: "Activo" },
  { id: "usr-003", name: "Carla Méndez", email: "carla@example.com", role: "Consulta", status: "Pendiente" },
  { id: "usr-004", name: "Diego Rojas", email: "diego@example.com", role: "Editor", status: "Activo" },
  { id: "usr-005", name: "Elena Torres", email: "elena@example.com", role: "Consulta", status: "Activo" },
  { id: "usr-006", name: "Felipe Castro", email: "felipe@example.com", role: "Administrador", status: "Activo" },
  { id: "usr-007", name: "Gabriela Silva", email: "gabriela@example.com", role: "Editor", status: "Pendiente" },
  { id: "usr-008", name: "Hugo Vargas", email: "hugo@example.com", role: "Consulta", status: "Activo" },
  { id: "usr-009", name: "Irene Paredes", email: "irene@example.com", role: "Editor", status: "Activo" },
  { id: "usr-010", name: "Jorge Molina", email: "jorge@example.com", role: "Consulta", status: "Pendiente" },
  { id: "usr-011", name: "Karen Flores", email: "karen@example.com", role: "Administrador", status: "Activo" },
  { id: "usr-012", name: "Luis Herrera", email: "luis@example.com", role: "Editor", status: "Activo" },
  { id: "usr-013", name: "Mariana Soto", email: "mariana@example.com", role: "Consulta", status: "Pendiente" },
  { id: "usr-014", name: "Nicolás Ponce", email: "nicolas@example.com", role: "Editor", status: "Activo" },
  {
    id: "usr-015",
    name: "Patricia Rodríguez de los Santos",
    email: "patricia.rodriguez@example.com",
    role: "Administrador",
    status: "Activo",
  },
  { id: "usr-016", name: "Rafael Núñez", email: "rafael@example.com", role: "Consulta", status: "Activo" },
  { id: "usr-017", name: "Sofía Ramírez", email: "sofia@example.com", role: "Editor", status: "Pendiente" },
  { id: "usr-018", name: "Tomás Cabrera", email: "tomas@example.com", role: "Consulta", status: "Activo" },
  { id: "usr-019", name: "Úrsula Medina", email: "ursula@example.com", role: "Administrador", status: "Activo" },
  { id: "usr-020", name: "Valentina Cruz", email: "valentina@example.com", role: "Editor", status: "Pendiente" },
  { id: "usr-021", name: "Walter Mendoza", email: "walter@example.com", role: "Consulta", status: "Activo" },
  { id: "usr-022", name: "Ximena Aguilar", email: "ximena@example.com", role: "Editor", status: "Activo" },
  { id: "usr-023", name: "Yasmin Herrera", email: "yasmin@example.com", role: "Consulta", status: "Pendiente" },
  { id: "usr-024", name: "Zoe Martínez", email: "zoe@example.com", role: "Administrador", status: "Activo" },
];

const departments = ["Ventas", "Operaciones", "Finanzas", "Marketing"];
const locations = ["Santo Domingo", "Santiago", "Puerto Plata", "La Romana"];

export const users: User[] = baseUsers.map((user, index) => ({
  ...user,
  department: departments[index % departments.length],
  location: locations[index % locations.length],
  lastAccess: `2026-11-${String(27 - (index % 9)).padStart(2, "0")} ${String(8 + (index % 10)).padStart(2, "0")}:30`,
}));
