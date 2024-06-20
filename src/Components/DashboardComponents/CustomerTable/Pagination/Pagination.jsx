import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function DataTablePagination({ table }) {
 

  return (
    <div className="flex items-center justify-end px-2 py-2 border-t">
      
      <div className="flex items-center ">
        <div className="flex items-center space-x-2">
          <p className="text-xs font-medium text-gray-500">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px] border-none">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-xs text-gray-500 font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
         
          <Button
            variant="outline"
            className="h-8 w-8 cursor-pointer border-none p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <FaChevronLeft size={14} />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 cursor-pointer border-none p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <p>{}</p>
            <FaChevronRight size={14} />
          </Button>
          
        </div>
      </div>
    </div>
  );
}
