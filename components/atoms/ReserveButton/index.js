"use client";
// import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import styles from "./ReserveButton.module.css";
const { useAddToBasket } = require("@/core/services/mutations");

function ReserveButton({ id }) {
  const { mutate, isPending } = useAddToBasket();
  const router = useRouter();
  const cartHandler = () => {
    if (isPending) return;
    mutate(id, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        router.push("/checkout");
      },
      onError: (error) => console.log(error),
    });
  };
  return (
    <button className={styles.cartButton} onClick={cartHandler}>
      رزرو وخرید
    </button>
  );
}
export default ReserveButton;
