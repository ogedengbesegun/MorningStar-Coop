import React, { useRef, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../styles/dstyles";

export default function signup() {
  ///to set the value of the components
  const [fullname, setFullname] = useState("");
  const [oracleNum, setOracle] = useState("");
  const [pword, setPword] = useState("");
  const [cpword, setCpword] = useState("");

  /////to make refrence to the components
  const refname = useRef<TextInput>(null);
  const reforacle = useRef<TextInput>(null);
  const refpword = useRef<TextInput>(null);
  const refcpword = useRef<TextInput>(null);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../assets/images/favicon.png")}
            style={{ width: 150, height: 150, marginBottom: 10, marginTop: 20 }}
          />
          <Text
            style={[
              styles.text,
              {
                color: "green",
                // backgroundColor: "white",
                padding: 5,
                textAlign: "center",
              },
            ]}
          >
            Signup to Morning Star Cooperative Society
          </Text>
          <Text style={{ marginTop: 1, marginBottom: 7, fontSize: 20 }}>
            Please enter your details
          </Text>

          {/* sign up and touchableOpacity styling */}
          <View
            style={{
              borderWidth: 2,
              borderColor: "green",
              borderStyle: "dashed",
              width: 300,
              borderRadius: 7,
            }}
          >
            {/* <Text>signup</Text> */}
            <TextInput
              ref={refname}
              placeholder="Enter Full Name"
              style={styles.input}
              maxLength={50}
              keyboardType="default"
              value={fullname.toUpperCase()}
              onEndEditing={(e) => setFullname(e.nativeEvent.text.trim())}
              onChangeText={setFullname}
              onFocus={focusme}
            />

            <TextInput
              ref={reforacle}
              placeholder="Oracle Number"
              style={styles.input}
              maxLength={8}
              keyboardType="numeric"
              value={oracleNum}
              onChangeText={(text) => setOracle(text.trim())}
            />

            <TextInput
              placeholder="Password"
              style={styles.input}
              maxLength={8}
              autoCorrect={false}
              secureTextEntry={true}
              keyboardType="default"
              value={pword}
              onChangeText={(text) => setPword(text.trim())}
              ref={refpword}
            />

            {/*  */}
            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
              maxLength={8}
              autoCorrect={false}
              secureTextEntry={true}
              keyboardType="default"
              value={cpword}
              onChangeText={(text) => setCpword(text.trim())}
              onEndEditing={() => {
                same();
              }}
              ref={refcpword}
            />

            {/*  */}
            <TouchableOpacity
              style={[styles.border, { borderRadius: 50, marginTop: 30 }]}
              onPress={signup}
            >
              <Text
                style={{
                  color: "green",
                  width: 150,
                  textAlign: "center",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                // alignItems: "baseline",
                // alignContent:"flex-start",
                width: 250,
                padding: 10,
              }}
            >
              <Text style={{ color: "red" }}>Note:</Text>
              <Text style={{ color: "grey", textAlign: "center" }}>
                Please Non-Members are NOT allowed to input their Sign Up
                Details on this platform. Thanks
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
  // if the two pasword is same throw a msg
  function same() {
    // if (cpword === pword) {
    //
    // }
    if (pword === "" && cpword === "") {
      alert("Password field Cannot be Empty");
    } else if (cpword === pword) {
      alert("Your Password is Confirmed");
    } else {
      alert("Check, Password Must be the Same !!!");
      refpword.current?.clear();
      refcpword.current?.clear();
    }
  }

  //focus
  function focusme() {
    refname.current?.focus();
  }

  //   //capitalise

  async function signup(e: any) {
    try {
      const signing = await fetch("http://192.168.43.201:8081/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: fullname,
          oracleNum: oracleNum,
          pword: pword,
          cpword: cpword,
        }),
      });

      const response = await signing.json();
      if (!response) {
        e.preventDefault();
      }
    } catch (error) {
      alert(`Sorry not sending to server, ${error + fullname +" "+ oracleNum}`);
      refname.current?.clear();
      reforacle.current?.clear();
      refpword.current?.clear();
      refcpword.current?.clear();
    }
  }
}
