"use client";
import Link from "next/link";
import styles from "./PersonalInformation.module.css";
import Image from "next/image";
function PersonalInformation({ data }) {
  return (
    <div className={styles.container}>
      <div>
        <h5>اطلاعات شخصی</h5>
        <div className={styles.edit}>
          <Image src="/images/edit.png" width={16} height={16} alt="edit" />
          <Link href="/profile/EditProfile">ویرایش اطلاعات</Link>
        </div>
      </div>
      <div className={styles.personal}>
        <div className={styles.lastfirstName}>
          <p className={styles.first}>نام</p>
          <p className={styles.second}>
            {data?.data?.data?.firstName ? data?.data?.data?.firstName : "-"}
          </p>
        </div>
        <div className={styles.lastfirstName}>
          <p className={styles.first}> نام خانوادگی</p>
          <p className={styles.second}>
            {data?.data?.data?.firstName ? data?.data?.data?.lastName : "-"}
          </p>
        </div>
        <div>
          <p className={styles.first}>کدملی</p>
          <p className={styles.second}>
            {data?.data?.data?.nationalCode
              ? data?.data?.data?.nationalCode
              : "-"}
          </p>
        </div>
      </div>
      <div>
        <div>
          <p className={styles.first}>جنسیت</p>
          <p className={styles.second}>
            {data?.data?.data?.gender ? data?.data?.data?.gender : "-"}
          </p>
        </div>
        <div>
          <p className={styles.first}>تاریخ تولد</p>
          <p className={styles.second}>
            {data?.data?.data?.birthDate ? data?.data?.data?.birthDate : "-"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
