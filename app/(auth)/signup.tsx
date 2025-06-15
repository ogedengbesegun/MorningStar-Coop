import { useNavigation } from "@react-navigation/native";
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
import { API_URL } from "@env";


export default function signup() {
  ////navigation
  const nav = useNavigation() as any;

  ////////useEffect to navigate back to login page

  // nav.goBack("index");

  /////////////
  /////to set the button disabled after once click
  const [submitted, setSubmitted] = useState(false);

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
        Morning Star Cooperative Society
      </Text>
      <ScrollView>
        <View style={[styles.container, { backgroundColor: "white" }]}>
          {/* Imagebackground */}
          <ImageBackground
            source={require("../../assets/images/d_img/finance_calculator.jpg")}
            style={{ width: 300, height: 200, marginBottom: 5, marginTop: 15 }}
          />

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
              marginBottom: 15,
            }}
          >
            {/* <Text>signup</Text> */}
            <Text
              style={[
                styles.smalltext,
                { marginBottom: 0, marginLeft: 30, marginTop: 10 },
              ]}
            >
              Enter Full Name
            </Text>
            <TextInput
              ref={refname}
              placeholder="Enter Full Name"
              style={[
                styles.input,
                { marginTop: 0, textTransform: "capitalize",padding:10 },
              ]}
              maxLength={50}
              keyboardType="default"
              value={fullname}
              onEndEditing={(e) => setFullname(e.nativeEvent.text.trim())}
              onChangeText={setFullname}
              // onFocus={focusme}
              tabIndex={0}
            />

            {/*  */}
            <Text
              style={[
                styles.smalltext,
                { marginBottom: 0, marginLeft: 30, marginTop: 5 },
              ]}
            >
              Oracle Number
            </Text>
            <TextInput
              ref={reforacle}
              placeholder="Oracle Number"
              style={[styles.input, { marginTop: 0 ,padding:10 }]}
              maxLength={8}
              keyboardType="numeric"
              value={oracleNum}
              onChangeText={(text) => setOracle(text.trim())}
              tabIndex={0}
            />

            {/*  */}
            <Text
              style={[
                styles.smalltext,
                { marginBottom: 0, marginLeft: 30, marginTop: 5 },
              ]}
            >
              Password
            </Text>
            <TextInput
              placeholder="Password"
              style={[styles.input, { marginTop: 0,padding:10  }]}
              maxLength={15}
              autoCorrect={false}
              secureTextEntry={true}
              keyboardType="default"
              value={pword}
              onChangeText={(text) => setPword(text.trim())}
              ref={refpword}
              // onFocus={() => alert("15 Maximum characters allowed")}
            />

            {/*  */}
            <Text
              style={[
                styles.smalltext,
                { marginBottom: 0, marginLeft: 30, marginTop: 5 },
              ]}
            >
              Confirm Password
            </Text>
            <TextInput
              placeholder="Confirm Password"
              style={[styles.input, { marginTop: 0,padding:10  }]}
              maxLength={15}
              autoCorrect={false}
              secureTextEntry={true}
              keyboardType="default"
              value={cpword}
              onChangeText={(text) => setCpword(text.trim())}
              ref={refcpword}
            />

            {/*  */}
            <TouchableOpacity
              style={[
                styles.border,
                {
                  borderRadius: 50,
                  marginTop: 30,
                  backgroundColor: "lightgreen",
                },
              ]}
              onPress={handle_signup}
              disabled={submitted}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "darkgreen",
                  textAlign: "center",
                  marginRight: "auto",
                  marginLeft: "auto",
                  fontWeight: "bold",
                }}
              >
                Register Now
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

  //   //capitalise

  async function handle_signup(e: any) {
    // if (fullname === "" || oracleNum === "" || pword === "") {
    //   alert(`Sorry, Please Enter your Details`);
    //   e.preventDefault();
    // }

    if (submitted) return; // guard against double click
    setSubmitted(true); // lock the button

    try {
      const signing = await fetch(`https://morningstar-coop-backend.onrender.com/api/change/api/signup`, {
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
      if (response.success === true) {
        alert(response.message);

        setTimeout(() => {
          refname.current?.clear();
          reforacle.current?.clear();
          refpword.current?.clear();
          refcpword.current?.clear();
          setSubmitted(true);

          // back2login; // navigate back to login page

          ////////
          nav.goBack("index"); // Navigate to the login page
          return;
        }, 2000);
      } else if (response.success === false) {
        alert(response.message);
        // refpword.current?.clear();
        // refcpword.current?.clear();
        // nav.replace("signup");
      }
    } catch (error) {
      alert(`Sorry not sending to server, Check your Internet`);
      refname.current?.clear();
      reforacle.current?.clear();
      refpword.current?.clear();
      refcpword.current?.clear();
      nav.replace("signup");
    } finally {
      setSubmitted(false); // re-enable if you want retry
    }
  }
}
