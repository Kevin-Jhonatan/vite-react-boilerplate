import { useMemo, useState } from "react";
import Table, { type TableColumn } from "../../../components/Table/Table";
import { users } from "../data/users";
import type { User } from "../types/user";

const userColumns: TableColumn<User>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "email",
    header: "Correo",
  },
  {
    accessorKey: "role",
    header: "Rol",
  },
  {
    accessorKey: "department",
    header: "Departamento",
  },
  {
    accessorKey: "location",
    header: "Ubicación",
  },
  {
    accessorKey: "lastAccess",
    header: "Último acceso",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => (
      <span className={row.original.status === "Activo" ? "text-emerald-600" : "text-amber-600"}>
        {row.original.status}
      </span>
    ),
  },
];

export const UsersPage = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const perPage = 5;
  const paginatedUsers = useMemo(
    () => users.slice((page - 1) * perPage, page * perPage),
    [page],
  );
  const recordCount = isLoading ? 0 : users.length;
  const recordLabel = recordCount === 1 ? "registro" : "registros";

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
  };

  return (
    <section className="flex flex-col gap-4">
      <header>
        <h2 className="text-3xl font-bold tracking-tight">
          Usuarios
          <span className="ml-2 inline-flex items-center rounded-full bg-muted px-2.5 py-1 align-middle text-sm font-medium text-muted-foreground">
            {recordCount} {recordLabel}
          </span>
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Administra los usuarios y sus permisos.
        </p>
      </header>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
        <button
          type="button"
          aria-pressed={isLoading}
          className="w-full cursor-pointer rounded-lg border border-border px-4 py-2 text-sm hover:bg-muted sm:w-auto"
          onClick={() => setIsLoading((loading) => !loading)}
        >
          {isLoading ? "Mostrar usuarios" : "Ver estado de carga"}
        </button>
      </div>

      <Table
        columns={userColumns}
        data={paginatedUsers}
        loading={isLoading}
        pagination={{ page, perPage, total: users.length }}
        onPageChange={handlePageChange}
        emptyMessage="No hay usuarios registrados"
        striped
      />
    </section>
  );
};

export default UsersPage;
