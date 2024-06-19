import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import { Label } from "../ui/label";

const SelectInput = ({
  id,
  register,
  errors,
  setValue,
  values,
  label,
  trigger,
  labelSemiBold,
}) => {
  return (
    <div className="grid gap-1.5">
      <Label
        className={` ${labelSemiBold ? "font-semibold" : ""} font-Inter text-mirage`}
        htmlFor={label}
      >
        {label}
      </Label>

      <Select
        onValueChange={(val) => {
          
          setValue(id, val);
          trigger(id);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={"select"} />
        </SelectTrigger>
        <SelectContent>
          {values &&
            values.map((val, idx) => (
              <SelectItem key={idx} value={val}>
                {val}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
      <div className=" h-[24px]">
        {errors[id] && (
          <p className="ps-1 pt-1 text-xs font-semibold text-rose-400">
            {errors[id]?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
