// import React from "react";
// import { Image, Text, View } from "react-native";
// import Card from "../../utilities/card";

// export default function loginExt() {
//   const CardItems = [
//     {
//       text: "Quick Loan",
//       image: require("../../assets/google.png"),
//       backgroundColor: "lightgreen",
//     },
//     {
//       text: "Soft LOan",
//       image: require("../../assets/facebook.png"),
//       backgroundColor: "lightgrey",
//     },
//     {
//       text: "Home Appliances",
//       image: require("../../assets/apple.png"),
//       backgroundColor: "lightblue",
//     },
//     {
//       text: "Project Loan",
//       image: require("../../assets/apple.png"),
//       backgroundColor: "blue",
//     },
//   ];

//   return (
//     <View>
//       {CardItems.map((usecard, index) => (
//         <Card
//           key={index}
//           style={{
//             color: usecard.backgroundColor,
//             margin: 10,
//             flexDirection: "row",
//             gap: 10,
//           }}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//               fontWeight: "bold",
//               marginBottom: 7,
//             }}
//           >
//             {usecard.text}
//           </Text>
//           <Image
//             source={usecard.image}
//             style={{ width: 50, height: 50, marginTop: 10, borderRadius: 50 }}
//           />
//         </Card>
//       ))}
//     </View>
//   );
// }
