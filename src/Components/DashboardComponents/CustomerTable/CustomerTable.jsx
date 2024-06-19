

import InputWIthIcon from "@/components/uiCustom/InputWIthIcon";
import SelectInput from "@/components/uiCustom/SelectInput";
import { columns } from "./Columns/Columns";
import { DataTable } from "./Table/Table";


async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default  function CustomerTable() {
  const data = [
    {
      name: "728ed52f",
      company: 100,
      phone: "pending",
      actions: "m@example.com",
    },
    {
      name: "728ed52f",
      company: 100,
      phone: "pending",
      actions: "m@example.com",
    },
    // ...
  ];

  return (
    <div className="my-10 rounded-xl border">
      <div className="flex border-b px-6 font-Inter">
        <div className="border-b-2 border-b-blue-lotus py-2 text-sm text-blue-lotus">
          <p>All</p>
        </div>
      </div>

      <div className="flex px-5 py-3 gap-4 items-center">
        <div className="w-5/6">
          <InputWIthIcon />
        </div>

        <div className="w-1/6">
          <SelectInput />
        </div>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
