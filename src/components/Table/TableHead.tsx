import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { flexRender as renderCell } from "@tanstack/react-table";
import type { RowData } from "@tanstack/react-table";
import type { TableInstance } from "./types";

interface TableHeadProps<TData extends RowData> {
  table: TableInstance<TData>;
}

export const TableHead = <TData extends RowData>({ table }: TableHeadProps<TData>) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="border-b border-border bg-muted/50">
          {headerGroup.headers.map((header) => {
            const sorted = header.column.getIsSorted();

            return (
              <th
                key={header.id}
                className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground"
                scope="col"
              >
                {header.isPlaceholder ? null : header.column.getCanSort() ? (
                  <button
                    type="button"
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1 text-left text-xs font-semibold transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-accent"
                    onClick={() => header.column.toggleSorting()}
                    aria-label={`Ordenar por ${header.column.id}`}
                  >
                    {renderCell(header.column.columnDef.header, header.getContext())}
                    {sorted === "asc" ? (
                      <ArrowUp aria-hidden="true" className="h-4 w-4" />
                    ) : sorted === "desc" ? (
                      <ArrowDown aria-hidden="true" className="h-4 w-4" />
                    ) : (
                      <ArrowUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
                    )}
                  </button>
                ) : (
                  renderCell(header.column.columnDef.header, header.getContext())
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default TableHead;
