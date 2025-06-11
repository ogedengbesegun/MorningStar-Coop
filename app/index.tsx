import { useNavigation } from "@react-navigation/native";
// import * as SecureStore from "expo-secure-store";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

import {
  GestureHandlerRootView,
  TapGestureHandler,
} from "react-native-gesture-handler";

export default function index() {
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

    // useEffect(() => {
    //   // } else {

    //   // }
    // }, []);
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
    <GestureHandlerRootView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <View style={{ width: 300 }}>
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
            size={100}
            color="white"
            style={{ backgroundColor: "green", borderRadius: 10 }}
          />
        </View>
      </TapGestureHandler>
     
    </GestureHandlerRootView>
    // </View>
  );
}
