"use client";
import { useGetUserData } from "@/core/services/queries";
import styles from "./ProfilePage.module.css";
import BankAccountForm from "@/components/templates/BankAccountForm";
import UserAccountInformation from "@/components/templates/UserAccountInformation";
import PersonalInformation from "@/components/templates/PersonalInformation";
import BankAccountInformation from "@/components/templates/BankAccountInformation";
function profilePage() {
  const { data } = useGetUserData();
  return (
    <div className={styles.container}>
      <div>
        <UserAccountInformation data={data} />
      </div>
      <div>
        <PersonalInformation data={data} />
      </div>
      <div>
        <BankAccountInformation data={data} />
      </div>
      {/* <BankAccountForm /> */}
    </div>
  );
}

export default profilePage;
