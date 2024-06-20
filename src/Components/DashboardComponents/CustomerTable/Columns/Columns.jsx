"use client";

import { Checkbox } from "@/components/ui/checkbox";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className=" flex items-center gap-3">
          <div className=" size-10">
            <img
            className=" rounded-full"
              src={`./icons/Avatars/Avatar${Math.floor(Math.random() * 4 + 1)}.png`}
              alt=""
            />
          </div>

          {}

          <div className="grid gap-2 text-xs">
            <p className="font-medium">{row.getValue("name")} </p>
            <p className="text-gray-500">{row.getValue("email")}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "company",
    header: () => <div className="text-center">Comapny</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center text-xs">
          {row.getValue("company").name}
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: () => <div className="text-center">Phone</div>,
    cell: ({ row }) => {
      return <div className="text-center text-xs">{row.getValue("phone")}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-end gap-3">
          <div className="size-4">
            <img src="./icons/Edit.png" alt="" />
          </div>
          <div className="size-4">
            <img src="./icons/ArrowRightSm.png" alt="" />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => {
      return null;
    },
    cell: () => {
      return null;
    },
  },
];
