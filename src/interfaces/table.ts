import type { ColumnDef, RowData, TableFeatures } from "@tanstack/react-table";
import type { ReactNode } from "react";

export interface TablePagination {
  page: number;
  perPage: number;
  total: number;
}

export interface TableProps<TFeatures extends TableFeatures, TData extends RowData> {
  columns: ColumnDef<TFeatures, TData>[];
  data: TData[];
  loading?: boolean;
  pagination?: TablePagination;
  onPageChange?: (page: number) => void;
  onRowClick?: (row: TData) => void;
  emptyMessage?: string;
  striped?: boolean;
  className?: string;
  toolbar?: ReactNode;
}
