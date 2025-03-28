"use client";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalAccountSchema } from "@/core/schema";
import { useUpdatePersonalAccount } from "@/core/services/mutations";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import styles from "./PersonalAccontForm.module.css";

function PersonalAccontForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(PersonalAccountSchema) });

  const { isPending, mutate } = useUpdatePersonalAccount();
  const submitHandler = (data) => {
    console.log("data");
    if (isPending) return;
    mutate(
      {
        //
        data,
      },
      {
        onSuccess: (data) => {
          toast.success(data);
          console.log("success");
          router.push("/profile");
        },
        onError: (errorInput) => {
          console.log(errorInput);
        },
      }
    );
  };

  return (
    <div className={styles.container}>
      <h5>اطلاعات شخصی</h5>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <div className={styles.error}>
            <input {...register("firstName")} placeholder="نام " />
            {!!errors?.firstName && (
              <span className={styles.errorInput}>
                {errors?.firstName?.message}
              </span>
            )}
          </div>
          <div className={styles.error}>
            <input {...register("lastName")} placeholder="نام خانوادگی" />
            {!!errors?.lastName && (
              <span className={styles.errorInput}>
                {errors?.lastName?.message}
              </span>
            )}
          </div>
          <div className={styles.error}>
            <input {...register("gender")} placeholder="جنسیت" />
            {!!errors?.gender && (
              <span className={styles.errorInput}>
                {errors?.gender?.message}
              </span>
            )}
          </div>
          <div className={styles.error}>
            <input {...register("birthDate")} placeholder="تاریخ تولد" />
            {!!errors?.birthDate && (
              <span className={styles.errorInput}>
                {errors?.birthDate?.message}
              </span>
            )}
          </div>
          <div className={styles.error}>
            <input {...register("nationalCode")} placeholder="کدملی" />
            {!!errors?.nationalCode && (
              <span className={styles.errorInput}>
                {errors?.nationalCode?.message}
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

export default PersonalAccontForm;
