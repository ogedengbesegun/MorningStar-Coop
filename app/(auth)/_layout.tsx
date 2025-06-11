import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: "green" } }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Login",
          headerTitleAlign: "center",
          headerTintColor: "white",
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
        name="users"
        options={{
          title: "New SignUp",
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
    </Stack>
  );
}
