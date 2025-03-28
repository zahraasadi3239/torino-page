import { excludeDefaultMomentLocales } from "@/next.config";
import { object, string } from "yup";

export const UserAccountSchema = object({
  email: string().required("آدرس ایمیل خودراوارد کنید"),
});

export const PersonalAccountSchema = object({
  firstName: string().required("نام خود راوارد کنید"),
  lastName: string().required("نام خود راوارد کنید"),
  gender: string().required("جنسیت رامشخص کنید"),
  birthDate: string().required("ناریخ تولد خود راواردکنید"),
  nationalCode: string().length(10, "کدملی باید10 رقم باشد").required(),
});

export const BankAccountSchema = object({
  shaba_code: string().required("شماره شبا راواردکنید"),
  debitCard_code: string().length(16, "شماره کارت باید16عددباشد").required(),
  accountIdentifier: string()
    .min(6, "بایدحداقل8کارکترباشذ")
    .max(16, "بایدحداکثر16رقم باشد")
    .required(),
});
