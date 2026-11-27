import { useCallback, useMemo, useState } from "react";
import { toast } from "sonner";
import { users as initialUsers } from "../data/users";
import type { UserFormValues } from "../schemas/user.schema";
import type { User } from "../types/user";

const usersPerPage = 5;

export const useUsers = () => {
  const [userList, setUserList] = useState<User[]>(initialUsers);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<User | null>(null);
  const totalPages = Math.max(Math.ceil(userList.length / usersPerPage), 1);
  const currentPage = Math.min(page, totalPages);
  const paginatedUsers = useMemo(
    () =>
      userList.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage,
      ),
    [currentPage, userList],
  );

  const openCreateModal = useCallback(() => {
    setEditingUser(null);
    setIsFormOpen(true);
  }, []);

  const openEditModal = useCallback((user: User) => {
    setEditingUser(user);
    setIsFormOpen(true);
  }, []);

  const closeFormModal = useCallback(() => {
    setIsFormOpen(false);
    setEditingUser(null);
  }, []);

  const saveUser = useCallback(
    (values: UserFormValues) => {
      if (editingUser) {
        setUserList((currentUsers) =>
          currentUsers.map((user) =>
            user.id === editingUser.id ? { ...user, ...values } : user,
          ),
        );
        toast.success("Usuario actualizado correctamente");
      } else {
        setUserList((currentUsers) => [
          ...currentUsers,
          {
            ...values,
            id: `usr-${Date.now()}`,
            status: "Activo",
            lastAccess: "Nunca",
          },
        ]);
        toast.success("Usuario registrado correctamente");
      }

      closeFormModal();
    },
    [closeFormModal, editingUser],
  );

  const toggleUserStatus = useCallback((user: User) => {
    const nextStatus = user.status === "Activo" ? "Pendiente" : "Activo";

    setUserList((currentUsers) =>
      currentUsers.map((currentUser) =>
        currentUser.id === user.id
          ? {
              ...currentUser,
              status: nextStatus,
            }
          : currentUser,
      ),
    );
    toast.success(`Usuario ${nextStatus === "Activo" ? "activado" : "desactivado"}`);
  }, []);

  const requestDelete = useCallback((user: User) => {
    setDeleteTarget(user);
  }, []);

  const closeDeleteModal = useCallback(() => {
    setDeleteTarget(null);
  }, []);

  const confirmDelete = useCallback(() => {
    if (!deleteTarget) {
      return;
    }

    setUserList((currentUsers) =>
      currentUsers.filter((user) => user.id !== deleteTarget.id),
    );
    setPage((currentPage) =>
      Math.min(
        currentPage,
        Math.max(Math.ceil((userList.length - 1) / usersPerPage), 1),
      ),
    );
    closeDeleteModal();
    toast.success("Usuario eliminado correctamente");
  }, [closeDeleteModal, deleteTarget, userList.length]);

  return {
    users: userList,
    page: currentPage,
    perPage: usersPerPage,
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
  };
};

export default useUsers;
