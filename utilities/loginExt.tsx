import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Card from "./card";
// import { useRouter } from "expo-router";

export default function loginExt() {
  const CardItems = [
    {
      text: "Major Loan",
      //   uri: "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
      require: "💵",
      backgroundColor: "lightgreen",
      body: `Major loans are long-term 
        loans designed to provide immediate financial access for eligible members,
        typically with a fast approval process and minimal documentation.
        Repayment Plans of 12 to 24 months with 6% interest rate per annum.
        `,
    },
    {
      text: "Soft Loan",
      //   uri: "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
      require: "💰",

      backgroundColor: "lightgrey",
      body: `Soft loans are emergency loans, they are low-interest loans 
        typically with a fast approval process. The maximum amount is 100,000
        and the repayment period is 6 months.`,
    },
    {
      text: "Appliances",
      //   uri: "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
      require: "🛒",
      backgroundColor: "lightblue",
      body: `Appliance loans are designed to
        help members purchase essential household appliances, with flexible terms
        and competitive interest rates. The maximum amount is set to the item's reflective cost and the
        repayment period is 6 months.`,
    },
    {
      text: "Project",
      //   uri: "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
      require: "🏠",
      backgroundColor: "skyblue",
      body: `Project loans are designed to
        enable our esteemed members start, expand, or complete their House projects
        with flexible terms and competitive interest rates.Repayment plan of 12-36 months.`,
    },
  ];
  const [textImage, setTextImage] = useState("💵");
  const [title, setTitle] = useState("Major Loan");
  const [textBody, setTextBody] = useState(`${CardItems[0].body}`);
  const [background, setBackground] = useState(
    `${CardItems[0].backgroundColor}`
  );
  //////////////////////////
  return (
    <View>
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <ScrollView
        //   //   ref={refServices}
        //   horizontal={Platform.OS !== "web"}
        //   // Horizontal scroll for mobile/native
        //   showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
        //   contentContainerStyle={{
        //     flexDirection: "row",
        //     ...(Platform.OS === "web"
        //       ? {
        //           flexDirection: "row",
        //           //   flexWrap: "wrap", // allow wrapping into next row

        //           //   alignItems: "center",
        //         }
        //       : {}), // web-specific
        //   }}
        //   style={{
        //     marginTop: 1,
        //     ...(Platform.OS === "web"
        //       ? { overflowY: "visible", scrollBehavior: "smooth" }
        //       : {}), // web scroll behavior
        //   }}
         horizontal
      showsHorizontalScrollIndicator={Platform.OS !== "web"} // works on mobile
      contentContainerStyle={styles.contentContainer}
      style={Platform.OS === "web" ? styles.webScroll : null}
    >
        
          {CardItems.map((usecard, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: usecard.backgroundColor,
                margin: 5,
                // marginBottom: 10,
                // gap: 2,
                width: 120,
                height: 140,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  for (let i = 0; i < CardItems.length; i++) {
                    // const element = array[i];
                    setTextImage(usecard.require);
                    setTitle(usecard.text);
                    setTextBody(usecard.body);
                    setBackground(usecard.backgroundColor);
                  }
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: 7,
                  }}
                >
                  {usecard.text}
                </Text>
                <Text
                  //   source={require(usecard.require)}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 80,
                    borderStyle: "solid",
                    borderWidth: 4,
                    borderColor: "#fff",
                    textAlign: "center",
                    fontSize: 35,
                    alignSelf: "center",
                    lineHeight: 60,
                  }}
                >
                  {usecard.require}
                </Text>
              </TouchableOpacity>
            </Card>
          ))}
        </ScrollView>
      </View>
      <View style={{ alignItems: "center", marginTop: 10, padding: 5 }}>
        <Card
          style={{
            // margin: 1,
            //   width: 120,
            justifyContent: "center",
            alignItems: "center",
            width: 300,
            height: 330,
            alignSelf: "center",
            backgroundColor: `${background}`,
            borderRadius: 6,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 70 }}>{textImage}</Text>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: 7,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "300",
              fontSize: 15,
              marginBottom: 7,
              //   width: 200,
              marginRight: 5,
              marginLeft: 5,
            }}
          >
            {textBody}
          </Text>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  webScroll: {
    overflow: "scroll", // enable scrollbar on web
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#4cafef",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
// }