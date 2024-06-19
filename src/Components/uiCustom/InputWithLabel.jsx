import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWithLabel({label,dataType='text',labelSemiBold}) {
  return (
    <div className="grid w-full  items-center gap-1.5">
      <Label className={`${labelSemiBold?'font-semibold':''} font-Inter text-mirage`} htmlFor={label}>{label}</Label>
      <Input type={dataType} id={label} placeholder="" />
     
    </div>
  );
}
