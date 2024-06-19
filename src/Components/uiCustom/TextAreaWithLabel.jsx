import React, { useEffect } from 'react'
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

const TextAreaWithLabel = ({id,register,trigger,errors,label,watchVal,labelSemiBold}) => {
  
   useEffect(() => {
     if (watchVal) {
       console.log(watchVal);
       trigger(id);
     }
   }, [watchVal]);
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label
        className={`${labelSemiBold ? "font-semibold" : ""} font-Inter text-mirage`}
        htmlFor={label}
      >
        {label}
      </Label>
      <Textarea className="" id={id} {...register(id)} />
      {errors[id] && (
        <p className="ps-1 pt-1 text-xs font-semibold text-rose-400">
          {errors[id]?.message}
        </p>
      )}
    </div>
  );
}

export default TextAreaWithLabel
