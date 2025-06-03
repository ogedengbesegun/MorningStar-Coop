import { Link } from "expo-router"; // Ensure you have expo-router installed
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/dstyles"; // Adjust the path as necessary

export default function Index() {
 
  return (
    <>
      {/* <ImageBackground
      source={require("../assets/images/react-logo.png")}
      resizeMode="contain"
      style={{  flex: 1, justifyContent: "center", alignItems: "center" }}
    > */}
      <ScrollView>
        <View
          // Img Src={require("../assets/images/react-logo.png")}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Image
            // onLoad={() => dialog("Welcome to Egbe Alajeseku")}
            source={require("../assets/images/react-logo.png")}
            // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={{ width: 100, height: 100, marginBottom: 20, marginTop: 50 }}
          />

          <Text style={styles.text}>Welcome to Billionaire's Club</Text>

          {/* login Details */}

          <Text style={{ marginTop: 20, marginBottom: 7, fontSize: 20 }}>
            Enter your login details here
          </Text>

          {/* oracle */}
          <TextInput
            placeholder="Oracle Number"
            style={[styles.input, { marginBottom: 1, marginTop: 20 }]}
            maxLength={10}
            keyboardType="numeric"
          ></TextInput>

          {/* password */}
          <TextInput
            placeholder="Password"
            style={[styles.input, { marginTop: 5 }]}
            maxLength={8}
            secureTextEntry={true}
            keyboardType="default"
          ></TextInput>

          {/* button */}
          <TouchableOpacity
            style={[styles.border, { borderRadius: 100, marginTop: 20 }]}
            onPress={() => alert("Welcome to Billionaire's Club")}
          >
            <Text
              style={{
                color: "green",
                width: 250,
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>

          {/* Link */}
          <Link href={"/(tabs)/signup"} style={[styles.border, {borderRadius:10}]}>
            <Text style={[, { color: "red",}]}>  SignUp</Text>
          </Link>

          {/*  */}
          <Text
            style={{
              padding: 20,
              fontSize: 20,
              textAlign: "center",
              color: "green",
              opacity: 0.8,
            }}
          >
            1. loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          {/* <Br/> */}

          {/* History View */}
          <View style={{ backgroundColor: "green", borderRadius: 10 }}>
            <Text
              style={{
                fontSize: 23,
                textAlign: "center",
                paddingTop: 5,
                textDecorationLine: "underline",
                color: "white",
              }}
            >
              History of Egbe Alajeseku
            </Text>

            <Text
              style={{
                padding: 10,
                color: "white",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              {" "}
              2. loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>

          {/* </View> */}

          <View>
            <TouchableOpacity
              onPress={() => {
                setTimeout(() => {
                  time();
                }, 1000);
              }}
              style={styles.border}
            >
              <Text>Touch Me</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ImageBackground> */}
      </ScrollView>
    </>
  );
}

function time() {
  // You can implement your logic here, e.g., show a modal or alert
  alert("Welcome to Egbe Alajeseku");
}
