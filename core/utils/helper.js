export const flattenObject = (obj, delimiter = ".", prefix = "") => {
  const flattObject = Object.keys(obj).reduce((acc, k) => {
    if (
      typeof obj[k] === "object" &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0
    )
      Object.assign(acc, flattenObject(obj[k], delimiter, k));
    else acc[k] = obj[k];
    return acc;
  }, {});

  return flattObject;
};

export const DateToISO = (date) => new Date(date).toISOString();

export const getTransactionType = (type) => {
  return type === "Purchase" ? "ثبت‌نام در تور گردشگری" : type;
};
export const formatOrderId = (uuid) => {
  if (!uuid) return "سفارش نامشخص";

  // گرفتن اعداد از UUID (فقط اعداد را نگه می‌داریم)
  const numbersOnly = uuid.replace(/\D/g, "").slice(0, 8); // گرفتن ۸ رقم اول

  // تبدیل اعداد انگلیسی به فارسی
  const persianNumbers = numbersOnly.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

  return `سفارش ${persianNumbers}`;
};
