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
  const [isOpenDate, setIsOpenDate] = useState(false);

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
          <div
            className={styles.dateWrapper}
            onClick={() => setIsOpenDate(true)}
          >
            <Image
              src="/images/calendar.png"
              width={20}
              height={20}
              alt="global"
            />
            <span className={styles.dateText}>تاریخ </span>
          </div>

          {/* تقویم که هنگام کلیک باز می‌شود */}
          {isOpenDate && (
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
// "use client";
// import { useForm, Controller } from "react-hook-form";
// import { DatePicker } from "zaman";

// import { useGetTours } from "@/core/services/queries";
// import QueryString from "qs";
// import { useRouter } from "next/navigation";
// import useQuery from "@/core/hooks/query";
// import { DateToISO, flattenObject } from "@/core/utils/helper";

// import styles from "./SearchForm.module.css";
// import Image from "next/image";
// import { useState } from "react";

// // import "zaman/dist/zaman.css"; // اضافه کردن استایل زمان
// const { getQuery } = useQuery();

// const { register, handleSubmit, control, watch, reset } = useForm({
//   defaultValues: {
//     date: { startDate: null, endDate: null },
//   },
// });
// function SearchForm() {
//   const [originMenuOpen, setOriginMenuOpen] = useState(false);
//   const [destinationMenuOpen, setDestinationMenuOpen] = useState(false);
//   const [dateMenuOpen, setDateMenuOpen] = useState(false);

//   // مقادیر انتخابی
//   const [selectedOrigin, setSelectedOrigin] = useState("");
//   const [selectedDestination, setSelectedDestination] = useState("");
//   const [selectedDate, setSelectedDate] = useState({
//     startDate: null,
//     endDate: null,
//   });

//   // داده‌های پیش‌فرض
//   const origins = ["تهران", "سنندج", "تبریز", "شیراز"];
//   const destinations = ["تهران", "سنندج", "تبریز", "شیراز"];
//   const toggleOriginMenu = () => {
//     setOriginMenuOpen((prev) => !prev);
//     setDestinationMenuOpen(false);
//     setDateMenuOpen(false);
//   };

//   const toggleDestinationMenu = () => {
//     setDestinationMenuOpen((prev) => !prev);
//     setOriginMenuOpen(false);
//     setDateMenuOpen(false);
//   };

//   const toggleDateMenu = () => {
//     setDateMenuOpen((prev) => !prev);
//     setOriginMenuOpen(false);
//     setDestinationMenuOpen(false);
//   };

//   // انتخاب مبدا و مقصد
//   const handleOriginSelect = (value) => {
//     setSelectedOrigin(value);
//     setOriginMenuOpen(false);
//   };

//   const handleDestinationSelect = (value) => {
//     setSelectedDestination(value);
//     setDestinationMenuOpen(false);
//   };
//   const handleDateSelect = (value) => {
//     setSelectedDate({
//       startDate: value.from ? value.from.toISOString().split("T")[0] : null,
//       endDate: value.to ? value.to.toISOString().split("T")[0] : null,
//     });
//     setDateMenuOpen(false); // بستن منوی تاریخ بعد از انتخاب
//   };
//   const submitHandler = (data) => {
//     // setQuery(flattenObject(data));
//     const query = QueryString.stringify(flattenObject(data));
//     router.push(`/?${query}`);
//   };
//   return (
//     <div className={styles.container}>
//       <form onSubmit={handleSubmit(submitHandler)}></form>
//       <div className={styles.location}>
//         <button onClick={toggleOriginMenu}>
//           <Image
//             src="/images/location.png"
//             width={20}
//             height={20}
//             alt="location"
//           />
//           {selectedOrigin || "انتخاب مبدا"}
//         </button>
//         {originMenuOpen && (
//           <ul>
//             {origins.map((origin, index) => (
//               <li key={index} onClick={() => handleOriginSelect(origin)}>
//                 {origin}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div className={styles.global}>
//         <button onClick={toggleDestinationMenu}>
//           <Image
//             src="/images/global-search.png"
//             width={20}
//             height={20}
//             alt="global"
//           />
//           {selectedDestination || "انتخاب مقصد"}
//         </button>
//         {destinationMenuOpen && (
//           <ul>
//             {destinations.map((destination, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleDestinationSelect(destination)}
//               >
//                 {destination}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div className={styles.data}>
//         <button onClick={toggleDateMenu}>
//           <Image
//             src="/images/calendar.png"
//             width={20}
//             height={20}
//             alt="global"
//           />
//           {selectedDate.startDate && selectedDate.endDate
//             ? `از ${selectedDate.startDate} تا ${selectedDate.endDate}`
//             : "انتخاب تاریخ"}
//         </button>

//         {dateMenuOpen && (
//           <div>
//             <DatePicker
//               range
//               inline
//               round="x2"
//               hideInput
//               onChange={handleDateSelect}
//               accentColor="#28A745"
//               calendarPosition="bottom-right"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchForm;
