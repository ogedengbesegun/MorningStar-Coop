import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router"; // Ensure you have expo-router installed
import React, { useRef, useState } from "react";
import { useUser } from "../../context/UserContext";

import { API_URL } from "@env";
import { lastMonth } from "../../utilities/mydate";
// import Constants from 'expo-constants';
// const API_URL = Constants.expoConfig?.extra?.API_URL;
//

// import * as SecureStore from "expo-secure-store";
// import Constants from "expo-constants";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../styles/dstyles"; // Adjust the path as necessary

// useEffect(()=>{
// FetchExample
// },[])

export default function loginindex() {
  const [visible, setVisible] = React.useState(false);

  ///to get value of the compo
  const [oracle, setOracle] = useState("");
  const [pword, setPword] = useState("");

  ////refrence the new textInput comp
  const refOracle = useRef<TextInput>(null);
  const refPword = useRef<TextInput>(null);
  /////
  /////////
  //to get value for forgot comp
  const [oraclededuct, setOraclededuct] = useState("");
  const [pwordn, setPwordn] = useState("");

  ///make refrence to the compo
  const refOraclededuct = useRef<TextInput>(null);
  const refPwordn = useRef<TextInput>(null);
  /////
  const URL_PRO = `https://morningstar-coop-backend.onrender.com`;

  ///for Navigation btw screens
  const nav = useNavigation<any>(); // Ensure you have the correct type for navigation
  /////////////////////
  const { setUser } = useUser();

  // const server = process.env.SERVER_API as string | null;

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
            { textAlign: "center", marginTop: 0, backgroundColor: "white" },
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
                style={[styles.input, { marginTop: 0, padding: 10 }]}
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
                style={[styles.input, { marginTop: 0, padding: 10 }]}
                maxLength={15}
                secureTextEntry={true}
                keyboardType="default"
                onChangeText={setPword}
              ></TextInput>
              {/* Dialog Text View for info */}
              {/* <Text style={{fontSize:15,fontStyle:"italic"}}></Text> */}
              <Modal visible={visible}>
                <View>
                  <Text>Loading</Text>
                </View>
              </Modal>
              {/* TouchableOpacity */}
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
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <Text style={{ textAlign: "center", color: "grey" }}>OR </Text>
                <TouchableOpacity onPress={() => setVisible(true)}>
                  <Text style={{ color: "red" }}>forgot password?</Text>
                </TouchableOpacity>

                <Modal
                  visible={visible}
                  transparent
                  animationType="slide"
                  onRequestClose={() => setVisible(false)}
                >
                  <View style={[styles2.overlay]}>
                    <View
                      style={[
                        styles2.dialog,
                        { width: 300, alignSelf: "center" },
                      ]}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: "center",
                          color: "green",
                          textDecorationLine: "underline",
                        }}
                      >
                        Change your Password Instructions?
                      </Text>
                      <Text
                        style={{
                          // width: 350,
                          textAlign: "left",
                          color: "grey",
                          marginRight: "auto",
                          marginLeft: "auto",
                          fontSize: 16,
                        }}
                      >
                        Enter Oracle Number with last Month Deduction without
                        space e.g 141516,200000 Oracle Number e.g 141516 and
                        last Month Deduction e.g 200000 Note: No space fullstop
                        is allowed but put comma as separator.
                      </Text>
                      <TextInput
                        ref={refOraclededuct}
                        value={oraclededuct}
                        placeholder="Oracle with last deduction "
                        keyboardType="numeric"
                        onChangeText={(text) => setOraclededuct(text.trim())}
                        style={[
                          styles.input,
                          {
                            fontSize: 15,
                            width: "100%",
                            padding: 13,
                           
                          },
                        ]}
                      ></TextInput>
                      <TextInput
                      
                        ref={refPwordn}
                        value={pwordn}
                        placeholder="Enter New Password"
                        secureTextEntry={true}
                        maxLength={15}
                        keyboardType="default"
                        style={[
                          styles.input,
                          {
                            fontSize: 15,
                            width: "100%",
                            padding: 13,
                           
                          },
                        ]}
                        onChangeText={(text) => setPwordn(text.trim())}
                      ></TextInput>
                      {/* <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          alignItems: "center",
                          alignSelf: "center",
                          marginTop: 10,
                          gap: 10,
                          width: 100,
                          justifyContent: "center",
                        }}
                      > */}
                      <TouchableOpacity
                        onPress={changepword}
                        style={[
                          {
                            padding: 13,
                            backgroundColor: "lightgreen",
                            borderRadius: 5,
                            marginTop: 15,

                            // marginRight: "auto",
                            // marginLeft: "auto",
                          },
                        ]}
                      >
                        <Text
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "600",
                          }}
                        >
                          Change Password
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setVisible(false)}
                        style={[
                          {
                            padding: 13,
                            backgroundColor: "lightblue",
                            borderRadius: 5,
                            marginTop: 5,
                            // width: 100,
                            // marginRight: "auto",
                            // marginLeft: "auto",
                          },
                        ]}
                      >
                        <Text
                          style={{
                            color: "red",
                            textAlign: "center",
                            fontWeight: "600",
                          }}
                        >
                          Close
                        </Text>
                      </TouchableOpacity>
                      {/* </View> */}
                    </View>
                  </View>
                </Modal>
              </View>
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
          {/*  */}

          {/*  */}
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );

  /////////////////
  async function loginUser() {
    try {
      console.log(`https://morningstar-coop-backend.onrender.com/api/login`);

      const login = await fetch(
        `https://morningstar-coop-backend.onrender.com/api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            oracle: oracle,
            pword: pword,
          }),
        }
      );
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
  ///change pword function
  async function changepword() {
    console.log(API_URL);
    try {
      const changep = await fetch(
        `https://morningstar-coop-backend.onrender.com/api/change`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lastMonth: lastMonth,
            oraclededuct: oraclededuct,
            pwordn: pwordn,
          }),
        }
      );
      const response = await changep.json();
      if (response?.success === true) {
        alert(response?.message);
        /////
        refOraclededuct.current?.clear();
        refPwordn.current?.clear();
      } else if (response?.success === false) {
        alert(response?.message);
        /////
        refOraclededuct.current?.clear();
        refPwordn.current?.clear();
      }
    } catch (error) {
      alert("Check  your Internet Connection");
    }
  }
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
const styles2 = StyleSheet.create({
  container: { marginTop: 100, padding: 20 },

  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  dialog: {
    margin: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
// This is a simple modal dialog component that can be used to confirm actions or display messages.
