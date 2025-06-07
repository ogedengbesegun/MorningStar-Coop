import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "MorningStar-Coop app",

          headerStyle: { backgroundColor: "green" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            
          },
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}
