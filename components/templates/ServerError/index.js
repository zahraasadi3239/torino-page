import Image from "next/image";
import React from "react";
import styles from "./ServerError.module.css";
import Link from "next/link";
function ServerError() {
  return (
    <div className={styles.container}>
      <div className={styles.contex}>
        <p className={styles.server}>اتصال با سرور برقرار نیست!!</p>
        <p className={styles.tryagain}>لطفا بعدا دوباره امتحان کنید.</p>
      </div>
      <div>
        <Image
        className={styles.imageServer}
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
