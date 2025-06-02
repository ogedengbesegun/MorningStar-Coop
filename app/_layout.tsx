import { Stack } from "expo-router";
import { ScreenStackHeaderSubview } from "react-native-screens";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="index"
      options={{
        title: "MorningStar-Coop Society",
        
        headerStyle: { backgroundColor: "green" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
    <Stack.Screen name="(tabs)" options={{headerShown:false}} />
    <Stack.Screen name="settings" />
  </Stack>;
}
