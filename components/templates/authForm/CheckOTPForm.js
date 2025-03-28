"use client";

import { useCheckOtp, useSendOtp } from "@/core/services/mutations";
import React, { useEffect, useState } from "react";
import OtpInput from "react18-input-otp";
import { toast } from "sonner";
import styles from "./CheckOTPForm.module.css";
import Image from "next/image";

function CheckOTPForm({ mobile, setStep, setIsOpen }) {
  console.log({ mobile });
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(15);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const { isPending, mutate: checkOtp } = useCheckOtp();
  const { mutate: sendOtp } = useSendOtp();
  const handleChange = (enteredOtp) => {
    console.log("Entered OTP:", enteredOtp);
    setCode(enteredOtp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (code.length !== 6) return;

    mutate: checkOtp(
      { mobile, code },
      {
        onSuccess: () => {
          setIsOpen(false);
          setStep(1);
        },
        onError: (error) => toast.error(error?.message),
      }
    );
  };
  useEffect(() => {
    if (timer === 0) {
      setIsResendDisabled(false); // وقتی تایمر به صفر برسه دکمه فعال میشه
      return;
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval); // تمیزکاری
  }, [timer]);

  const handleResendCode = () => {
    if (isResendDisabled) return;

    setIsResendDisabled(true);
    console.log("hello");
    setTimer(15);
    console.log("درخواست ارسال مجدد کد", { mobile });
    mutate: sendOtp(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success("کد جدید ارسال شد");
          setTimer(15); // تایمر ریست بشه
          setIsResendDisabled(true); // دوباره غیرفعال بشه
          toast(data?.data?.code);
        },
        onError: (error) => toast.error("خطا در ارسال مجدد کد"),
      }
    );
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.imageLeft}
        src="/images/Line arrow-left.png"
        width={24}
        height={24}
        alt="left"
        onClick={() => setStep(1)}
      />
      <form onSubmit={handleSubmit}>
        <h3 className={styles.title}>کد تایید را وارد کنید.</h3>
        <p>
          کد تایید به شماره<span> {mobile} </span> ارسال شد
        </p>
        <div style={{ direction: "ltr" }}>
          <OtpInput
            className={styles.otpForm}
            value={code}
            onChange={handleChange}
            numInputs={6}
            inputStyle={{
              width: "58px",
              height: "53px",
              border: "1px solid #00000040",
              borderRadius: "6px",
              margin: "0 4px",
              direction: "ltr",
            }}
          />
        </div>
        <div>
          <button
            className={styles.resetTimer}
            onClick={handleResendCode}
            disabled={isResendDisabled}
          >
            {isResendDisabled ? `ارسال مجدد (${timer})` : "ارسال مجدد کد"}
          </button>
        </div>
        <button className={styles.login} type="submit">
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
