import styles from "@/styles/dstyles";
import {
  c_day,
  c_month,
  c_year,
  lastMonth,
  thisMonth,
} from "@/utilities/mydate";
import { API_URL as ENV_API_URL } from "@env";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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
  const [last_Bankdeduct, setLast_Bankdeduct] = useState<any | null>(null);
  const [this_Bankdeduct, setThis_Bankdeduct] = useState<any | null>(null);
  /////////
  const [userName, setUserName] = useState<string | null>(null);
  const [userOracle, setUserOracle] = useState<string | null>(null);
  ////////////
  const [saving, setSaving] = useState<any | null>(null);
  const [savingStored, setSavingStored] = useState<any | null>(null);
  const [retirement, setRetirement] = useState<any | null>(null);
  const [loanBalance, setLoanBalance] = useState<any | null>(null);
  const [softloanBalance, setSoftloanBalance] = useState<any | null>(null);
  const [interestBalance, setInterestBalance] = useState<any | null>(null);
  /////

  ///////
  const [menuModal, setMenuModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const { user } = useUser(); ////using user
  const { setUser2 } = useUser(); ///setUser Value for usage again
  /////
  const nav = useNavigation<any>();
  const router = useRouter();
  //////////////////////////////

  useEffect(() => {
    if (user && user.oracle && lastMonth && thisMonth) {
      const timer = setTimeout(async () => {
        msc_index_finance();
      }, 100); // slight delay

      return () => clearTimeout(timer);
    }
    // console.log("New Month:", nMonth);
    // console.log(user?.oracle, "User Oracle");
  }),
    [user, lastMonth, thisMonth]; // dependencies

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

            <Card style={{ backgroundColor: "#e6fff2" }}>
              <Text style={{ fontSize: 17, color: "darkblack" }}>
                Oracle Deduction as at: {lastMonth.toLocaleUpperCase()},{" "}
                {c_year}
                {":"} {last_deduct}
              </Text>
              <Text style={{ fontSize: 17, color: "darkgreen", paddingTop: 5 }}>
                Oracle Deduction as at: {thisMonth.toLocaleUpperCase()},{" "}
                {c_year}
                {":"} {this_deduct}
              </Text>
            </Card>
            {/* bank self Payment */}
            <Card style={{ backgroundColor: "#e6e6ff" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#52a504f8",
                  borderColor: "black",
                }}
              >
                Bank Transactions
              </Text>
              <Text style={{ fontSize: 17, color: "dark" }}>
                Bank(Self_Payment) as at: {lastMonth.toLocaleUpperCase()},{" "}
                {c_year}
                {":"} {last_Bankdeduct}
              </Text>
              <Text style={{ fontSize: 17, color: "green", paddingTop: 5 }}>
                Bank(Self_Payment) as at: {thisMonth.toLocaleUpperCase()},{" "}
                {c_year}
                {":"} {this_Bankdeduct}
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
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "red",

                      // textAlign: "center",
                      padding: "auto",
                      margin: "auto",
                      // marginBottom:"auto"
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
                        href={"(tabs)"}
                        style={styles2.menuBtn}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>News</Text>
                      </Link>
                      <Link
                        href={"(tabs)"}
                        style={styles2.menuBtn}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>
                          Sales Advertisements
                        </Text>
                      </Link>
                      <Link
                        href={"(auth)/loanrequest"}
                        style={styles2.menuBtn}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>Apply for Loan</Text>
                      </Link>
                      <Link
                        href={"(tabs)"}
                        style={styles2.menuBtn}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>Photo Gallery</Text>
                      </Link>
                      <Link
                        href={"(tabs)"}
                        style={styles2.menuBtn}
                        onPress={() => {
                          setMenuModal(false);
                        }}
                      >
                        <Text style={styles2.menuBtnText}>AGM</Text>
                      </Link>
                      <Link
                        href={"(auth)/callus"}
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
              <Text style={{ fontSize: 15, color: "green" }}>
                Savings:
                <Text style={{ fontSize: 20, color: "green" }}> {saving}</Text>
              </Text>
            </Card>

            <Card style={[]}>
              <Text style={{ fontSize: 15, color: "green" }}>
                Retirement:
                <Text style={{ fontSize: 20, color: "green" }}>
                  {" "}
                  {retirement}
                </Text>
              </Text>
            </Card>

            <Card style={[]}>
              <Text style={{ fontSize: 15, color: "green" }}>
                Loan Balance:
                <Text style={{ fontSize: 20, color: "green" }}>
                  {" "}
                  {loanBalance}
                </Text>
              </Text>
            </Card>

            <Card style={[]}>
              <Text style={{ fontSize: 15, color: "green" }}>
                Soft Loan Balance:{" "}
                <Text style={{ fontSize: 20, color: "green" }}>
                  {" "}
                  {softloanBalance}
                </Text>
              </Text>
            </Card>

            <Card style={[]}>
              <Text style={{ fontSize: 15, color: "green" }}>
                Interest Balance:{" "}
                <Text style={{ fontSize: 20, color: "red" }}>
                  {interestBalance}
                </Text>
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
              <Card
                style={{
                  backgroundColor: "#fff",
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                }}
              >
                <Text
                  style={{
                    color: "red",
                  }}
                >
                  Note:{" "}
                  <Text style={{ marginTop: 0, color: "grey" }}>
                    This Page can only display Records NOT older than two
                    Months. Please, click on
                    <Text style={{ color: "green" }}> Finance Icon</Text>
                    <MaterialCommunityIcons
                      name="finance"
                      size={30}
                      color={"green"}
                    />{" "}
                    to see all Previous Records Older than two(2) months Thanks.{" "}
                  </Text>
                </Text>
              </Card>
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );

  async function msc_index_finance() {
    // await AsyncStorage.setItem("last", JSON.stringify(lastMonth));
    // await AsyncStorage.setItem("this", JSON.stringify(thisMonth));
    // const Last = await AsyncStorage.getItem("last");
    // const Thiss = await AsyncStorage.getItem("this");

    // Fetch financial data from the API
    // console.log(Oracle);
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
          yr: c_year.toString(), //for the current working year
        }),
      });
      const response = await financialData.json();
      /////////////////////////////////////////////

      const lastDeduct = response?.acct.deduction ;
      const newDeduct = response?.acct2.deduction
        ? response.acct2.deduction ?? "0"
        : response.acct2 ?? "0";

      const lastBank = response?.acct.bank ?? "0";
      const thisBank =
        response?.acct2.bank > "0"
          ? response?.acct.bank ?? "0"
          : response?.acct2.bank ?? "0";

      const savings =
        response?.acct2.savings > "0"
          ? response?.acct2.savings ?? "0"
          : response?.acct.savings ?? "0";

      //////
      const retirement =
        response?.acct2.retirement > "0"
          ? response?.acct2.retirement ?? "0"
          : response?.acct.retirement ?? "0";

      //////
      const loan_balance =
        response?.acct2.loan_balance > "0"
          ? response?.acct2.loan_balance ?? "0"
          : response?.acct.loan_balance ?? "0";
      ///////////

      const interest_balance =
        response?.acct2.interest_bal > "0"
          ? response?.acct2.interest_bal ?? "0"
          : response?.acct.interest_bal ?? "0";

      const soft_loan =
        response?.acct2.soft_loanBal > "0"
          ? response?.acct2.soft_loanBal ?? "0"
          : response?.acct.soft_loanBal ?? "0";

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
        setLast_Bankdeduct(
          Number(lastBank).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );
        //////
        setThis_Bankdeduct(
          Number(thisBank).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })
        );
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

        //////////////////
        setUser2({
          savings: savings,
          loanBalance: loan_balance,
          softloanBalance: soft_loan
        }); // savings
        // setUser2(softloanBalance); ///for usage
        // setUser2(loanBalance); // loan_balance
        /////////////////////////////////////
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
