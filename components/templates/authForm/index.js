"use client";

import { useState } from "react";
import Link from "next/link";

import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import ModalContainer from "@/components/partials/container/ModalContainer";
import { useGetUserData } from "@/core/services/queries";

import styles from "./AuthForm.module.css";
import Image from "next/image";

function AuthForm() {
  const [mobile, setMobile] = useState("");
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("hello");
    setIsOpen(!isOpen);
  };
  const { data } = useGetUserData();

  if (data?.data)
    return (
      <Link href="/profile" className={styles.mobileNumber}>
        {data?.data.mobile}
        <Image
          src="/images/arrow-down.png"
          width={24}
          height={24}
          alt="drop-down"
          onClick={toggleDropdown}
        />
      </Link>
    );

  return (
    <div className={styles.container}>
      <button onClick={() => setIsOpen(true)}>ورود | ثبت نام</button>

      {isOpen && (
        <div className={styles.boxContainer}>
          <div> {data?.data.mobile}</div>
          <div>اطلاعات حساب کاربری</div>
          <div>خروج از حساب کاربری</div>
        </div>
      )}

      {step === 1 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <SendOTPForm
            setStep={setStep}
            mobile={mobile}
            setMobile={setMobile}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <CheckOTPForm
            mobile={mobile}
            setIsOpen={setIsOpen}
            setStep={setStep}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
