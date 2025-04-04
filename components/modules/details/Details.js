import Image from "next/image";
import styles from "./Details.module.css";
import { convertToJalaliFull } from "@/core/utils/calender";
import citiesMap from "@/core/utils/cities";
import { formatOrderId } from "@/core/utils/helper";
import { sp } from "@/core/utils/convert";
import { fleetVehicleMap } from "@/core/utils/fleetVehicleMap";

const DetailsPage = ({ tour }) => {
  const {
    title,
    endDate,
    startDate,
    options,
    image,
    price,
    origin,
    destination,
  } = tour;
  const startPersian = convertToJalaliFull(startDate);
  const endPersian = convertToJalaliFull(endDate);
  const originName = citiesMap[origin?.name] || origin?.name;
  const destinationName = citiesMap[destination?.name] || destination?.name;
  return (
    <div className={styles.container}>
      <div className={styles.tourCard}>
        <div className={styles.details}>
          <div className={styles.title__fleetVehicle}>
            <div className={styles.title}>
              <Image
                src="/images/sun-fog.png"
                width={24}
                height={24}
                alt="tour"
              />
              <h3>{tour.title}</h3>
            </div>

            <p className={styles.vehicle}>
              {fleetVehicleMap[tour.fleetVehicle]?.icon} سفر با
              {fleetVehicleMap[tour.fleetVehicle]?.name}
            </p>
          </div>
          <div className={styles.info}>
            <p>
              از {originName} به {destinationName}.<span>{startPersian}</span>
            </p>
            <p className={styles.date}></p>
            <p>
              تاریخ برگشت: <span>{endPersian}</span>
            </p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.price}>
            <p className={styles.tourId}>
              شماره تور :<span>{formatOrderId(tour.id)} </span>
            </p>
            |
            <p className={styles.tourPrice}>
              مبلغ پرداخت شده:
              <span>{sp(tour.price).toLocaleString("fa-IR")}</span>تومان
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
