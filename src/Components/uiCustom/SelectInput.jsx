import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from 'react'
import { Label } from "../ui/label";

const SelectInput = ({label,labelSemiBold}) => {
  return (
    <div className=" grid gap-1.5 ">
      <Label
        className={`
            ${labelSemiBold ? "font-semibold" : ""}
             text-mirage font-Inter `}
        htmlFor={label}
      >
        {label}
      </Label>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectInput


