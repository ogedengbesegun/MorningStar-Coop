import styles from "@/styles/dstyles";
import {
  c_day,
  c_month,
  c_year,
  lastMonth,
  thisMonth,
} from "@/utilities/mydate";
import React, { useEffect, useRef, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useUser } from "../../context/UserContext";
import ReusableModal from "../../utilities/ReusableModal";

import Card from "../../utilities/card";

/////////////
export default function indextabs() {
  ///madal
  const [modalChangeVisible, setModalChangeVisible] = useState(false);
  const [modalChangeText, setmodalChangeText] = useState("");

  const refText = useRef<Text>(null);
  const [last_deduct, setLast_deduct] = useState<any | null>(null);
  const [this_deduct, setThis_deduct] = useState<any | null>(null);

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
            <Card style={[]}>
              <Text style={{ fontSize: 15, color: "grey" }}>
                Oracle Deduction as at: {lastMonth.toLocaleUpperCase()},{" "}
                {c_year} {last_deduct}
              </Text>
              <Text style={{ fontSize: 15, color: "green", paddingTop: 5 }}>
                Oracle Deduction as at: {thisMonth.toLocaleUpperCase()},{" "}
                {c_year} {this_deduct}
              </Text>
            </Card>

            {/* Modal */}
            {/* <ReusableModal
              visible={modalChangeVisible}
              onClose={() => setModalChangeVisible(false)}
            >
              <Text style={{ color: "grey", marginBottom: 5 }}>
                MorningStar Says...
              </Text>
              <Text>{modalChangeText}</Text>
            </ReusableModal> */}
            {/* MOdal End */}

            <Text style={{ fontSize: 20, color: "green", marginTop: 15 }}>
              Balances as at: {c_year}/{c_month}/{c_day}
            </Text>
            <Card style={[]}>
              <Text style={{ fontSize: 17, color: "green" }}>
                Savings: {saving}
              </Text>
            </Card>

            <Card style={[]}>
              <Text style={{ fontSize: 17, color: "green" }}>
                Retirement: {retirement}
              </Text>
            </Card>

            <Card style={[]}>
              <Text style={{ fontSize: 17, color: "green" }}>
                Loan Balance: {loanBalance}
              </Text>
            </Card>

            <Card style={[]}>
              <Text style={{ marginTop: 20 }}>
                {c_year} Dividends:
                <Text style={{ color: "red", fontSize: 15 }}> XXX</Text>
              </Text>
            </Card>

            <Text style={{ fontStyle: "italic", color: "grey", marginTop: 15 }}>
              These Financial Records are Carefully calculated for each member
              in accordance to remittances from the Oracle. However, if you have
              concerns about the figures displayed, please contact the Financial
              Secretary or any of the Exco Members.
              {"\n\n"}
              Our Members are treasures and we value all of your input for the
              advancement of this great cooperative Society.
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
    console.log(lastMonth);
    console.log(thisMonth);
    try {
      const financialData = await fetch(
        `https://morningstar-coop-backend.onrender.com/api/msc_monthly_2025`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newOracle: user?.oracle, // Ensure user.oracle is defined
            lastMonth: lastMonth,
            thisMonth: thisMonth,
          }),
        }
      );
      const response = await financialData.json();
      if (response.success === true) {
        ///////////
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
        setThis_deduct(
          Number(response?.acct2.deduction).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );
        ////////////
      } else {
        // setModalChangeVisible(true);
        // setmodalChangeText("Error fetching financial data:");
        // alert(response?.message);

        setLast_deduct(response?.acct);
        setThis_deduct(response?.acct2);
        setSaving(response?.acct);
        setRetirement(response?.acct);
        setLoanBalance(response?.acct);
      }
    } catch (error) {
      // setModalChangeVisible(true)
      // setmodalChangeText("Error fetching financial data: ");
      // alert("Error fetching financial data: ");
    }
  }
}
