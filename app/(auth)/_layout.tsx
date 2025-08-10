import { Stack } from "expo-router";
import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const menuStack=createStackNavigator();
export default function _layout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: "green" } }}>
      {/* <menuStack.Navigator> */}
      <Stack.Screen
        name="login"
        
        options={{

          title: "Menu",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerShown:false,
          // 
          
        }}
      />
      {/* </menuStack.Navigator> */}

      <Stack.Screen
        name="callus"
        
        options={{
          title: "Call or Chat Us ☎️",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerShown:true,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: "Create an Account",
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />

      <Stack.Screen
        name="adminlogin"
        options={{
          title: "MorningStar Admin Login",
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="dashboard"
        options={{
          title: "Admin Dashboard",
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="joinus"
        options={{
          title: "Membership Form ",
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
      {/* <Stack.Screen
        name=""
        options={{
          title: "Membership Form ",
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
       */}
    </Stack>
  );
}
