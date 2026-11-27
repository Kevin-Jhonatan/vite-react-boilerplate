interface TablePaginationProps {
  pageIndex: number;
  pageCount: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export const TablePagination = ({
  pageIndex,
  pageCount,
  canPreviousPage,
  canNextPage,
  onPreviousPage,
  onNextPage,
}: TablePaginationProps) => {
  return (
    <div className="flex items-center justify-between border-t border-border bg-muted/20 px-4 py-3">
      <span className="text-sm text-muted-foreground">
        Página {pageIndex + 1} de {pageCount}
      </span>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onPreviousPage}
          disabled={!canPreviousPage}
          className="cursor-pointer rounded-md border border-border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={onNextPage}
          disabled={!canNextPage}
          className="cursor-pointer rounded-md border border-border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
