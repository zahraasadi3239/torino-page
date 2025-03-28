"use client";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { useCheckout } from "@/core/services/mutations";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useGetBasket } from "@/core/services/queries";
import styles from "./CheckOutPage.module.css";
import Image from "next/image";
import { PersonalAccountSchema } from "@/core/schema";
import { calculateTourDetails } from "@/core/utils/calender";
import { sp } from "@/core/utils/convert";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CheckOutPage() {
  const { data, isPending } = useGetBasket();
  const { mutate } = useCheckout();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(PersonalAccountSchema) });
  const { price, title, endDate, startDate } = data?.data || {};
  const startTime = startDate?.split("T00:00:00.000Z")[0];
  const endTime = endDate?.split("T00:00:00.000Z")[0];
  console.log({ startTime, endTime });
  const checkoutHandler = () => {
    const data = {
      nationalCode: "3720878654",
      fullName: "John Doe",
      gender: "male",
      birthDate: "2022-10-10",
    };
    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        router.push("/payment?status=success");
      },
      onError: (error) => console.log(error),
    });
  };
  if (isPending)
    return (
      <div>
        <Skeleton height={20} width={"100%"} />
        <Skeleton height={20} width={"100%"} />
        <Skeleton height={20} width={"100%"} />
      </div>
    );
  if (!data)
    return (
      <div>
        <p>سبدخریدشما خالی است</p>
        <Link href="/">صغحه اصلی</Link>
      </div>
    );
  return (
    <div className={styles.container}>
      <div className={styles.traveler}>
        <div className={styles.travelerr}>
          <Image
            src="/images/profile.png"
            width={24}
            height={24}
            alt="profile"
          />
          <h2>مشخصات مسافر</h2>
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className={styles.input}
          />
          <input type="text" placeholder="کد ملی" className={styles.input} />

          <select className={styles.input}>
            <option>جنسیت</option>
            <option>مرد</option>
            <option>زن</option>
          </select>
          <input
            type="text"
            placeholder="تاریخ تولد"
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.description}>
          <p className={styles.title}>{title}</p>
          <p className={styles.duration}>
            {calculateTourDetails(startDate, endDate)}روزه
            {calculateTourDetails(startDate, endDate) - 1}شب
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.price}>
          <p className={styles.endPrice}>قیمت نهایی</p>
          <p className={styles.priceDetails}>
            {" "}
            <span>{sp(price).toLocaleString("fa-IR")}</span> تومان
          </p>
        </div>

        <button onClick={checkoutHandler}>ثبت و خرید نهایی</button>
      </div>
    </div>
  );
}

export default CheckOutPage;
