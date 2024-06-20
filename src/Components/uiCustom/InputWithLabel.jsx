import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Triangle } from "lucide-react";
import { useEffect } from "react";

export function InputWithLabel({
  id = "",
  register,
  errors ,
  label,
  type = "text",
  labelSemiBold,
  trigger,
  watchVal,
}) {
  useEffect(() => {
    if (watchVal) {
      trigger(id);
    }
  }, [watchVal]);

  return (
    <div className="grid w-full items-center gap-1.5">
      <Label
        className={`${labelSemiBold ? "font-semibold" : ""} font-Inter text-sm text-mirage`}
        htmlFor={label}
      >
        {label}
      </Label>

      <Input
        type={type}
        id={id}
        {...(register
          ? type && type === "number"
            ? { ...register(id, { valueAsNumber: true }) }
            : { ...register(id) }
          : {})}
        className={` ${errors && errors[id] ? "focus:border-rose-400" : "focus:border-black"} ${errors && errors[id] ? "border-rose-400" : "border-neutral-400"} `}
      />

      <div className="h-[24px]">
        {errors[id] && (
          <p className="ps-1 pt-1 text-[10px] font-semibold text-rose-400 lg:text-xs">
            {errors[id]?.message}
          </p>
        )}
      </div>
    </div>
  );
}
