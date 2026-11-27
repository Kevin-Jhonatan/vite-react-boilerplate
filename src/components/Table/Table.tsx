import { useState } from "react";
import {
  useTable,
  type PaginationState,
  type RowData,
  type SortingState,
} from "@tanstack/react-table";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TablePagination from "./TablePagination";
import TableState from "./TableState";
import { tableFeatures } from "./tableFeatures";
import type { TableProps } from "./types";

export type { TableColumn, TableProps } from "./types";

export const Table = <TData extends RowData>({
  columns,
  data,
  loading = false,
  pagination,
  onPageChange,
  onRowClick,
  emptyMessage = "No hay datos disponibles",
  striped = false,
  className = "",
  toolbar,
}: TableProps<TData>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [paginationState, setPaginationState] = useState<PaginationState>({
    pageIndex: Math.max((pagination?.page ?? 1) - 1, 0),
    pageSize: pagination?.perPage ?? Math.max(data.length, 1),
  });
  const table = useTable({
    features: tableFeatures,
    columns,
    data,
    state: {
      sorting,
      pagination: paginationState,
    },
    manualPagination: Boolean(pagination),
    rowCount: pagination?.total,
    onSortingChange: setSorting,
    onPaginationChange: (updater) => {
      setPaginationState((current) => {
        const next = typeof updater === "function" ? updater(current) : updater;
        onPageChange?.(next.pageIndex + 1);
        return next;
      });
    },
  });

  if (loading) {
    return <TableState className={className} message="Cargando..." />;
  }

  if (data.length === 0) {
    return <TableState className={className} message={emptyMessage} />;
  }

  return (
    <div
      className={`overflow-x-auto rounded-2xl border border-border bg-card shadow-sm ${className}`}
    >
      {toolbar && <div className="mb-4">{toolbar}</div>}
      <table className="w-full border-collapse">
        <TableHead table={table} />
        <TableBody table={table} striped={striped} onRowClick={onRowClick} />
      </table>
      {pagination && (
        <TablePagination
          pageIndex={paginationState.pageIndex}
          pageCount={Math.ceil(pagination.total / pagination.perPage)}
          canPreviousPage={table.getCanPreviousPage()}
          canNextPage={table.getCanNextPage()}
          onPreviousPage={() => table.previousPage()}
          onNextPage={() => table.nextPage()}
        />
      )}
    </div>
  );
};

export default Table;
