import { useNavigation } from "@react-navigation/native";
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
import styles from "../../styles/dstyles"; // Adjust the path as necessary

export default function Index() {
  const nav = useNavigation() as any;

  //   useEffect(() => {
  // const login=()=>{
  //     nav.navigate('(auth)/signup')
  // }

  //   }, []);
  function login() {
    // useEffect(() => {
    nav.navigate("(tabs)");
    // }, []);
  }

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
            backgroundColor: "white",
          }}
        >
          <Text style={[styles.text, { textAlign: "center", marginTop: 5 }]}>
            Welcome to Morning-Star Cooperative Society
          </Text>

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
              marginBottom: 40,
            }}
          >
            <Text
              style={{
                marginTop: 5,
                color:"blue",
                fontSize: 20,
                textDecorationLine: "underline",
                textAlign: "center",
              }}
            >
              Enter your login details here
            </Text>

            {/* oracle */}
            <TextInput
              placeholder="Oracle Number"
              placeholderTextColor="grey"
              style={[styles.input, {}]}
              maxLength={10}
              keyboardType="numeric"
            ></TextInput>

            {/* password */}
            <TextInput
              tabIndex={0}
              placeholder="Password"
              placeholderTextColor="grey"
              style={[styles.input, {}]}
              maxLength={8}
              secureTextEntry={true}
              keyboardType="default"
            ></TextInput>

            {/* button */}
            <TouchableOpacity
              style={[
                styles.border,
                {
                  borderRadius: 10,
                  marginTop: 15,
                  width: 150,
                  marginRight: "auto",
                  marginLeft: "auto",
                },
              ]}
              onPress={() => login()}
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
            <Text style={{ textAlign: "center", color: "red" }}>OR</Text>
            <Link
              href={"/(auth)/signup"}
              style={[
                // styles.border,
                {
                  borderWidth: 1,
                  borderColor: "blue",
                  padding: 7,
                  borderRadius: 10,
                  width: 120,
                  textAlign: "center",
                  marginRight: "auto",
                  marginLeft: "auto",
                  marginBottom: 10,
                },
              ]}
            >
              <Text
                style={[
                  {
                    color: "grey",
                    fontWeight: "bold",
                  },
                ]}
              >
                SignUp
              </Text>
            </Link>
          </View>
          {/*  */}
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
