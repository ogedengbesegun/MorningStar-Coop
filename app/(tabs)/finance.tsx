import React, { useRef, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useUser } from "../../context/UserContext";
// import { FlatList } from "react-native-gesture-handler";
import styles from "@/styles/dstyles";
export default function finance() {
  const { user } = useUser();
  const mayRef = useRef();
  const [naira, setNaira] = useState(""); // State to hold the Naira amount
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
          <Text
            style={{
              textAlign: "center",

              fontSize: 20,
              fontStyle: "italic",
              fontWeight: "bold",
              textDecorationLine: "underline",
              // marginTop: 10,
              marginBottom: 5,
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            Loan Calculator
          </Text>
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

          
          <View style={{ display: "none" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderStyle: "solid",
                borderColor: "green",
                borderWidth: 2,
                borderRadius: 5,
                gap: 10,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: 15,
              }}
            >
              <Button title="January" color={"blue"} />
              <Button title="February" color={"gray"} />
              <Button title="March" color={"green"} />
              <Button title="April" color={"blue"} />
              <Button title="May" color={"gray"} />
              <Button title="June" color={"green"} />
              <Button title="July" color={"blue"} />
              <Button title="August" color={"gray"} />
              <Button title="September" color={"green"} />
              <Button title="October" color={"blue"} />
              <Button title="November" color={"gray"} />
              <Button title="December" color={"green"} />
            </View>

            <View
              style={{
                borderWidth: 2,
                borderColor: "blue",
                borderStyle: "dotted",
                borderRadius: 10,
                marginTop: 20,
                marginBottom: 20,
                marginRight: 10,
                marginLeft: 10,
              }}
            >
              <Text style={{ marginLeft: 30, fontSize: 15 }}>
                Oracle: {user?.oracle}
              </Text>

              <Text style={{ marginTop: 15, marginRight: 30, marginLeft: 30 }}>
                Balance Brought Down
              </Text>
              <TextInput
                // placeholder="Bal b/d"
                readOnly
                style={style.inputStyle}
              />

              {/*  */}
              <Text style={{ marginTop: 15, marginRight: 30, marginLeft: 30 }}>
                Savings
              </Text>
              <TextInput
                // placeholder="Bal b/d"
                readOnly
                style={style.inputStyle}
              />
              {/*  */}
              <Text style={{ marginTop: 15, marginRight: 30, marginLeft: 30 }}>
                Retirement
              </Text>
              <TextInput
                // placeholder=""
                readOnly
                style={style.inputStyle}
              />
              {/*  */}
              <Text style={{ marginTop: 15, marginRight: 30, marginLeft: 30 }}>
                Loan Repayment
              </Text>
              <TextInput
                // placeholder="Bal b/d"
                readOnly
                style={[style.inputStyle, { marginBottom: 20 }]}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
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
