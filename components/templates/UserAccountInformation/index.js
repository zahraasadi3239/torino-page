"use client";
import { useRouter } from "next/navigation";
import styles from "./UserAccountInformation.module.css";
import Image from "next/image";
import Link from "next/link";
function UserAccountInformation({ data }) {
  const router = useRouter();
  const editHandler = () => {};
  return (
    <div className={styles.container}>
      <h5>اطلاعات حساب کاربری</h5>
      <div>
        <div className={styles.row}>
          <p className={styles.first}>شماره موبایل</p>
          <p className={styles.second}>
            {data?.data.mobile ? data?.data.mobile : "-"}
          </p>
        </div>
        <div className={styles.row}>
          <p className={styles.first}>ایمیل</p>
          <p className={styles.second}>
            {data?.data?.email ? data?.data?.email : "-"}
          </p>
        </div>
        <div onClick={editHandler} className={styles.row}>
          <Image src="/images/edit.png" width={16} height={16} alt="edit" className={styles.editImage}/>
          <Link href="/profile/EditProfile" className={styles.edit}>
            افزودن
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserAccountInformation;
