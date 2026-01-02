"use client";

import AuthProvider from "@/components/partials/provider/AuthProvider";
import Link from "next/link";

import styles from "./Layout.module.css";
import Image from "next/image";
import { useState } from "react";

function ProfileLayout({ children }) {
  const [active, setActive] = useState(null);
  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <div>
      <AuthProvider>
        <div className={styles.continer}>
          <ul>
            <li
              onClick={() => handleClick(0)}
              className={`${active === 0 ? styles.active : ""}`}
            >
              <Image
                src="/images/frame.png"
                width={20}
                height={20}
                alt="profile"
              />
              <Link href="/profile">پروفایل من</Link>
            </li>
            <div className={styles.line}></div>
            <li
              onClick={() => handleClick(1)}
              className={`${active === 1 ? styles.active : ""}`}
            >
              <Image
                src="/images/sun-fog.png"
                width={20}
                height={20}
                alt="profile"
              />
              <Link href="/profile/my-tours">تورهای من</Link>
            </li>

            <div className={styles.line}></div>
            <li
              onClick={() => handleClick(2)}
              className={`${active === 2 ? styles.active : ""}`}
            >
              <Image
                src="/images/convert-card.png"
                width={20}
                height={20}
                alt="profile"
              />
              <Link href="/profile/transaction">تراکنش ها</Link>
            </li>
          </ul>

          <div className={styles.bigLine}></div>
          <div className={styles.child}>{children}</div>
        </div>
      </AuthProvider>
    </div>
  );
}

export default ProfileLayout;
