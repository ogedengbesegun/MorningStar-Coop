import styles from "@/styles/dstyles";
import { c_day, c_month, c_year, lastMonth } from "@/utilities/mydate";
import React, { useEffect, useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import { useUser } from "../../context/UserContext";

export default function indextabs() {
  const refText = useRef<Text>(null);
  const [last_deduct, setLast_deduct] = useState<any | null>(null);
  const [saving, setSaving] = useState<any | null>(null);
  const [retirement, setRetirement] = useState<any | null>(null);
  const [loanBalance, setLoanBalance] = useState<any | null>(null);

  const { user } = useUser();

  // Provide a default value to complete the expression
  ///////useEffect(() => {
  useEffect(() => {
    msc_index_finance();

    // console.log("New Month:", lastMonth);
    // console.log(user?.oracle, "User Oracle");
  }),
    [];

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
        <Text style={{ fontSize: 20, color: "grey" }}>{user?.oracle}</Text>
        <Text style={{ fontSize: 15, color: "green" }}>
          Oracle Deduction as at: {lastMonth.toLocaleUpperCase()}, {c_year}{" "}
          {last_deduct}
        </Text>
        <Text style={{ fontSize: 20, color: "green" }}>
          Balances as at: {c_year}/{c_month}/{c_day}
        </Text>
        <Text style={{ fontSize: 15, color: "green" }}>Savings: {saving}</Text>
        <Text style={{ fontSize: 15, color: "green" }}>
          Retirement: {retirement}
        </Text>
        <Text style={{ fontSize: 15, color: "green" }}>
          Loan Balance: {loanBalance}
        </Text>
      </View>
    </View>
  );

  ////////

  async function msc_index_finance() {
    // Fetch financial data from the API
    try {
      const financialData = await fetch(
        "http://192.168.43.201:8082/api/msc_monthly_2025",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newOracle: user?.oracle, // Ensure user.oracle is defined
            lastMonth: lastMonth,
          }),
        }
      );
      const response = await financialData.json();
      if (response.success === true) {
        ///////
        setLast_deduct(response?.acct.deduction);
        setSaving(response?.acct.savings);
        setRetirement(response?.acct.retirement);
        setLoanBalance(response?.acct.loan_balance);
        //////
      } else {
        alert("Not Updated yet: " + response.message);
        setLast_deduct("XXXX");
        setSaving("XXXX");
        setRetirement("XXXX");
        setLoanBalance("XXXX");
      }
    } catch (error) {
      alert("Error fetching financial data: " + error);
    }
  }
}
