// "use client";

import { serverFetch } from "@/core/services/http";
// import { useReducer } from "react";
// import serverFetch from "../../../core/services/http"
import styles from "./TourDetailsPage.module.css";
import Image from "next/image";
import { calculateTourDetails, jalaliMonth } from "@/core/utils/calender";
import { sp } from "@/core/utils/convert";
import ReserveButton from "@/components/atoms/ReserveButton";
import citiesMap from "@/core/utils/cities";
import { fleetVehicleMap } from "@/core/utils/fleetVehicleMap";
async function TourDetailsPage({ params }) {
  // const router = useReducer();
  const tourData = await serverFetch(`tour/${params?.id}`, null, {
    cache: "no-store",
  });
  console.log(tourData);
  const {
    title,
    endDate,
    startDate,
    id,
    image,
    price,
    origin,
    fleetVehicle,
    availableSeats,
    insurance,
  } = tourData;
  const startTime = startDate.split("T00:00:00.000Z")[0];
  const endTime = endDate.split("T00:00:00.000Z")[0];
  if (!tourData) return <p>صفحه یافت نشد</p>;
  const originName = citiesMap[origin?.name] || origin?.name;
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Image src={image} width={397} height={265} alt="tour" />

        <div className={styles.rowLeft}>
          <h2>{title}</h2>

          <div>
            <p className={styles.duration}>
              {calculateTourDetails(startDate, endDate)}روزه
            </p>
          </div>
          <div className={styles.description}>
            <div>
              <Image
                src="/images/user-tick.png"
                width={24}
                height={24}
                alt="mabda"
              />
              <p>تورلیدر از مبدا</p>
            </div>
            <div>
              <Image src="/images/map.png" width={24} height={24} alt="mabda" />
              <p>برنامه سفر</p>
            </div>
            <div>
              <Image
                src="/images/medal-star.png"
                width={24}
                height={24}
                alt="mabda"
              />
              <p>تضمین کیفیت</p>
            </div>
          </div>
          <div className={styles.price}>
            <p>
              <span>{sp(price).toLocaleString("fa-IR")}</span> تومان
            </p>
            <div>
              <ReserveButton id={id} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.box}>
          <div className={styles.details2}>
            <Image src="/images/map.png" width={20} height={20} alt="details" />
            <p>مبدا</p>
          </div>
          <p>{originName}</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.box}>
          <div className={styles.details2}>
            <Image
              src="/images/calendar.png"
              width={20}
              height={20}
              alt="details"
            />
            <p>تاریخ رفت</p>
          </div>
          <p>
            {" "}
            {new Date(startDate).toLocaleDateString("fa-IR", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.box}>
          <div className={styles.details2}>
            <Image
              src="/images/calendar.png"
              width={20}
              height={20}
              alt="details"
            />
            <p>تاریخ برگشت</p>
          </div>
          <p>
            {" "}
            {new Date(endDate).toLocaleDateString("fa-IR", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.box}>
          <div className={styles.details2}>
            <Image src="/images/bus.png" width={20} height={20} alt="details" />
            <p>حمل و نقل</p>
          </div>
          <p> {fleetVehicleMap[fleetVehicle]?.name}</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.box}>
          <div className={styles.details2}>
            <Image
              src="/images/profile-2user.png"
              width={20}
              height={20}
              alt="details"
            />
            <p>ظرفیت</p>
          </div>
          <p>{sp(availableSeats)} </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.box}>
          <div className={styles.details2}>
            <Image
              src="/images/security.png"
              width={20}
              height={20}
              alt="details"
            />
            <p>بیمه</p>
          </div>
          <p>{insurance ? "بیمه دارد" : "بیمه ندارد"}</p>
        </div>
      </div>
    </div>
  );
}
export default TourDetailsPage;
