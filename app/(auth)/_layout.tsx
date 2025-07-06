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
        name="index"
        
        options={({navigation})=>({

          title: "Menu",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerShown:false,
          headerLeft:()=>(<TouchableOpacity
          style={{marginLeft:15}}>
            <Ionicons 
            name="menu" size={30} color='black'
            />

            
          </TouchableOpacity>)
          
        })}
      />
      {/* </menuStack.Navigator> */}

      <Stack.Screen
        name="callus"
        
        options={{
          title: "Call Us ☎️",
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
      
    </Stack>
  );
}
