import { InputWithLabel } from "@/components/uiCustom/InputWithLabel";
import SelectInput from "@/components/uiCustom/SelectInput";
import TextAreaWithLabel from "@/components/uiCustom/TextAreaWithLabel";
import React from "react";

const ContactForm = () => {
  return (
    <div className="pb-10 ps-10 pt-28 font-Inter">
      <p className="font-Plus-Jakarta-Sans font-bold">Fill the form below</p>
      <div className="mt-6 grid gap-6">
        <div className="grid grid-cols-2 gap-4 gap-y-6">
          <InputWithLabel label={"Full Name *"} labelSemiBold />
          <InputWithLabel label={"Company Name *"} labelSemiBold />
          <InputWithLabel
            label={"Work Email *"}
            dataType="email"
            labelSemiBold
          />
          <InputWithLabel label={"Phone Number *"} labelSemiBold />

          <SelectInput label={"Company Size"} labelSemiBold />
          <SelectInput label={"Team"} labelSemiBold />
        </div>

        <SelectInput label={"Project Budget *"} labelSemiBold />

        <TextAreaWithLabel label={"Message"} labelSemiBold />

        <div className="w-full relative">
          <button className="w-full rounded-xl bg-blue-lotus py-2 font-semibold text-white">
            Let's Talk
          </button>
          
          <div className=" size-20 absolute top-[-40%] right-[-18%]">
            <img src="./icons/Contact/Settings.png" alt="" />
          </div>
        </div>

        <p className=" text-sm">By submitting this, you agree to the <span className=" font-semibold underline">Privacy Policy</span> and <span className=" font-semibold underline">Cookie Policy</span>.</p>
      </div>
    </div>
  );
};

export default ContactForm;
