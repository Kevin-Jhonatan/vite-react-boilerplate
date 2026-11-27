import { Plus } from "lucide-react";
import { useMemo } from "react";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";
import Table from "../../../components/Table/Table";
import UserFormModal from "../components/UserFormModal";
import { createUserColumns } from "../components/UserTableColumns";
import { useUsers } from "../hooks/useUsers";

export const UsersPage = () => {
  const {
    users,
    page,
    perPage,
    paginatedUsers,
    isLoading,
    setIsLoading,
    editingUser,
    isFormOpen,
    deleteTarget,
    setPage,
    openCreateModal,
    openEditModal,
    closeFormModal,
    saveUser,
    toggleUserStatus,
    requestDelete,
    closeDeleteModal,
    confirmDelete,
  } = useUsers();
  const recordCount = isLoading ? 0 : users.length;
  const recordLabel = recordCount === 1 ? "registro" : "registros";
  const columns = useMemo(
    () =>
      createUserColumns({
        onEdit: openEditModal,
        onToggleStatus: toggleUserStatus,
        onDelete: requestDelete,
      }),
    [openEditModal, requestDelete, toggleUserStatus],
  );

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

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="button" className="w-full sm:w-auto" onClick={openCreateModal}>
          <Plus aria-hidden="true" className="h-4 w-4" />
          Registrar usuario
        </Button>
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
        columns={columns}
        data={paginatedUsers}
        loading={isLoading}
        pagination={{ page, perPage, total: users.length }}
        onPageChange={setPage}
        emptyMessage="No hay usuarios registrados"
        striped
      />

      <UserFormModal
        open={isFormOpen}
        user={editingUser}
        onClose={closeFormModal}
        onSubmit={saveUser}
      />

      <Modal
        open={Boolean(deleteTarget)}
        title="Eliminar usuario"
        description="Esta acción no se puede deshacer."
        onClose={closeDeleteModal}
      >
        <div className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            ¿Seguro que deseas eliminar a <strong>{deleteTarget?.name}</strong>?
          </p>
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">
            <Button
              type="button"
              className="bg-muted text-foreground hover:bg-muted/80"
              onClick={closeDeleteModal}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              className="bg-danger text-danger-foreground hover:bg-danger/90"
              onClick={confirmDelete}
            >
              Eliminar
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default UsersPage;
