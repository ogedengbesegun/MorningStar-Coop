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
          title: "Sign Up",
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
    </Stack>
  );
}
