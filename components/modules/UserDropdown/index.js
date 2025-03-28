import { deleteCookie } from "@/core/utils/cookie";
import styles from "./StylesDropdown.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function UserDropdown({ phoneNumber }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    deleteCookie("refreshToken");
    deleteCookie("accessToken");
    window.location.reload();
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.dropdownContent} ${styles.mobileNumber}`}>
        <Image src="/images/profile.png" width={16} height={16} alt="profile" />
        <button>{phoneNumber} </button>
      </div>

      <div className={`${styles.dropdownContent} ${styles.dropdownContentLink}`}>
        <Image
          src="/images/profile-white.png"
          width={20}
          height={20}
          alt="farm"
        />
        <Link href="/profile">اطلاعات حساب کاربری</Link>
      </div>
      <div className={styles.line}></div>
      <div className={`${styles.dropdownContent} ${styles.logout}`}>
        <Image src="/images/logout.png" width={20} height={20} alt="logout" />
        <button onClick={handleLogout}>خروج از حساب کاربری</button>
      </div>
    </div>
  );
}

export default UserDropdown;
