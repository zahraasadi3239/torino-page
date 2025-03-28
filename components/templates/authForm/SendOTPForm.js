// "useClient";

import { useSendOtp } from "@/core/services/mutations";
import { toast } from "sonner";
import styles from "./SendOTPForm.module.css";
import { useState } from "react";

function SendOTPForm({ setMobile, setStep, mobile, setIsOpen }) {
  console.log(setIsOpen);
  const validationMobile = (mobile) => {
    const regex = /^09[0-9]{9}$/;
    return regex.test(mobile);
  };
  const { isPending, mutate } = useSendOtp();
  const submitHandler = async (event) => {
    event.preventDefault();

    if (isPending) return;
    if (!validationMobile(mobile))
      return toast.error("شماره موبایل معتبر وارد کنید");
    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => console.log(error),
      }
    );
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <span className={styles.cross} onClick={() => setIsOpen(false)}>
          X
        </span>
        <h4 className={styles.title}>ورود به تورینو</h4>
        <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
        <input
          placeholder="323****0990"
          type="text"
          id="input"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <button type="submit">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
