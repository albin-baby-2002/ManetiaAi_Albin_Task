import { InputWithLabel } from "@/components/uiCustom/InputWithLabel";
import SelectInput from "@/components/uiCustom/SelectInput";
import TextAreaWithLabel from "@/components/uiCustom/TextAreaWithLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {  companySizesEnum, contactFormSchema, projectBudgetEnum, teamsEnum } from "@/Schemas/ContactFormSchema";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      companyName: "",
      workEmail: "",
      phoneNumber: "",
      companySize: "",
      team: "",
      projectBudget: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
  });

  const [
    fullName,
    companyName,
    phoneNumber,
    message,
    workEmail,
    companySize,
    team,
    projectBudget,
  ] = watch([
    "fullName",
    "companyName",
    "phoneNumber",
    "message",
    "workEmail",
    "companySize",
    "team",
    "projectBudget",
  ]);
  


  return (
    <div className="w-1/2 pb-10 pr-10 ps-10 pt-28 font-Inter">
      <p className="font-Plus-Jakarta-Sans font-bold">Fill the form below</p>
      <div className="mt-6 grid gap-2">
        <div className="grid grid-cols-2 gap-4 gap-y-2">
          <InputWithLabel
            id="fullName"
            register={register}
            watchVal={fullName}
            errors={errors}
            trigger={trigger}
            label={"Full Name *"}
            labelSemiBold
          />
          <InputWithLabel
            id="companyName"
            register={register}
            watchVal={companyName}
            trigger={trigger}
            errors={errors}
            label={"Company Name *"}
            labelSemiBold
          />
          <InputWithLabel
            id="workEmail"
            register={register}
            errors={errors}
            watchVal={workEmail}
            trigger={trigger}
            label={"Work Email *"}
            type="email"
            labelSemiBold
          />
          <InputWithLabel
            id="phoneNumber"
            watchVal={phoneNumber}
            trigger={trigger}
            register={register}
            errors={errors}
            label={"Phone Number *"}
            labelSemiBold
          />

          <SelectInput
            id="companySize"
            register={register}
            errors={errors}
            setValue={setValue}
            values={companySizesEnum}
            trigger={trigger}
            label={"Company Size"}
            labelSemiBold
          />
          <SelectInput
            id="team"
            register={register}
            errors={errors}
            setValue={setValue}
            values={teamsEnum}
            trigger={trigger}
            label={"Team"}
            labelSemiBold
          />
        </div>

        <SelectInput
          id="projectBudget"
          register={register}
          setValue={setValue}
          values={projectBudgetEnum}
          trigger={trigger}
          errors={errors}
          label={"Project Budget *"}
          labelSemiBold
        />

        <TextAreaWithLabel
          id="message"
          register={register}
          watchVal={message}
          trigger={trigger}
          errors={errors}
          label={"Message"}
          labelSemiBold
        />

        <div className=" w-full pt-3">
          <button onClick={handleSubmit((data)=>{console.log(data)})} className="w-full rounded-xl bg-blue-lotus py-2 font-semibold text-white">
            Let's Talk
          </button>

          <div className= " fixed bottom-0 right-0 size-20">
            <img src="./icons/Contact/Settings.png" alt="" />
          </div>
        </div>

        <p className="text-sm">
          By submitting this, you agree to the{" "}
          <span className="font-semibold underline">Privacy Policy</span> and{" "}
          <span className="font-semibold underline">Cookie Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
