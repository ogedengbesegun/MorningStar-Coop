import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../styles/dstyles";

export default function signup() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/favicon.png")}
            style={{ width: 150, height: 150, marginBottom: 20, marginTop: 20 }}
          />
          <Text
            style={[
              styles.text,
              { color: "green", backgroundColor: "white", padding: 5 },
            ]}
          >
            Signup into the Billionaire's Club
          </Text>
          <Text style={{ marginTop: 20, marginBottom: 7, fontSize: 20 }}>
            Please enter your details
          </Text>

          {/* <Text>signup</Text> */}
          <TextInput
            placeholder="Enter Full Name"
            style={[
              {
                borderBottomWidth: 2,
                borderColor: "green",
                width: "80%",
                marginTop: 5,
              },
            ]}
            maxLength={50}
            keyboardType="default"
          ></TextInput>
          <TextInput
            placeholder="Oracle Number"
            style={[
              {
                borderBottomWidth: 2,
                borderColor: "green",
                width: "80%",
                marginTop: 5,
              },
            ]}
            maxLength={10}
            keyboardType="numeric"
          ></TextInput>
          <TextInput
            placeholder="Password"
            style={[
              {
                borderBottomWidth: 2,
                borderColor: "green",
                width: "80%",
                marginTop: 5,
              },
            ]}
            maxLength={8}
            autoCorrect={false}
            secureTextEntry={true}
            keyboardType="default"
          ></TextInput>

          {/*  */}
          <TextInput
            placeholder="Confirm Password"
            style={[
              {
                borderBottomWidth: 2,
                borderColor: "green",
                width: "80%",
                marginTop: 5,
              },
            ]}
            maxLength={8}
            autoCorrect={false}
            secureTextEntry={true}
            keyboardType="default"
          ></TextInput>

          {/*  */}
          <TouchableOpacity
            style={[styles.border, { borderRadius: 50 }]}
            onPress={() => alert("Welcome to Billionaire's Club")}
          >
            <Text style={{ color: "green", width: 150, textAlign: "center" }}>
              Signup
            </Text>
          </TouchableOpacity>
          <View style={{ padding: 20, width: 300 }}>
            <Text style={{ marginBottom: 10, color: "blue" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              quibusdam voluptatum velit minus? Iusto, autem. Excepturi quo
              quasi repudiandae eos placeat obcaecati facere veritatis, magni
              error porro, officiis minima vero?
            </Text>
            <Text style={{ color: "green" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              quibusdam voluptatum velit minus? Iusto, autem. Excepturi quo
              quasi repudiandae eos placeat obcaecati facere veritatis, magni
              error porro, officiis minima vero?
            </Text>
            <Text style={{ color: "red" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              quibusdam voluptatum velit minus? Iusto, autem. Excepturi quo
              quasi repudiandae eos placeat obcaecati facere veritatis, magni
              error porro, officiis minima vero?
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
