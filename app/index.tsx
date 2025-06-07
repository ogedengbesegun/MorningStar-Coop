import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function index() {
  const myNavigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      //can also say
      // myNavigation.navigate("(auth)");
      myNavigation.replace("(auth)");
    }, 1000);

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);

  return (
    //     setTimeout(() => {
    //   <Redirect href="/(auth)/index" />;
    // }, 3000)
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "green",
      }}
    >
      <Text
        style={{
          color: "#fff",
          // padding: 10,
          textAlign: "center",
          fontSize: 45,
        }}
      >
        Welcome
      </Text>
      <Text
        style={{
          color: "#fff",
          padding: 10,
          textAlign: "center",
          fontSize: 32,
        }}
      >
        Morning Star
      </Text>
      <Text
        style={{
          color: "#fff",
          padding: 10,
          textAlign: "center",
          fontSize: 20,
        }}
      >
        Cooperative Society
      </Text>
    </View>
  );
}
