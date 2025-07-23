

import { useRouter } from "expo-router";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";
import Hr from "../../utilities/hr"; // adjust path if needed
// import styles from "../styles"; // adjust path if needed

export default function AdminLoginScreen() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedUser, setSelectedUser] = useState("President");
  const mydate = new Date().getFullYear();

  useEffect(() => {
    const checkLogin = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isAdminLoggedIn");
      if (isLoggedIn === "true") {
        router.replace("login"); // Redirect if already logged in
      }
    };
    // checkLogin();
  }, []);

  const handleLogin = async () => {
    if (selectedUser === selectedUser && password === "*1234#") {
      try {
        await AsyncStorage.setItem("isAdminLoggedIn", "true");
        router.replace("dashboard");
      } catch (error) {

        console.error("Login error:", error);
      }
    } 
    else {
      Platform.OS==="web"? alert("Invalid Credentials, Username or password is incorrect") :
     Alert.alert("Invalid Credentials", "Username or password is incorrect");
    }
  };

  // useEffect(() => {
  //   // Sync username to match the selected user
  //   setUsername(selectedUser);
  // }, [selectedUser]);

  return (
    <>
      <ScrollView>
        <View style={[styles.container, styles.width, styles.marginAuto]}>
          <Text
            style={{
              fontSize: 50,
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: 0,
            }}
          >
            🔐
          </Text>
          <Text style={[styles.title, { marginBottom: 5 }]}>
            Admin Login{" "}
            <FontAwesome name="user" size={24} color="#28a745" />
          </Text>

          <Picker
            selectedValue={selectedUser}
            onValueChange={(itemValue) => setSelectedUser(itemValue)}
            style={styles.input}
          >
            <Picker.Item label="President" value="President" />
            <Picker.Item label="General Secretary" value="General Secretary" />
            <Picker.Item label="Financial Secretary" value="Financial Secretary" />
            <Picker.Item label="Treasurer" value="Treasurer" />
          </Picker>

          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        <Hr color="#ccc" thickness={1} marginVertical={15} />
          <Text style={{color:"red",textAlign:"center",fontStyle:"italic"}}>This is Strictly for Authiorized Executive Members of the Society</Text>
        </View>
      </ScrollView>

      <View>
        <Text
          style={{
            textAlign: "center",
            backgroundColor: "green",
            padding: 8,
            color: "white",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          © {mydate} MorningStar-Coop. All rights reserved.
        </Text>
      </View>
    </>
  );
}





/////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    // backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
    backgroundColor: "white",
    fontWeight: "bold",
    height: 55,
  },
  button: {
    backgroundColor: "grey",
    padding: 14,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  width: {
    width: 300,
  },
  marginAuto: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  picker: {
    height: 30,
    borderWidth: 0,
  },
});
