import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "../../styles/dstyles";
import Card from "../../utilities/card";

export default function team() {
  return (
    <>
      {/* <View>
        <Text>Menu</Text>
      </View> */}
      <ScrollView>
        <View
          style={[
            styles.container,
            { width: 350, marginRight: "auto", marginLeft: "auto" },
          ]}
        >
          {/* <Text
            style={{
              fontSize: 25,
              color: "gold",
              backgroundColor: "green",
              padding: 5,
              margin: 5,
              textAlign: "center",
            }}
          >
            {" "}
            Meet Our Team like No Other
          </Text> */}
          <Card style={[]}>
            <Image
              source={require("../../assets/images/d_img/Mrs Bello Vice President.jpg")}
              style={{
                width: 300,

                // marginBottom: 20,
                marginTop: 20,
              }}
            />
            <Text style={{ fontSize: 18 }}>Mrs. Bello</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Vice President
            </Text>
          </Card>

           <Card style={[]}>
            <Image
              source={require("../../assets/images/d_img/Mr Babajide Olanrewaju General Secreatary.jpg")}
              style={{
                width: 300,

                // marginBottom: 20,
                marginTop: 20,
              }}
            />
            <Text style={{ fontSize: 18 }}>Mr. Babajide olanrewaju</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              General Secreatary
            </Text>
          </Card>

          <Card style={[]}>
            <Image
              source={require("../../assets/images/d_img/Mrs Ogunleye Treasurer.jpg")}
              style={{
                width: 300,

                // marginBottom: 20,
                marginTop: 20,
              }}
            />
            <Text style={{ fontSize: 18 }}>Mrs. Ogunleye</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Treasurer
            </Text>
          </Card>

           <Card style={[]}>
            <Image
              source={require("../../assets/images/d_img/Mr Ojebode Ex Officio.jpg")}
              style={{
                width: 300,

                // marginBottom: 20,
                marginTop: 20,
              }}
            />
            <Text style={{ fontSize: 18 }}>Mr. Ojebode</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Ex-Officio
            </Text>
          </Card>
        </View>
      </ScrollView>
    </>
  );
}
