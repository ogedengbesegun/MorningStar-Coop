import styles from "@/styles/dstyles";
import React, { useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import { useUser } from "../../context/UserContext";

export default function index() {
  const refText = useRef<Text>(null);
  const [text, setText] = useState<any | null>(null);
  const { user } = useUser();

  ////////date
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
      : ""; // Provide a default value to complete the expression

  /////////
  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <Text style={{ fontSize: 25, color: "green" }}>
        Welcome, {user?.name ?? "Guest"}
      </Text>

      <Image
        source={require("../../assets/images/d_img/money-graphic-3d.jpg")}
        style={{ width: 320, height: 250, backgroundColor: "green" }}
      />
      <View style={{ width: 300 }}>
        <Text style={{ fontSize: 20, color: "green" }}>
          Balances as at: {c_year}/{c_month}/{c_day}
        </Text>
        <Text style={{ fontSize: 20, color: "green" }}>{user?.oracle}</Text>
        <Text>Savings:{}</Text>
        <Text>Retirement:{}</Text>
        <Text>Loan Balance:{}</Text>
      </View>
    </View>
  );

  async function msc_index_finance() {
    // Fetch financial data from the API
    try {
      const financialData = await fetch(
        "http://192.168.43.201:8082/api/msc_finance",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            oracle: user?.oracle,
            month: newMonth,
          }),
        }
      );
      const response = await financialData.json();
    } catch (error) {
      alert("Error fetching financial data: " + error);
    }
  }
}
