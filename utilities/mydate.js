const c_date = new Date();
//////formatting day
const c_day =
    c_date.getDate() < 10 ? "0" + c_date.getDate() : c_date.getDate();
//////formattting month
const c_month =
    c_date.getMonth() + 1 < 10
        ? "0" + (c_date.getMonth() + 1)
        : c_date.getMonth() + 1;
const c_year = c_date.getFullYear();
///////////
const monthNames = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
];
const newMonth =
    c_month === "01"
        ? monthNames[0]
        : c_month === "02"
            ? monthNames[1]
            : c_month === "03"
                ? monthNames[2]
                : c_month === "04"
                    ? monthNames[3]
                    : c_month === "05"
                        ? monthNames[4]
                        : c_month === "06"
                            ? monthNames[5]
                            : c_month === "07"
                                ? monthNames[6]
                                : c_month === "08"
                                    ? monthNames[7]
                                    : c_month === "09"
                                        ? monthNames[8]
                                        : c_month === "10"
                                            ? monthNames[9]
                                            : c_month === "11"
                                                ? monthNames[10]
                                                : c_month === "12"
                                                    ? monthNames[11]
                                                    : "";
const lastMonth = monthNames[(c_date.getMonth() - 1)];
const nMonth = monthNames[(c_date.getMonth() + 1)]

export { c_day, c_month, c_year, lastMonth, newMonth, nMonth };

