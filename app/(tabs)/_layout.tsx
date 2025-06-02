import { Stack } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";
export default function RootLayout() {
  return (
    <Stack>
      <Header></Header>
      <Stack.Screen
        name="index"
        options={{
          title: "Billionaire's Club",
          headerStyle: { backgroundColor: "green" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: "Please, Signup",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "white" },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "green",
          },
        }}
        
        
      />
    </Stack>
    <Tab>
        <Tab.Screen
            name="(tabs)"
            options={{
            title: "MorningStar-Coop Society",
            headerShown: false,
            }}
        />
        <Tab.Screen
            name="settings"
            options={{
            title: "Settings",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: {
                fontWeight: "bold",
                color: "green",
            },
            }}
        />
    </Tab>
  );
}
