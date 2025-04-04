"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useGetUsertTransactions } from "@/core/services/queries";
import styles from "./TransactionPage.module.css";
import { formatJalaliDate } from "@/core/utils/calender";
import { formatOrderId, getTransactionType } from "@/core/utils/helper";
import { sp } from "@/core/utils/convert";
function TransactionPage() {
  const { isPending, data } = useGetUsertTransactions();

  console.log(data);
  const { amount, type, createdAt, userId, id } = data?.data || [];
  if (isPending)
    return (
      <div>
        <Skeleton height={20} width={"100%"} />
        <Skeleton height={20} width={"100%"} />
        <Skeleton height={20} width={"100%"} />
      </div>
    );
  return (
    // <div className={styles.container}>
    //   <table className={styles.table}>
    //     <thead>
    //       <tr>
    //         <th>تاریخ و ساعت</th>
    //         <th>مبلغ(تومان)</th>
    //         <th>نوع تراکنش</th>
    //         <th>شماره سفارش</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data?.data?.map((transaction) => (
    //         <tr key={transaction.id}>
    //           <td>{formatJalaliDate(transaction.createdAt)}</td>
    //           <td>{sp(transaction.amount).toLocaleString("fa-IR")}</td>
    //           <td>{getTransactionType(transaction.type)}</td>
    //           <td>{formatOrderId(transaction.userId)}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className={styles.pageContainer}>
      {" "}
      {/* کلاس page-container در اینجا */}
      <div className={styles.mainContent}>
        {" "}
        {/* کلاس main-content در اینجا */}
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>تاریخ و ساعت</th>
                <th>مبلغ (تومان)</th>
                <th>نوع تراکنش</th>
                <th>شماره سفارش</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{formatJalaliDate(transaction.createdAt)}</td>
                  <td>{sp(transaction.amount).toLocaleString("fa-IR")}</td>
                  <td>{getTransactionType(transaction.type)}</td>
                  <td>{formatOrderId(transaction.userId)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionPage;
