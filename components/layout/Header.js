"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

import ModalContainer from "../partials/container/ModalContainer";
import CheckOTPForm from "../templates/authForm/CheckOTPForm";
import SendOTPForm from "../templates/authForm/SendOTPForm";
import { useState } from "react";
import { useGetUserData } from "@/core/services/queries";
import UserDropdown from "../modules/UserDropdown";

function Header() {
  const [mobile, setMobile] = useState("");
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false);

  const toggleMenu = () => setIsOpenHamburgerMenu(!isOpenHamburgerMenu);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const { data } = useGetUserData();

  // if (data?.data)

  //     return (

  //     );
  return (
    <>
      <div className={styles.header}>
        <Image
          className={styles.hamber}
          src="/images/hamberger.png"
          width={20}
          height={16}
          alt="hamber"
          onClick={toggleMenu}
        />
        {isOpenHamburgerMenu ? (
          <div
            className={`${styles.sidebar} ${
              isOpenHamburgerMenu ? styles.open : ""
            }`}
          >
            <span onClick={() => setIsOpenHamburgerMenu(false)}>X</span>
            <nav>
              <a href="#" className={`${styles.navLink} ${styles.first}`}>
                صفحه اصلی
              </a>
              <a href="#" className={styles.navLink}>
                خدمات گردشگری
              </a>
              <a href="#" className={styles.navLink}>
                درباره ما
              </a>
              <a href="#" className={styles.navLink}>
                تماس با ما
              </a>
            </nav>
          </div>
        ) : null}

        {/* Sidebar */}

        <div className={styles.nav}>
          <Image
            className={styles.icon}
            src="/images/Torino.png"
            width={144}
            height={46}
            alt="toino"
            priority
          />
          <ul>
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/">خدمات گردشگری</Link>
            </li>
            <li>
              <Link href="/">درباره ما</Link>
            </li>
            <li>
              <Link href="/">تماس با ما</Link>
            </li>
          </ul>
        </div>
        <div className={styles.login}>
          <Image src="/images/frame.png" alt="torino" width={24} height={24} />
          {data?.data ? (
            <div className={styles.dropdownWrapper}>
              <Link href="/profile" className={styles.mobileNumber}>
                {data?.data.mobile}
              </Link>
              <Image
                src="/images/arrow-down.png"
                width={24}
                height={24}
                alt="drop-down"
                onClick={toggleDropdown}
                className={styles.dropdown}
              />
              {isDropdownOpen && (
                <UserDropdown phoneNumber={data?.data.mobile} />
              )}
            </div>
          ) : (
            <button
              className={styles.loginNumber}
              onClick={() => setIsOpen(true)}
            >
              ورود | ثبت نام
            </button>
          )}
        </div>
        <div className={styles.sign}>
          {data?.data ? (
            <div className={styles.dropdownWrapper}>
              <Link href="/profile" className={styles.mobileNumber}>
                {data?.data.mobile}
              </Link>
              <Image
                src="/images/arrow-down.png"
                width={24}
                height={24}
                alt="drop-down"
                onClick={toggleDropdown}
                className={styles.dropdown}
              />
              {isDropdownOpen && (
                <UserDropdown phoneNumber={data?.data.mobile} />
              )}
            </div>
          ) : (
            <button
              className={styles.loginNumber}
              onClick={() => setIsOpen(true)}
            >
              <Image
                src="/images/sign in buttom (1).png"
                width={40}
                height={40}
                alt="sing"
              />
            </button>
          )}
        </div>
      </div>
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
    </>
  );
}

export default Header;
