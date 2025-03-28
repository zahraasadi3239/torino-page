import moment from "moment-jalaali";

const persianMonths = {
  1: "فروردین",
  2: "اردیبهشت",
  3: "خرداد",
  4: "تیر",
  5: "مرداد",
  6: "شهریور",
  7: "مهر",
  8: "آبان",
  9: "آذر",
  10: "دی",
  11: "بهمن",
  12: "اسفند",
};
const coverMonthToPersian = (monthIndex) => {
  return persianMonths[monthIndex] || monthIndex;
};
const calculateTourDetails = (startTime, endTime) => {
  moment.locale("fa");
  const startDate = moment(startTime);
  const endDate = moment(endTime);

  //محاسبه تعدادروزها
  const duration = endDate.diff(startDate, "days");

  return duration;
};

const jalaliMonth = ({ gregorianData }) => {
  const persianDate = moment(gregorianData);
  const monthIndex = persianDate.jMonth() + 1;
  const persianMonths = coverMonthToPersian(monthIndex);
  return persianMonths;
};

const formatJalaliDate = (isoDate) => {
  const jalaliDate = moment(isoDate).format("jYYYY/jMM/jDD - HH:mm");
  return jalaliDate.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]); // تبدیل اعداد به فارسی
};
moment.loadPersian({ dialect: "persian-modern" });

export function convertToJalaliFull(date) {
  return moment(date).format("dddd jD jMMMM jYYYY");
}

export { calculateTourDetails, jalaliMonth, formatJalaliDate };
