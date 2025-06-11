import { Stack } from "expo-router";
import { UserProvider } from "../context/UserContext"; // Adjust the path as necessary

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Morning Star-Coop app @2025",

            headerStyle: { backgroundColor: "green" },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}
