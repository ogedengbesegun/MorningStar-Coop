import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "green",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
        // headerTitle: "Alajeseku",
        tabBarShowLabel: true,
        tabBarActiveTintColor: "green",
        tabBarLabelStyle: {
          color: "white",
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: "green",
          padding: 2,
          marginTop: 5,
          marginBottom: 5,
        },
        // tabBarBackground:'green'
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart" size={size} style={{ color: "white" }} />
          ),
          headerTitle: "Home",
        }}
      />

      <Tabs.Screen
        name="signup"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="bookmarks" size={size} style={{ color: "white" }} />
          ),
        }}
      />
    </Tabs>
  );
}

// <Stack>
//   <Stack.Screen
//     name="index"
//     options={{
//       title: "Billionaire's Club",
//       headerStyle: { backgroundColor: "green" },
//       headerTintColor: "#fff",
//       headerTitleAlign: "center",
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     }}
//   />
//   <Stack.Screen
//     name="signup"
//     options={{
//       title: "Please, Signup",
//       headerTitleAlign: "center",
//       headerStyle: { backgroundColor: "white" },
//       headerTitleStyle: {
//         fontWeight: "bold",
//         color: "green",
//       },
//     }}

//   />
// </Stack>
