import React from "react";
import styles from "./PageNotFoundHere.module.css";
import Link from "next/link";
import Image from "next/image";

function PageNotFoutHere() {
  return (
    <div className={styles.container}>
      <div className={styles.contex}>
        <p>صفحه مورد نظر یافت نشد!</p>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
      <div>
        <Image
          src="/images/Error TV.png"
          alt="pageNotFount"
          width={555}
          height={555}
          className={styles.imageNotFound}
        />
      </div>
    </div>
  );
}

export default PageNotFoutHere;
