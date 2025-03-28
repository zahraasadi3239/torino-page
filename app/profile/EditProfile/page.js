import BankAccountForm from "@/components/templates/BankAccountForm";
import styles from "./EditProfile.module.css";
import PersonalAccountForm from "@/components/templates/PersonalAccontForm";
import UserAccountForm from "@/components/templates/UserAccountForm";

function EditProfile() {
  return (
    <div className={styles.container}>
      <UserAccountForm />
      <PersonalAccountForm />
      <BankAccountForm />
    </div>
  );
}

export default EditProfile;
