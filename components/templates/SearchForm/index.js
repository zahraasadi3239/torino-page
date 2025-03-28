"use client";

import { useForm, Controller } from "react-hook-form";
import { DatePicker } from "zaman";

// import { DateToISO, flattenObject } from "@/core/utils/helpers";
import { useEffect, useRef, useState } from "react";
import { useGetTours } from "@/core/services/queries";
import QueryString from "qs";
import { useRouter } from "next/navigation";
import useQuery from "@/core/hooks/query";
import { DateToISO, flattenObject } from "@/core/utils/helper";
import Image from "next/image";
import styles from "./SearchForm.module.css";
function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const { getQuery } = useQuery();

  const { register, handleSubmit, control, watch, reset } = useForm({
    defaultValues: {
      date: { startDate: null, endDate: null },
    },
  });
  useEffect(() => {
    const datePickerInput = document.querySelector(
      ".SearchForm_datePickerContainer__v5JSA input"
    );
    if (datePickerInput) {
      datePickerInput.style.display = "none";
    }
  }, []);
  const datePickerRef = useRef(null);

  useEffect(() => {
    if (datePickerRef.current) {
      const input = datePickerRef.current.querySelector("input");
      if (input) {
        input.style.display = "none";
      }
    }
  }, []);

  const selectedDate = watch("date");
  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    if (originId && destinationId) reset({ originId, destinationId });
  }, []);

  const submitHandler = (data) => {
    // setQuery(flattenObject(data));
    const query = QueryString.stringify(flattenObject(data));
    router.push(`/?${query}`);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.location}>
          <Image
            src="/images/location.png"
            width={20}
            height={20}
            alt="location"
          />
          <select {...register("originId")}>
            <div className={styles.option}>
              <option value="" disabled selected>
                مبدأ
              </option>
              <option>پرتردد</option>
              <option value="1">تهران</option>
              <option value="2">سنندج</option>
              <option value="3">تبریز</option>
              <option value="4">شیراز</option>
            </div>
          </select>
        </div>
        <div className={styles.line}></div>
        <div className={styles.global}>
          <Image
            src="/images/global-search.png"
            width={20}
            height={20}
            alt="global"
          />
          <select {...register("destinationId")}>
            <option value="" disabled selected>
              مقصد
            </option>
            <option>پرتردد</option>
            <option value="1">تهران</option>
            <option value="2">سنندج</option>
            <option value="3">تبریز</option>
            <option value="4">شیراز</option>
          </select>
        </div>
        <div className={styles.line}></div>

        <div className={styles.data}>
          <div className={styles.dateWrapper} onClick={() => setIsOpen(true)}>
            <Image
              src="/images/calendar.png"
              width={20}
              height={20}
              alt="global"
            />
            <span className={styles.dateText}>
              {selectedDate.startDate
                ? `از ${selectedDate.startDate} تا ${selectedDate.endDate}`
                : "تاریخ"}
            </span>
          </div>

          {/* تقویم که هنگام کلیک باز می‌شود */}
          {isOpen && (
            <div className={styles.datePickerContainer}>
              <Controller
                name="date"
                control={control}
                render={({ field: { onChange } }) => (
                  <DatePicker
                    ref={datePickerRef}
                    range
                    round="x2"
                    hideInput={true}
                    popperPlacement="botton"
                    calendarPosition="bottom-right"
                    accentColor="#28A745"
                    inline
                    onClose={() => setIsOpen(false)} // بستن تقویم بعد از انتخاب تاریخ
                    onChange={(e) =>
                      onChange({
                        startDate: e.from
                          ? e.from.toISOString().split("T")[0]
                          : null,
                        endDate: e.to ? e.to.toISOString().split("T")[0] : null,
                      })
                    }
                    input
                  />
                )}
              />
            </div>
          )}
        </div>

        <button type="submit">جستجو</button>
      </form>
    </div>
  );
}

export default SearchForm;
