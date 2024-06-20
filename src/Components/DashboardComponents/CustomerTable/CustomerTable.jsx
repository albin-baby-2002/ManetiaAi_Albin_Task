import InputWIthIcon from "@/components/uiCustom/InputWIthIcon";
import SelectInput from "@/components/uiCustom/SelectInput";
import { columns } from "./Columns/Columns";
import { DataTable } from "./Table/Table";
import { useEffect, useState } from "react";
import axios from "axios";

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
  ];
}

export default function CustomerTable() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("effect");
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="my-10 rounded-xl border">
      <div className="flex border-b px-6 font-Inter">
        <div className="border-b-2 border-b-blue-lotus py-2 text-sm text-blue-lotus">
          <p>All</p>
        </div>
      </div>

      <div className="flex items-center gap-4 px-5 py-3">
        <div className="w-5/6">
          <InputWIthIcon />
        </div>

        <div className="w-1/6">
          <SelectInput />
        </div>
      </div>
      {data && <DataTable columns={columns} data={data} loading={loading} />}
    </div>
  );
}
