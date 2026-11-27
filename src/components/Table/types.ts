import type { ReactTable, RowData } from "@tanstack/react-table";
import type { TableProps as BaseTableProps } from "../../interfaces/table";
import { tableFeatures } from "./tableFeatures";

export type TableColumn<TData extends RowData> = BaseTableProps<
  typeof tableFeatures,
  TData
>["columns"][number];

export type TableProps<TData extends RowData> = BaseTableProps<typeof tableFeatures, TData>;
export type TableInstance<TData extends RowData> = ReactTable<typeof tableFeatures, TData>;
