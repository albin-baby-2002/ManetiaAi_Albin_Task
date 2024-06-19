import { z } from "zod";

export const teamsEnum = ['Engineering','Designing','ProductManagement','Devops'];
export const companySizesEnum = ['1-10','10-20','20-30','above 30'];
export const projectBudgetEnum = ['below $1000','$1000 - 5000','$5000 - 10,000','$10,000 - 15,000','$15,000 - 20,000','$20,000+']

const companySizeSchema = z.enum(companySizesEnum);
const teamsSchema = z.enum(teamsEnum);
const projectBudgetSchema = z.enum(projectBudgetEnum)

export const contactFormSchema = z.object({
  fullName: z.string().min(3, " Min length For full name is 3").max(20),
  companyName: z.string().min(3, " Min length For company name is 3").max(15),
  workEmail: z.string().email("Enter a valid email"),
  phoneNumber: z.string().refine((value) => {
    const regex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    return regex.test(value);
  }, "Enter Valid Indian Phone Number"),
  companySize: z.enum(companySizesEnum, { message: "Select A Value" }),
  team: z.enum(teamsEnum, { message: "Select A Value" }),
  projectBudget:  z.enum(projectBudgetEnum, { message: "Select A Value" }),
  message: z.string().min(0, "Enter a valid value"),
});
