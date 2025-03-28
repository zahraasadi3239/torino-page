import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";
import { sp } from "@/core/utils/convert";
import { calculateTourDetails, jalaliMonth } from "@/core/utils/calender";

function Card({ tour }) {
  const { title, endDate, startDate, options, image, price } = tour;
  console.log(tour);
  console.log(jalaliMonth(startDate));

  const startTime = startDate.split("T00:00:00.000Z")[0];
  const endTime = endDate.split("T00:00:00.000Z")[0];
  console.log({ startTime, endTime });
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <Image src={image} width={279} height={159} alt="tour" />
        <h3>{tour.title}</h3>
        <div className={styles.detailsTime}>
          <p>
            {jalaliMonth(startDate)} ماه.
            {calculateTourDetails(startDate, endDate)}روزه
          </p>
          <p>-پرواز</p>
          <p>-{options[1]}</p>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.price}>
        <Link href={`/tours/${tour?.id}`}>رزرو</Link>
        <p>
          <span>{sp(price)}</span> تومان
        </p>
      </div>
      {/* <Image src={tour.image} alt="tour" width={200} height={200} /> */}
    </div>
  );
}

export default Card;
