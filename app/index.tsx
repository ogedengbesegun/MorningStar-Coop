import { useNavigation } from "@react-navigation/native";
// import * as SecureStore from "expo-secure-store";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { c_month,thisMonth,lastMonth,c_year,c_day } from "@/utilities/mydate";
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from "react-native-gesture-handler";

export default function index() {
  //for
  const myNavigation = useNavigation<any>();

  //////to auto get user's Oracle Number
  const onSingleTap = () => {
    // console.log("Tapped!");
    const timer = setTimeout(() => {
      //can also say
      // myNavigation.navigate("(auth)");
      myNavigation.replace("(auth)");
    }, 400);
    return () => clearTimeout(timer); // cleanup if component unmounts
  };

  return (
    //     setTimeout(() => {
    //   <Redirect href="/(auth)/index" />;
    // }, 3000)
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     paddingLeft: 10,
    //     paddingRight: 10,
    //     backgroundColor: "lightgreen",
    //   }}
    // >
    <>
      {/* <View></View> */}
      {/* <ScrollView> */}
        <GestureHandlerRootView
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgreen",
          }}
        >
          <View style={{ width: 300 }}>
            {/* <View>
              <Image
                source={require("../assets/images/d_img/Mr. Raji President.jpg")}
                style={{
                  // width: "auto",
                  // height:300,
                  marginRight: "auto",
                  marginLeft: "auto",
                  marginTop: 15,
                  borderRadius: 20,
                }}
              />
              <Text  style={{fontSize:25,fontFamily:"time new roma"}}>Mr. Raji</Text>
              <Text style={{fontSize:30,fontFamily:"time new roma"}}>President</Text>
            </View> */}
            <Text
              style={{
                fontSize: 35,
                paddingLeft: 20,
                paddingRight: 20,
                textAlign: "center",
                color: "grey",
                fontWeight: "bold",
              }}
            >
              {" "}
              Welcome
            </Text>
            <Text
              style={{
                fontSize: 40,
                color: "green",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {" "}
              Morning Star Cooperative Society
            </Text>
          </View>

          <TapGestureHandler onActivated={onSingleTap}>
            {/* <Text >
          👆 Tap Me
        </Text> */}
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "red", marginTop: 20 }}>
                Tap home to Continue
              </Text>
              <MaterialIcons
                name="home"
                size={60}
                color="white"
                style={{
                  backgroundColor: "green",
                  borderRadius: 10,
                  marginTop: 2,
                }}
              />
            </View>
          </TapGestureHandler>
        </GestureHandlerRootView>
      {/* </ScrollView> */}
    </>
    // </View>
  );
}
