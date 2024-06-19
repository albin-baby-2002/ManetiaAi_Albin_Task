import React from 'react'
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

const TextAreaWithLabel = ({label,labelSemiBold}) => {
  return (
    <div className="grid  w-full  items-center gap-1.5">
      <Label
        className={`${labelSemiBold ? "font-semibold" : ""} text-mirage font-Inter `}
        htmlFor={label}
      >
        {label}
      </Label>
      <Textarea className=""/>
    </div>
  );
}

export default TextAreaWithLabel
