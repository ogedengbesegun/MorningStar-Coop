import styles from "@/styles/dstyles";
import {
  c_day,
  c_month,
  c_year,
  lastMonth,
  thisMonth,
} from "@/utilities/mydate";
import { API_URL as ENV_API_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useUser } from "../../context/UserContext";
import Card from "../../utilities/card";

/////////////
export default function indextabs() {
  const API_URL1 = "http://192.168.43.201:10000";
  const API_URL =
    ENV_API_URL || "https://morningstar-coop-backend.onrender.com";

  const refText = useRef<Text>(null);
  const [last_deduct, setLast_deduct] = useState<any | null>(null);
  const [this_deduct, setThis_deduct] = useState<any | null>(null);

  const [saving, setSaving] = useState<any | null>(null);
  const [retirement, setRetirement] = useState<any | null>(null);
  const [loanBalance, setLoanBalance] = useState<any | null>(null);
  const [softloanBalance, setSoftloanBalance] = useState<any | null>(null);
  const [interestBalance, setInterestBalance] = useState<any | null>(null);
  /////

  ///////
  const [menuModal, setMenuModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const { user } = useUser();
  /////
  const nav = useNavigation<any>();
  const router = useRouter();
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
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          borderBottomWidth: 1,
          borderBottomColor: "grey",
        }}
      >
        <View style={{ width: "20%" }}>
          <TouchableOpacity
            style={{
              margin: 5,
              backgroundColor: "green",
              padding: 5,
              borderRadius: 5,
            }}
            onPress={() => setMenuModal(true)}
          >
            {/* <Card style={[styles]}> */}
            <Text
              style={{
                fontSize: 13,
                fontWeight: "bold",
                lineHeight: 30,
                color: "white",
                textAlign: "center",
              }}
            >
              Menu
            </Text>

            {/* </Card> */}
          </TouchableOpacity>
          {/* <Modal
            visible={menuModal}
            // on={() => setMenuModal(false)}
          >
            {/* <Link href="/some-path" > */}
          {/* <Text>Home</Text> */}
          {/* </Link> */}
          {/* </Modal> */}
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            backgroundColor: "white",
            width: "80%",
            // display: "flex",
            // flexDirection: "row",
            alignItems: "baseline",
            // justifyContent: "flex-start",
          }}
        >
          <Text style={{ fontSize: 15, marginTop: 16, color: "green" }}>
            {" "}
            Welcome,{" "}
            <Text
              style={{
                fontSize: 22,
              }}
            >
              {user?.name ?? "Guest"}
            </Text>
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={[styles.container, { backgroundColor: "white" }]}>
          {/*  */}
          <Image
            source={require("../../assets/images/d_img/money-graphic-3d.jpg")}
            style={{ width: 320, height: 250, backgroundColor: "green" }}
          />
          <View style={{ width: 300 }}>
            <Text style={{ fontSize: 23, color: "grey", fontWeight: "bold" }}>
              {user?.oracle}
            </Text>
            <Card style={[]}>
              <Text style={{ fontSize: 17, color: "black" }}>
                Oracle Deduction as at: {lastMonth.toLocaleUpperCase()},{" "}
                {c_year}
                {":"} {last_deduct}
              </Text>
              <Text style={{ fontSize: 17, color: "green", paddingTop: 5 }}>
                Oracle Deduction as at: {thisMonth.toLocaleUpperCase()},{" "}
                {c_year}
                {":"} {this_deduct}
              </Text>
            </Card>

            {/* modal */}
            <Modal
              visible={menuModal}
              transparent
              animationType="slide"
              onRequestClose={() => setMenuModal(true)}
            >
              <View style={[styles2.overlay]}>
                <TouchableOpacity
                  style={{
                    alignSelf: "flex-end",
                    marginRight: 30,
                    padding: 5,
                    marginTop: 10,
                    backgroundColor: "white",
                    borderRadius: 40,
                    height: 40,
                    width: 40,
                  }}
                  onPress={() => setMenuModal(false)}
                >
                  <Text
                    style={{
                      // fontSize: 10,
                      fontWeight: "bold",
                      color: "red",

                      textAlign: "center",
                      padding: 5,
                    }}
                  >
                    X
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    backgroundColor: "white",
                    width: 300,
                    height: "80%",
                    marginTop: 10,
                    marginRight: "auto",
                    marginLeft: "auto",

                    borderRadius: 10,
                  }}
                >
                  <ScrollView>
                    <View style={{ marginLeft: 20, marginTop: 20 }}>
                      <Modal
                        visible={confirmModal}
                        transparent
                        animationType="slide"
                        onRequestClose={() => setConfirmModal(true)}
                        // style={{
                        //   backgroundColor: "white",
                        //   width: 300,
                        // }}
                      >
                        <View
                          style={{
                            backgroundColor: "lightgreen",
                            width: 250,
                            marginTop: 280,
                            marginRight: "auto",
                            marginLeft: "auto",
                            borderRadius: 10,
                          }}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              marginTop: 15,
                              marginBottom: 2,

                              color: "grey",
                            }}
                          >
                            Morning Star Says...
                          </Text>
                          <Text
                            style={{
                              textAlign: "center",
                              marginTop: 5,
                              marginBottom: 15,
                              fontWeight: "bold",
                            }}
                          >
                            Are You Sure To Logout?
                          </Text>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginRight: "auto",
                              marginLeft: "auto",
                              gap: 10,
                              marginBottom: 10,
                            }}
                          >
                            <TouchableOpacity
                              style={{
                                padding: 5,
                                borderColor: "red",
                                borderStyle: "solid",
                                borderWidth: 2,
                                borderRadius: 5,
                                width: 80,
                                backgroundColor: "white",
                              }}
                              onPress={() => {
                                router.replace("/login");
                              }}
                            >
                              <Text
                                style={{
                                  color: "black",
                                  textAlign: "center",
                                  fontWeight: "bold",
                                }}
                              >
                                Yes
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                padding: 5,
                                borderColor: "green",
                                borderStyle: "solid",
                                borderWidth: 2,
                                borderRadius: 5,
                                width: 80,
                                backgroundColor: "white",
                              }}
                              onPress={() => {
                                setMenuModal(false);
                                setConfirmModal(false);
                              }}
                            >
                              <Text
                                style={{
                                  color: "black",
                                  textAlign: "center",
                                  fontWeight: "bold",
                                }}
                              >
                                No
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Modal>

                      <Link
                        href={"(tabs)/team"}
                        style={styles2.menuBtnTop}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>Meet Our Team</Text>
                      </Link>
                      <Link
                        href={"(tabs)/finance"}
                        style={styles2.menuBtn}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>
                          Personal Finance
                        </Text>
                      </Link>

                      <Link
                        href={"#"}
                        style={styles2.menuBtn}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>News</Text>
                      </Link>
                      <Link
                        href={"#"}
                        style={styles2.menuBtn}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>Advertisements</Text>
                      </Link>
                      <Link
                        href={"#"}
                        style={styles2.menuBtn}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>Apply for Loan</Text>
                      </Link>
                      <Link
                        href={"#"}
                        style={styles2.menuBtn}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>Photo Gallery</Text>
                      </Link>
                      <Link
                        href={"#"}
                        style={styles2.menuBtn}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>AGM</Text>
                      </Link>
                      <Link
                        href={"#"}
                        style={styles2.menuBtn}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>Suggestion</Text>
                      </Link>
                      <TouchableOpacity
                        style={styles2.menuBtnBottom}
                        onPress={() => {
                          // setMenuModal(false);
                          setConfirmModal(true);
                        }}
                      >
                        <Text style={[{ color: "red" }, styles2.menuBtnText]}>
                          Logout
                        </Text>
                      </TouchableOpacity>
                      {/*  */}

                      {/* ModalcloseBtn */}
                      {/* <View style={{ flex: 1, marginTop: 60 }}> */}

                      {/* </View> */}
                    </View>
                  </ScrollView>
                </View>
              </View>
            </Modal>
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

            <Text
              style={{
                fontSize: 20,
                color: "green",
                marginTop: 15,
                textAlign: "center",
              }}
            >
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
              <Text style={{ fontSize: 16, color: "green" }}>
                Soft Loan Balance:{" "}
                <Text style={{ fontSize: 17, color: "green" }}>
                  {softloanBalance}
                </Text>
              </Text>
            </Card>

            <Card style={[]}>
              <Text style={{ fontSize: 17, color: "red" }}>
                Interest Balance: {interestBalance}
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
    // console.log(lastMonth);
    // console.log(thisMonth);
    try {
      const financialData = await fetch(`${API_URL}/api/msc_monthly_2025`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newOracle: user?.oracle, // Ensure user.oracle is defined
          lastMonth: lastMonth,
          thisMonth: thisMonth,
        }),
      });
      const response = await financialData.json();
      /////////////////////////////////////////////

      const lastDeduct = response?.acct.deduction;
      const newDeduct = response?.acct2.deduction
        ? response.acct2.deduction
        : response.acct2 ?? "0";

      const savings =
        response?.acct2.savings > "0"
          ? response?.acct2.savings
          : response?.acct.savings ?? "0";

      //////
      const retirement =
        response?.acct2.retirement > "0"
          ? response?.acct2.retirement
          : response?.acct.retirement ?? "0";

      //////
      const loan_balance =
        response?.acct2.loan_balance > "0"
          ? response?.acct2.loan_balance
          : response?.acct.loan_balance ?? "0";
      ///////////

      // ? response?.acct2.soft_loanBal
      // : response?.acct.soft_loanBal ?? "500";

      const interest_balance =
        response?.acct2.interest_bal > "0"
          ? response?.acct2.interest_bal
          : response?.acct.interest_bal;

      const soft_loan =
        response?.acct2.soft_loanBal > "0"
          ? response?.acct2.soft_loanBal
          : response?.acct.soft_loanBal;

      // console.log(soft_loan);

      if (response.success === true) {
        ///////////

        ////////
        setLast_deduct(
          Number(lastDeduct).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );

        ///////
        setThis_deduct(
          Number(newDeduct).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );
        ////////////
        ////////
        setSaving(
          Number(savings).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );
        setRetirement(
          Number(retirement).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );
        setLoanBalance(
          Number(loan_balance).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );

        ///////
        setSoftloanBalance(
          Number(soft_loan).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );
        //////
        //////
        setInterestBalance(
          Number(interest_balance).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );
      } else {
        const Tonum = Number("0").toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
        });
        // setModalChangeVisible(true);
        // setmodalChangeText("Error fetching financial data:");
        // alert(response?.message);
        setLast_deduct(Tonum);
        setThis_deduct(Tonum);
        setSaving(Tonum);
        setRetirement(Tonum);
        setLoanBalance(Tonum);
      }
    } catch (error) {
      // setModalChangeVisible(true)
      // setmodalChangeText("Error fetching financial data: ");
      // alert("Error fetching financial data: ");
    }
  }
}

/////
const styles2 = StyleSheet.create({
  // container: { marginTop: 100, padding: 20 },

  overlay: {
    // flex: 1,
    // justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginTop: 60,
    height: "100%",
  },

  menuBtnTop: {
    padding: 15,
    backgroundColor: "white",
    borderColor: "green",
    borderStyle: "solid",
    borderWidth: 1,
    marginRight: 50,
    marginBottom: 5,
    borderRadius: 10,
    elevation: 5,
  },
  menuBtn: {
    padding: 15,
    backgroundColor: "white",
    borderColor: "green",
    borderStyle: "solid",
    borderWidth: 1,
    marginRight: 50,
    borderRadius: 10,
    marginBottom: 5,
    elevation: 5,
  },
  menuBtnBottom: {
    padding: 15,
    backgroundColor: "white",
    borderColor: "green",
    borderStyle: "solid",
    borderWidth: 1,
    marginRight: 50,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
  },
  menuBtnText: {
    fontWeight: "bold",
  },
});
