"use client";

import Link from "next/link";

import styles from "./StyleBankAccountInformation.module.css";
import Image from "next/image";
function BankAccountInformation({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h5>اطلاعات حساب بانکی</h5>
        <div className={styles.edit}>
          <Image src="/images/edit.png" width={16} height={16} alt="edit" />
          <Link href="/profile/EditProfile">ویرایش اطلاعات</Link>
        </div>
      </div>
      <div>
        <div className={styles.row}>
          <p className={styles.first}>شماره شبا</p>
          <p className={styles.second}>
            {data?.data?.payment?.shaba_code
              ? data?.data?.payment?.shaba_code
              : "-"}
          </p>
        </div>
        <div className={styles.row}>
          <p className={styles.first}>شماره کارت</p>
          <p className={styles.second}>
            {data?.data?.payment?.debitCard_code
              ? data?.data?.payment?.debitCard_code
              : "-"}
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <p className={styles.first}>شماره حساب</p>
        <p className={styles.second}>
          {data?.data?.payment?.accountIdentifier
            ? data?.data?.payment?.accountIdentifier
            : "-"}
        </p>
      </div>
    </div>
  );
}

export default BankAccountInformation;
