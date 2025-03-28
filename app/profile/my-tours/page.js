"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useGetUserTours } from "@/core/services/queries";
import styles from "./MyToursPage.module.css";
import DetailsPage from "@/components/modules/details/Details";
function MyToursPage() {
  const { data, isPending } = useGetUserTours();
  console.log(data);

  if (isPending)
    return (
      <div>
        <Skeleton height={20} width={"100%"} />
        <Skeleton height={20} width={"100%"} />
        <Skeleton height={20} width={"100%"} />
      </div>
    );
  return (
    <div className={styles.container}>
      {data?.data?.map((tour) => (
        <DetailsPage key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

export default MyToursPage;
