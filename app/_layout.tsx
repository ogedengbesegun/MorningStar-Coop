// import { Stack } from "expo-router";
// import { UserProvider } from "../context/UserContext"; // Adjust the path as necessary

// export default function RootLayout() {
//   type Props = {
//     date: number;
//   };
//   const date = new Date().getFullYear();
//   return (
//     <UserProvider>
//       <Stack>
//         <Stack.Screen
//           name="index"
//           options={{
//             title: `Morning Star-Coop app ©` + date,

//             headerStyle: { backgroundColor: "green" },
//             headerTintColor: "#fff",
//             headerTitleAlign: "center",
//             headerTitleStyle: {
//               fontWeight: "bold",
//             },
//           }}
//         />
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//       </Stack>
//     </UserProvider>
//   );
// }

import { Stack } from "expo-router";
import { UserProvider } from "../context/UserContext"; // Make sure path is correct

export default function RootLayout() {
  const date = new Date().getFullYear();

  return (
    <UserProvider>
      <Stack
        // name="(index)"
        screenOptions={{
          title: `Morning Star-Coop app ©` + date,
          headerStyle: { backgroundColor: "green" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name={"(auth)"} options={{ headerShown: false }} />

        <Stack.Screen name={"(tabs)"} options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}
