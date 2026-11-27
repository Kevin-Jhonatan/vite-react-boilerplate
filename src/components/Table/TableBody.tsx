import { flexRender } from "@tanstack/react-table";
import type { RowData } from "@tanstack/react-table";
import TableCell from "./TableCell";
import type { TableInstance } from "./types";

interface TableBodyProps<TData extends RowData> {
  table: TableInstance<TData>;
  striped: boolean;
  onRowClick?: (row: TData) => void;
}

export const TableBody = <TData extends RowData>({
  table,
  striped,
  onRowClick,
}: TableBodyProps<TData>) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row, rowIndex) => (
        <tr
          key={row.id}
          role={onRowClick ? "button" : undefined}
          tabIndex={onRowClick ? 0 : undefined}
          onClick={() => onRowClick?.(row.original)}
          onKeyDown={(event) => {
            if (onRowClick && (event.key === "Enter" || event.key === " ")) {
              event.preventDefault();
              onRowClick(row.original);
            }
          }}
          className={`border-b border-border transition-colors last:border-b-0 ${
            onRowClick ? "cursor-pointer hover:bg-muted/50 focus:bg-muted/50 focus:outline-none" : ""
          } ${striped && rowIndex % 2 === 1 ? "bg-muted/30" : ""}`}
        >
          {row.getAllCells().map((cell) => (
            <td key={cell.id} className="px-4 py-3 text-sm">
              <TableCell value={cell.getValue()}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
