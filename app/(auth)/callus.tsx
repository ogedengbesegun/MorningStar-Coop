import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
              source={require("../../assets/images/d_img/Mr. Raji President.jpg")}
              style={{
                width: 250,
                height: 300,
                marginTop: 20,
              }}
            />
            <Text style={{ fontSize: 18 }}>Mr. Raji</Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              The President
            </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("tel:+2347069986008");
              }}
            >
              <Text style={{ marginTop: 10, fontSize: 17, color: "green" }}>
                Call now 📱
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://wa.me/2347069986008");
              }}
            >
              <Text style={{ fontSize: 17, color: "green" }}>
                WhatsApp Chat 💬{" "}
              </Text>
            </TouchableOpacity>
          </Card>

          <Card style={[]}>
            <Image
              source={require("../../assets/images/d_img/Mrs Bello Vice President.jpg")}
              style={{
                width: 250,
                height: 300,
                // marginBottom: 20,
                marginTop: 20,
              }}
            />
            <Text style={{ fontSize: 18 }}>Mrs. Bello</Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Vice President
            </Text>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL("tel:+2348099731790");
              }}
            >
              <Text style={{ marginTop: 10, fontSize: 17, color: "green" }}>
                Call now 📱
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://wa.me/2348099731790");
              }}
            >
              <Text style={{ fontSize: 17, color: "green" }}>
                WhatsApp Chat 💬{" "}
              </Text>
            </TouchableOpacity>
          </Card>

          <Card style={[]}>
            <Image
              source={require("../../assets/images/d_img/Mr Babajide Olanrewaju General Secretary.jpg")}
              style={{
                width: 250,
                height: 300,
                // marginBottom: 20,
                marginTop: 20,
              }}
            />
            <Text style={{ fontSize: 18 }}>Mr. Babajide</Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              General Secretary
            </Text>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL("tel:+2348132422537");
              }}
            >
              <Text style={{ marginTop: 10, fontSize: 17, color: "green" }}>
                Call now 📱
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://wa.me/2348132422537");
              }}
            >
              <Text style={{ fontSize: 17, color: "green" }}>
                WhatsApp Chat 💬{" "}
              </Text>
            </TouchableOpacity>
          </Card>

          <Card style={[]}>
            <Image
              source={require("../../assets/images/d_img/Mr. Oyewale Assistant Secretary.jpg")}
              style={{
                width: 250,
                height: 300,

                // marginBottom: 20,
                marginTop: 20,
              }}
            />
            <Text style={{ fontSize: 18 }}>Mr. Oyewale</Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Assistant Secretary
            </Text>
          </Card>

          <Card style={[]}>
            <Image
              source={require("../../assets/images/d_img/Mrs Ogunleye Treasurer.jpg")}
              style={{
                width: 250,
                height: 300,
                // marginBottom: 20,
                marginTop: 20,
              }}
            />
            <Text style={{ fontSize: 18 }}>Mrs. Ogunleye</Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Treasurer</Text>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL("tel:+2348107344660");
              }}
            >
              <Text style={{ marginTop: 10, fontSize: 17, color: "green" }}>
                Call now 📱
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://wa.me/2348107344660");
              }}
            >
              <Text style={{ fontSize: 17, color: "green" }}>
                WhatsApp Chat 💬{" "}
              </Text>
            </TouchableOpacity>
          </Card>

          <Card style={[]}>
            <Image
              source={require("../../assets/images/d_img/Mr. Bakare Financial Secretary.jpg")}
              style={{
                width: 250,
                height: 300,
                // marginBottom: 20,
                marginTop: 20,
              }}
            />
            <Text style={{ fontSize: 18 }}>Mr. Bakare</Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Financial Secretary
            </Text>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL("tel:+2347036214834");
              }}
            >
              <Text style={{ marginTop: 10, fontSize: 17, color: "green" }}>
                Call now 📱
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://wa.me/2347036214834");
              }}
            >
              <Text style={{ fontSize: 17, color: "green" }}>
                WhatsApp Chat 💬{" "}
              </Text>
            </TouchableOpacity>
          </Card>

          <Card style={[]}>
            <Image
              source={require("../../assets/images/d_img/Mr Ojebode Ex Officio.jpg")}
              style={{
                width: 250,
                height: 300,

                // marginBottom: 20,
                marginTop: 20,
              }}
            />
            <Text style={{ fontSize: 18 }}>Mr. Ojebode</Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Ex-Officio</Text>
          </Card>
        </View>
      </ScrollView>
    </>
  );
}
