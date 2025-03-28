"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserAccountSchema } from "@/core/schema";
import { useUpdateUserAccount } from "@/core/services/mutations";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import styles from "./UserAccountForm.module.css";

function UserAccountForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(UserAccountSchema) });
  const { isPending, mutate } = useUpdateUserAccount();
  const submitHandler = (data) => {
    console.log("hello");
    if (isPending) return;
    mutate(
      {
        email: data.email,
      },
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
      <h5>اطلاعات حساب کاربری</h5>
      <div className={styles.account}>
        <div className={styles.mobile}>
          <p className={styles.first}>شماره موبایل</p>
          <p className={styles.second}>09903273239</p>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className={styles.error}>
            <input {...register("email")} placeholder="آدرس ایمیل" />
            {!!errors?.email && (
              <span className={styles.errorInput}>
                {errors?.email?.message}
              </span>
            )}
          </div>
          <button type="submit">تایید</button>
        </form>
      </div>
    </div>
  );
}

export default UserAccountForm;
