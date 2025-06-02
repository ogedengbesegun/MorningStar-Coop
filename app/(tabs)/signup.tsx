import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../../styles/dstyles";

export default function signup() {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          { color: "green", backgroundColor: "white", padding: 5 },
        ]}
      >
        Signup into the Billionaire's Club
      </Text>
      <Text style={{ marginTop: 20, marginBottom: 7, fontSize: 15 }}>
        Please enter your details
      </Text>

      {/* <Text>signup</Text> */}
      <TextInput
        placeholder="Enter Oracle Number"
        style={[styles.input, { marginBottom: 1 }]}
        maxLength={10}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        placeholder="Password"
        style={[styles.input, { marginTop: 5 }]}
        maxLength={8}
        autoCorrect={false}
        secureTextEntry={true}
        keyboardType="default"
      ></TextInput>
      <TextInput
        placeholder="Confirm Password"
        style={[styles.input, { marginTop: 5 }]}
        maxLength={8}
        autoCorrect={false}
        secureTextEntry={true}
        keyboardType="default"
      ></TextInput>
      <TouchableOpacity
        style={[styles.border, { borderRadius: 50 }]}
        onPress={() => alert("Welcome to Billionaire's Club")}
      >
        <Text style={{ color: "green", width: 150, textAlign: "center" }}>
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
}
