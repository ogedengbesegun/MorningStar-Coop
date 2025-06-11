import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router"; // Ensure you have expo-router installed
import React, { useRef, useState } from "react";
import { useUser } from "../../context/UserContext";

// import * as SecureStore from "expo-secure-store";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../styles/dstyles"; // Adjust the path as necessary

let freeman = "liberty"; // Variable to store the oracle number

export default function loginindex() {
  ///to get value of the compo
  const [oracle, setOracle] = useState("");
  const [pword, setPword] = useState("");

  ///make refrence to the compo
  const refOracle = useRef<TextInput>(null);
  const refPword = useRef<TextInput>(null);

  ///for Navigation btw screens
  const nav = useNavigation<any>(); // Ensure you have the correct type for navigation
  /////////////////////
  const { setUser } = useUser();

  return (
    <>
      {/* <ImageBackground
      source={require("../assets/images/react-logo.png")}
      resizeMode="contain"
      style={{  flex: 1, justifyContent: "center", alignItems: "center" }}
    > */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Text
          style={[
            styles.text,
            { textAlign: "center", marginTop: 8, backgroundColor: "white" },
          ]}
        >
          Welcome to Morning-Star Cooperative Society
        </Text>
        <ScrollView>
          <View
            // Img Src={require("../assets/images/react-logo.png")}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: "white",
            }}
          >
            <Image
              //https://reactnative.dev/img/tiny_logo.png
              // onLoad={() => dialog("Welcome to Egbe Alajeseku")}
              source={require("../../assets/images/d_img/money-graphic-3d.jpg")}
              // source={{ uri:"https://reactnative.dev/img/tiny_logo.png" }}
              style={{
                width: 320,
                height: 250,
                marginBottom: 10,
                marginTop: 5,
              }}
            />

            {/* login Details */}

            <View
              style={{
                borderWidth: 2,
                borderColor: "lightgreen",
                borderRadius: 5,
                padding: 5,
                width: 320,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  marginTop: 5,
                  marginBottom: 5,
                  color: "dark",
                  fontSize: 20,
                  textDecorationLine: "underline",
                  textAlign: "center",
                }}
              >
                Enter your login details here
              </Text>

              {/* oracle */}
              <Text
                style={[styles.smalltext, { marginBottom: 0, marginLeft: 30 }]}
              >
                Oracle Number
              </Text>
              <TextInput
                ref={refOracle}
                value={oracle}
                placeholder="Oracle Number"
                placeholderTextColor="grey"
                style={[styles.input, { marginTop: 0 }]}
                maxLength={10}
                keyboardType="numeric"
                onChangeText={setOracle}
              ></TextInput>

              {/* password */}
              <Text
                style={[
                  styles.smalltext,
                  { marginBottom: 0, marginTop: 5, marginLeft: 30 },
                ]}
              >
                Password
              </Text>
              <TextInput
                ref={refPword}
                value={pword}
                placeholder="Password"
                placeholderTextColor="grey"
                style={[styles.input, { marginTop: 0 }]}
                maxLength={15}
                secureTextEntry={true}
                keyboardType="default"
                onChangeText={setPword}
              ></TextInput>

              {/* button */}
              <TouchableOpacity
                style={[
                  styles.border,
                  {
                    backgroundColor: "white",
                    borderRadius: 10,
                    marginTop: 15,
                    width: 150,
                    marginRight: "auto",
                    marginLeft: "auto",
                  },
                ]}
                onPress={loginUser}
              >
                <Text
                  style={{
                    color: "green",
                    //   width: 200,
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>

              {/* Link */}
              <Text style={{ textAlign: "center", color: "grey" }}>OR</Text>

              <View
                style={{
                  alignSelf: "center",
                  marginTop: 10,
                  borderWidth: 2,
                  borderColor: "lightgreen",
                  padding: 8,
                  borderRadius: 5,
                  marginRight: "auto",
                  marginLeft: "auto",
                  marginBottom: 10,
                  backgroundColor: "lightgreen",
                }}
              >
                <Link href={"/(auth)/signup"}>
                  <Text style={{ textTransform: "capitalize" }}>
                    Create an Account
                  </Text>
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );

  async function loginUser() {
    try {
      const login = await fetch("http://192.168.43.201:8082/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oracle: oracle,
          pword: pword,
        }),
      });
      const response = await login.json();

      if (response.success === true) {
        alert(response.message);
        // Set the user context with the user's name and password
        setUser({
          name: response.user.full_name.split(" ")[1],
          oracle: response.user.oracle,
        });

        const timer = setTimeout(() => {
          nav.replace("(tabs)"); // Navigate to the tabs screen after login
        }, 3000);
        //////////////////

        refPword.current?.clear();
        refOracle.current?.clear();

        // refPword.current?.setState('');
        ////////set Oracle into Users device
        // await SecureStore.setItemAsync("myOracle", `${response.oracle}`);
      } else if (response.success === false) {
        alert(response.message);
        refPword.current?.clear();
        return;
      }
    } catch (error) {
      alert(`${error} Server NOT responding, try again later`);
    }
  }
  //////////

  ///////
}
// console.log("Freeman:", freeman); // Log the oracle number for debugging

// This function returns the stored oracle number (freeman)
// export async function transf(){
// This function is a placeholder for any transfer logic you might want to implement.
// It can be used to handle data transfer or other operations as needed.

// }
// Reasonable implementation of useRef for React Native/React context
// Exporting freeman to be used in other parts of the app
