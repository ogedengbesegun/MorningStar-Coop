import styles from "@/styles/dstyles";
import { c_day, c_month, c_year, lastMonth, nMonth } from "@/utilities/mydate";
import { API_URL } from "@env";
import React, { useEffect, useRef, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
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

    // console.log("New Month:", nMonth);
    // console.log(user?.oracle, "User Oracle");
  }),
    [];

  /////////
  return (
    <>
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: "green",
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Welcome, {user?.name ?? "Guest"}
        </Text>
      </View>
      <ScrollView>
        <View style={[styles.container, { backgroundColor: "white" }]}>
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
            <Text style={{ fontSize: 20, color: "green", marginTop: 15 }}>
              Balances as at: {c_year}/{c_month}/{c_day}
            </Text>
            <Text style={{ fontSize: 17, color: "green" }}>
              Savings: {saving}
            </Text>
            <Text style={{ fontSize: 17, color: "green" }}>
              Retirement: {retirement}
            </Text>
            <Text style={{ fontSize: 17, color: "green" }}>
              Loan Balance: {loanBalance}
            </Text>

            <Text style={{ marginTop: 20 }}>
              {c_year} Dividends: 
              <Text style={{ color: "red", fontSize: 15 }}> XXX</Text>
            </Text>
            <Text style={{ fontStyle: "italic", color: "grey",marginTop:15 }}>
              These Financial Records are Carefully calculated for each member
              in accordance to remittances from the Oracle. However, if you have
              concerns about the figures displayed, please contact the Financial
              Secretary or any of the Exco Members.
              {"\n\n"}

              Our Members are treasures
              and we value all of your input for the advancement of this great
              cooperative Society.
              {"\n\n"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );

  ////////

  async function msc_index_finance() {
    // Fetch financial data from the API
    try {
      const financialData = await fetch(`${API_URL}/api/msc_monthly_2025`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newOracle: user?.oracle, // Ensure user.oracle is defined
          lastMonth: lastMonth,
        }),
      });
      const response = await financialData.json();
      if (response.success === true) {
        setLast_deduct(
          Number(response?.acct.deduction).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );
        setSaving(
          Number(response?.acct.savings).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );
        setRetirement(
          Number(response?.acct.retirement).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );
        setLoanBalance(
          Number(response?.acct.loan_balance).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );
        //////
      } else {
        alert(response?.message);
        setLast_deduct(response?.acct);
        setSaving(response?.acct);
        setRetirement(response?.acct);
        setLoanBalance(response?.acct);
      }
    } catch (error) {
      alert("Error fetching financial data: ");
    }
  }
}
