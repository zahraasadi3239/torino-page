import Link from "next/link";
import React from "react";
import styles from "./PaymentPage.module.css";
function PaymentPage({ searchParams }) {
  if (searchParams?.status === "success") {
    return (
      <div className={styles.container}>
        <p>پرداخت با موفقیت انجام شد.</p>
        <Link href="/profile/my-tours">برو به لیست تور ها</Link>
      </div>
    );
  }
  return (
    <div>
      <p>پرداخت با مشکل مواجه شد.</p>
    </div>
  );
}

export default PaymentPage;
