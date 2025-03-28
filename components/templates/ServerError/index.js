import Image from "next/image";
import React from "react";
import styles from "./ServerError.module.css";
import Link from "next/link";
function ServerError() {
  return (
    <div className={styles.container}>
      <div className={styles.contex}>
        <p>صفحه مورد نظر یافت نشد!</p>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
      <div>
        <Image
          src="/images/Error Lamp Robot.png"
          alt="pageNotFount"
          width={555}
          height={555}
          priority
        />
      </div>
    </div>
  );
}

export default ServerError;
