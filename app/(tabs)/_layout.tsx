// import { Ionicons } from "@expo/vector-icons";
// import { Tabs } from "expo-router";
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// export default function RootLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: true,
//         headerStyle: {
//           backgroundColor: "green",
//         },
//         headerTintColor: "white",
//         headerTitleAlign: "center",
//         // headerTitle: "Alajeseku",
//         tabBarShowLabel: true,
//         tabBarActiveTintColor: "green",
//         tabBarLabelStyle: {
//           color: "white",
//           marginBottom: 5,
//         },
//         tabBarStyle: {
//           backgroundColor: "green",
//           padding: 2,
//           marginTop: 5,
//           marginBottom: 5,
//         },
//         // tabBarBackground:'green'
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ size, color }) => (
//             <Ionicons name="home" size={size} style={{ color: "white" }} />
//           ),
//           headerTitle: "Home",
//         }}
//       />

//       <Tabs.Screen
//         name="team"
//         options={{
//           title: "Team",
//           tabBarIcon: ({ size, color }) => (
//             <Ionicons name="infinite" size={size} style={{ color: "white" }} />
//           ),
//         }}
//       />
//       <Tabs.Screen name="finance" options={{ title: "Finance" ,
//         tabBarIcon: ({ size, color }) => (
//             <MaterialCommunityIcons name="finance" size={size} style={{ color: "white" }} />
//           ),
//       }} />
//     </Tabs>
//   );
// }

// // <Stack>
// //   <Stack.Screen
// //     name="index"
// //     options={{
// //       title: "Billionaire's Club",
// //       headerStyle: { backgroundColor: "green" },
// //       headerTintColor: "#fff",
// //       headerTitleAlign: "center",
// //       headerTitleStyle: {
// //         fontWeight: "bold",
// //       },
// //     }}
// //   />
// //   <Stack.Screen
// //     name="signup"
// //     options={{
// //       title: "Please, Signup",
// //       headerTitleAlign: "center",
// //       headerStyle: { backgroundColor: "white" },
// //       headerTitleStyle: {
// //         fontWeight: "bold",
// //         color: "green",
// //       },
// //     }}

// //   />
// // </Stack>

import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "green" },
        headerTintColor: "white",
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#ccc",
        tabBarLabelStyle: { marginBottom: 5 },
        tabBarStyle: {
          backgroundColor: "green",
          padding: 2,
          marginTop: 5,
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerTitle: "Home",
         
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          title: "Meet Our Team like No Other",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="infinite" size={size} color={color} />
          ),
        headerTintColor:"gold",
        headerTitleStyle:{
          fontSize:20
        }
        }}
      />
      <Tabs.Screen
        name="finance"
        options={{
          title: "Finance",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="finance" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
