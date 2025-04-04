"use client";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { BankAccountSchema } from "@/core/schema";
import { useUpdateBankAccount } from "@/core/services/mutations";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import styles from "./BankAccountForm.module.css";

function BankAccountForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(BankAccountSchema) });

  const { isPending, mutate } = useUpdateBankAccount();
  const submitHandler = (data) => {
    console.log("hello");
    if (isPending) return;
    mutate(
      { payment: data },
      {
        onSuccess: (data) => {
          toast.success(data);
          router.push("/profile");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className={styles.container}>
      <h5>اطلاعات حساب بانکی</h5>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.form}>
          <div className={styles.error}>
            <input {...register("shaba_code")} placeholder="شماره شبا" />
            {!!errors?.shaba_code && (
              <span className={styles.errorInput}>
                {errors?.shaba_code?.message}
              </span>
            )}
          </div>
          <div className={styles.error}>
            <input {...register("debitCard_code")} placeholder="شماره کارت" />
            {!!errors?.debitCard_code && (
              <span className={styles.errorInput}>
                {errors?.debitCard_code?.message}
              </span>
            )}
          </div>
          <div className={styles.error}>
            {" "}
            <input
              {...register("accountIdentifier")}
              placeholder="شماره حساب"
            />
            {!!errors?.accountIdentifier && (
              <span className={styles.errorInput}>
                {errors?.accountIdentifier?.message}
              </span>
            )}
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.button}>
          <button type="submit">تایید</button>
          <button className={styles.cansel}>انصراف</button>
        </div>
      </form>
    </div>
  );
}

export default BankAccountForm;
