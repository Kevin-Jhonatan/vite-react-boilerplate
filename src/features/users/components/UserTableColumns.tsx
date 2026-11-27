import { Edit, Power, Trash2 } from "lucide-react";
import type { TableColumn } from "../../../components/Table/Table";
import type { User } from "../types/user";

interface UserColumnActions {
  onEdit: (user: User) => void;
  onToggleStatus: (user: User) => void;
  onDelete: (user: User) => void;
}

export const createUserColumns = ({
  onEdit,
  onToggleStatus,
  onDelete,
}: UserColumnActions): TableColumn<User>[] => [
  { accessorKey: "name", header: "Nombre" },
  { accessorKey: "email", header: "Correo" },
  { accessorKey: "role", header: "Rol" },
  { accessorKey: "department", header: "Departamento" },
  { accessorKey: "location", header: "Ubicación" },
  { accessorKey: "lastAccess", header: "Último acceso" },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => (
      <span className={row.original.status === "Activo" ? "text-emerald-600" : "text-amber-600"}>
        {row.original.status}
      </span>
    ),
  },
  {
    id: "actions",
    header: "Acciones",
    enableSorting: false,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label={`Editar ${user.name}`}
            className="cursor-pointer rounded-lg p-3 text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={() => onEdit(user)}
          >
            <Edit aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label={`${user.status === "Activo" ? "Desactivar" : "Activar"} ${user.name}`}
            className="cursor-pointer rounded-lg p-3 text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={() => onToggleStatus(user)}
          >
            <Power aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label={`Eliminar ${user.name}`}
            className="cursor-pointer rounded-lg p-3 text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={() => onDelete(user)}
          >
            <Trash2 aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      );
    },
  },
];

export default createUserColumns;
