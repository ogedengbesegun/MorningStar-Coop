import Hr from "@/utilities/hr";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card } from "react-native-paper";
import { useUser } from "../../context/UserContext";
// import { FlatList } from "react-native-gesture-handler";

export default function Finance() {
  const { user } = useUser();
  const mayRef = useRef();
  const [kiporacle, setkiporacle] = useState(""); // State to hold the Naira amount
  const [selectMonth, setSelectMonth] = useState("");
  const [selectYear, setSelectYear] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const [deduction, setDeduction] = useState("");
  const [savings, setSavings] = useState("");
  const [retirement, setRetirement] = useState("");
  const [loanBalance, setLoanBalance] = useState("");
  const [interestBalance, setInterestBalance] = useState("");
  const [softLoanBalance, setSoftLoanBalance] = useState("");
  //////////////
  useEffect(() => {
    const rimeber = async () => {
      if (user?.oracle) {
        await AsyncStorage.setItem("myoracle", user?.oracle);
        setkiporacle(user.oracle);
        // setkiporacle(AsyncStorage.getItem("myoracle"));
      } else {
        const savedOracle = await AsyncStorage.getItem("myoracle");
        if (savedOracle) {
          // const convertToNum = Number(savedOracle);

          setkiporacle(savedOracle);
        }
      }
    };

    rimeber();
  }, []);
  ///////////////////////
  useEffect(() => {
    if (selectMonth && selectYear && kiporacle) {
      monthlyDeduct();
    }
  }, [selectMonth, selectYear, kiporacle]);
  ////////////////////////////////////
  return (
    <>
      <ScrollView>
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../assets/images/d_img/finance_calculator.jpg")}
            style={{
              width: 350,
              alignSelf: "center",
              marginRight: 10,
              // marginLeft: 5,
              resizeMode: "contain",
            }}
          ></Image>
        </View>
        {/*the rest body */}
        <View style={[{ padding: 10, width: 350, alignSelf: "center" }]}>
          <Card>
            <Text
              style={{
                alignSelf: "center",

                fontSize: 17,
                fontStyle: "italic",
                fontWeight: "bold",
                textDecorationLine: "underline",
                marginTop: 10,
                marginBottom: 5,
                // marginRight: "auto",
                // marginLeft: "auto",
              }}
            >
              Records Monthly View
            </Text>
            <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
              {mydate}
            </Text>
            <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
              Only #3 Years Accessible
            </Text>
            <Picker
              selectedValue={selectYear}
              onValueChange={(itemValue) => setSelectYear(itemValue)}
              style={{
                width: 200,
                height: 55,
                alignSelf: "center",
                padding: 5,
                borderWidth: 1,
                borderColor: "#999",
                borderRadius: 5,
                borderStyle: "solid",
              }}
            >
              <Picker.Item label="Select Year" value="" />
              <Picker.Item
                label={(yrly - 2).toString()}
                value={(yrly - 2).toString()}
              />
              <Picker.Item
                label={(yrly - 1).toString()}
                value={(yrly - 1).toString()}
              />
              <Picker.Item label={yrly.toString()} value={yrly.toString()} />
            </Picker>
            {/* <TextInput
            value={naira}
            // keyboardType="numeric"
            // maxLength={10}
            placeholder="Enter Amount"
            onChangeText={(text) => {
              // const onlyNumbers = text.replace(/[^0-9]/g, ""); // keep digits only

              if ( !text) {
                // Invalid characters entered, so clear the formatted value
                setNaira("");
                // return;
              } else {
                // Format the number as Naira currency
                // const amount = Number(onlyNumbers);
                  const amount = Number(text.replace(/[^0-9]/g, ""));
                  setNaira(
                   amount.toLocaleString("en-NG", {
                          style: "currency",
                          currency: "NGN",
                        })
                      
                  );
                }
            }}
            // onEndEditing={(e) => {
            //   const value = e.nativeEvent.text;

            //   setNaira(
            //     Number(value).toLocaleString("en-NG", {
            //       style: "currency",
            //       currency: "NGN",
            //     })
            //   );
            // }}
            style={styles.input}
          /> */}

            <View style={{}}>
              <View
                style={{
                  flexDirection: "row",
                  // borderStyle: "solid",
                  // borderColor: "green",
                  // borderWidth: 2,
                  // borderRadius: 5,
                  gap: 5,
                  flexWrap: "wrap",
                  alignSelf: "center",
                  justifyContent: "space-evenly",
                  padding: 15,
                  width: 300,
                }}
              >
                <Button
                  title="January"
                  color={"blue"}
                  onPress={() => setSelectMonth("January")}
                />
                <Button
                  title="February"
                  color={"gray"}
                  onPress={() => setSelectMonth("February")}
                />
                <Button
                  title="March"
                  color={"green"}
                  onPress={() => setSelectMonth("March")}
                />
                <Button
                  title="April"
                  color={"blue"}
                  onPress={() => setSelectMonth("April")}
                />
                <Button
                  title="May"
                  color={"gray"}
                  onPress={() => setSelectMonth("May")}
                />
                <Button
                  title="June"
                  color={"green"}
                  onPress={() => setSelectMonth("June")}
                />
                <Button
                  title="July"
                  color={"blue"}
                  onPress={() => setSelectMonth("July")}
                />
                <Button
                  title="August"
                  color={"gray"}
                  onPress={() => setSelectMonth("August")}
                />
                <Button
                  title="September"
                  color={"green"}
                  onPress={() => setSelectMonth("September")}
                />
                <Button
                  title="October"
                  color={"blue"}
                  onPress={() => setSelectMonth("October")}
                />
                <Button
                  title="November"
                  color={"gray"}
                  onPress={() => setSelectMonth("November")}
                />
                <Button
                  title="December"
                  color={"green"}
                  onPress={() => setSelectMonth("December")}
                />
              </View>
              <Hr />
              {/* <Text style={{ marginTop: 1, textAlign: "self" }}>
                Deduction:
              </Text> */}
              <Text
                style={{
                  marginTop: 1,
                  textAlign: "center",
                  color: "grey",
                  fontStyle: "italic",
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                {userInfo}
              </Text>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: "blue",
                  borderStyle: "dotted",
                  borderRadius: 10,
                  marginTop: 2,
                  marginBottom: 20,
                  marginRight: 10,
                  marginLeft: 10,
                  padding: 10,

                  backgroundColor: "#f0f8ff",
                }}
              >
                <Text style={{ marginLeft: 10, fontSize: 15 }}>
                  Oracle: {kiporacle || "Loading..."}{" "}
                  <Text style={{ marginLeft: 0, color: "green", fontSize: 15 }}>
                    {selectMonth}
                    {""} {selectYear}
                  </Text>
                </Text>

                {/* <Text
                  style={{ marginTop: 15, marginRight: 30, marginLeft: 10 }}
                >
                  Balance Brought Down
                </Text> */}

                {/*  */}
                <Text
                  style={{ marginTop: 15, marginRight: 30, marginLeft: 10 }}
                >
                  Deduction: ₦
                  <Text
                    style={{ color: "green", fontWeight: "bold", fontSize: 20 }}
                  >
                    {" "}
                    {Number(deduction).toLocaleString("en-NG", {
                      // style: "currency",
                      currency: "NGN",
                    })}
                  </Text>
                </Text>
                <Text
                  style={{ marginTop: 15, marginRight: 30, marginLeft: 10 }}
                >
                  Savings: ₦
                  <Text
                    style={{ color: "green", fontWeight: "bold", fontSize: 20 }}
                  >
                    {" "}
                    {Number(savings).toLocaleString("en-NG", {
                      // style: "currency",
                      currency: "NGN",
                    })}
                  </Text>
                </Text>

                {/*  */}
                <Text
                  style={{ marginTop: 15, marginRight: 30, marginLeft: 10 }}
                >
                  Retirement: ₦
                  <Text
                    style={{ color: "green", fontWeight: "bold", fontSize: 20 }}
                  >
                    {" "}
                    {Number(retirement).toLocaleString("en-NG", {
                      // style: "currency",
                      currency: "NGN",
                    })}
                  </Text>
                </Text>

                {/*  */}
                <Text
                  style={{ marginTop: 15, marginRight: 30, marginLeft: 10 }}
                >
                  Loan Balance: ₦
                  <Text
                    style={{ color: "green", fontWeight: "bold", fontSize: 20 }}
                  >
                    {" "}
                    {Number(loanBalance).toLocaleString("en-NG", {
                      // style: "currency",
                      currency: "NGN",
                    })}
                  </Text>
                </Text>
                <Text
                  style={{ marginTop: 15, marginRight: 30, marginLeft: 10 }}
                >
                  Interest Balance: ₦
                  <Text
                    style={{ color: "red", fontWeight: "bold", fontSize: 20 }}
                  >
                    {" "}
                    {Number(interestBalance).toLocaleString("en-NG", {
                      // style: "currency",
                      currency: "NGN",
                    })}
                  </Text>
                </Text>
                <Text
                  style={{ marginTop: 15, marginRight: 30, marginLeft: 10 }}
                >
                  Soft Loan Balance: ₦
                   <Text
                    style={{ color: "green", fontWeight: "bold", fontSize: 20 }}
                  >
                    {" "}
                    {Number(softLoanBalance).toLocaleString("en-NG", {
                      // style: "currency",
                      currency: "NGN",
                    })}
                  </Text>
                </Text>
              </View>
              <Hr />
              <Text
                style={{
                  fontStyle: "italic",
                  color: "grey",
                  marginTop: 15,
                  padding: 15,
                }}
              >
                These Financial Records are Carefully calculated for each member
                in accordance to remittances from the Oracle. However, if you
                have concerns about the figures displayed, please contact the
                Financial Secretary or any of the Exco Members.
                {"\n\n"}
                Our Members are treasures and we value all of your input for the
                advancement of this great cooperative Society.
                {"\n\n"}
              </Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </>
  );

  async function monthlyDeduct() {
    const API_URL = "https://morningstar-coop-backend.onrender.com"; // Replace with your actual API URL
    try {
      const eachMonth = await fetch(`${API_URL}/api/monthly`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          year: selectYear,
          month: selectMonth.toLowerCase(),
          kiporacle: kiporacle,
        }),
      });
      const response = await eachMonth.json();
      if (response.success === true) {
        setDeduction(response.data.deduction);
        setSavings(response.data.savings);
        setRetirement(response.data.retirement);
        setLoanBalance(response.data.loan_balance);
        setInterestBalance(response.data.interest_bal);
        setSoftLoanBalance(response.data.soft_loanBal);
        setUserInfo(response.message);
      } else {
        setUserInfo(response.message);
        setDeduction("");
        setSavings("");
        setRetirement("");
        setLoanBalance("");
        setInterestBalance("");
        setSoftLoanBalance("");
      }
    } catch (error) {}
  }
}

//styles
const style = StyleSheet.create({
  inputStyle: {
    backgroundColor: "white",

    // width: 300,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 5,
  },
});
/////////////////////
const cDate = new Date();
const mydate = cDate.toLocaleDateString("en-NG", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
const yrly = cDate.getFullYear();
/////////////////////////////
const monthlyRecord = [
  { label: "January", key: "january" },
  { label: "February", key: "february" },
  { label: "March", key: "march" },
  { label: "April", key: "april" },
  { label: "May", key: "may" },
  { label: "June", key: "june" },
  { label: "July", key: "july" },
  { label: "August", key: "august" },
  { label: "September", key: "september" },
  { label: "October", key: "october" },
  { label: "November", key: "november" },
  { label: "December", key: "december" },
];
