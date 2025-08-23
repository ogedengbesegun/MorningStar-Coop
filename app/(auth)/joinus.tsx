import { API_URL as ENV_API_URL } from "@env";

import DateTimePicker from "@react-native-community/datetimepicker";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import * as Print from "expo-print";
import { MembershipHtml } from "../../utilities/html";

import React, { useRef, useState } from "react";
import {
  Alert,
  Button,
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import {  } from "react-native-gesture-handler";
import { c_day, c_month, c_year } from "@/utilities/mydate";
import "./cssStyle.css";
export default function MembershipForm() {
   const API_URL =
      ENV_API_URL || "https://morningstar-coop-backend.onrender.com";
  // const setMax = document.querySelector(".dateInput")?.setAttribute("max", `${c_year}-${c_month}-${c_date}`);

  const [form, setForm] = useState({
    picture: "",
    name: "",
    oracle: "",
    phone: "",
    dob: new Date(),
    amount: "",
  });
  const [showDate, setShowDate] = useState(false);
  const refDate = useRef<HTMLInputElement | null>(null);
  const refButton = useRef<any>(null);
  const refAgree = useRef<any>(null);

  const [isAmount, setIsAmount] = useState("");
  const [isLetter, setIsLetter] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [imageUri, setImageUri] = useState(
    "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
  );

  /////
  const refImage = useRef<any>(imageUri);
  ///////
  const [isColored, setIsColored] = useState("");
  //   type Props={
  // const checkedRef = useRef(null);
  //   }
  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  ///////////

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      //////
      if (Platform.OS === "web") {
        setImageUri(result.assets[0].uri);
      } else {
        const uri = result.assets[0].uri;
        const base64 = await FileSystem.readAsStringAsync(uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setImageUri(`data:image/jpeg;base64,${base64}`);
        // setImageUri(result.assets[0].uri)
      }
    }
  };

  ///////////
  const html = MembershipHtml(form, imageUri);
  ///////////////////////////////////////////////
  const handlePrint = async () => {
    if (
      !form.name ||
      !form.oracle ||
      !form.phone ||
      !form.amount ||
      isChecked === false ||
      refButton.current === form.dob ||
      // form.dob === new Date()
      !imageUri
    ) {
      return Platform.OS === "web"
        ? alert("Please fill all required fields.")
        : Alert.alert("Please fill all required fields.");
    }
    if (Platform.OS === "web") {
      // const html2 = MembershipHtml(form, imageUri);

      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(html);
        printWindow.document.close();

        printWindow.onload = () => {
          printWindow.focus();
          printWindow.print();
        };
      }
    } else {
      await Print.printAsync({
        html,
        width: 612, //612 8.5 inches * 72
        height: 792, // 11 inches * 72
      });
    }
  };

  const handleSubmit = async () => {
    if (
      !form.name ||
      !form.oracle ||
      !form.phone ||
      !form.amount ||
      // isChecked === false ||
      refButton.current === form.dob
      // form.dob === new Date()
      // !imageUri
    ) {
      return Platform.OS === "web"
        ? alert("Please fill all required fields.")
        : Alert.alert("Please fill all required fields.");
    }
    // Alert.alert("Submitted", JSON.stringify(form, null, 2)) ??
    //   alert(`Submitted, ${JSON.stringify(form, null, 2)}`);
    // Submit to backend logic here
    Linking.openURL(
      `https://wa.me/2347036214834?text=${encodeURIComponent(
        `please, Attached herewith is my Printed Membership Form`
        // JSON.stringify(form, null, 2)
      )}`
    );
  };

  return (
    <>
      <ScrollView>
        {/* <MembershipHtml></MembershipHtml> */}
        <View
          style={{
            // flex: 1,
            padding: 20,
            width: 350,
            // height: "100%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Text
            style={{
              fontFamily: "times NewRoman",
              fontWeight: "bold",
              marginBottom: 5,
              color: "green",
              fontSize: 20,
              textAlign: "left",
              width: 400,
            }}
          >
            Morning Star Membership Form
          </Text>
          {imageUri && (
            <Image
              ref={refImage}
              source={{
                uri: imageUri
                  ? imageUri
                  : "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
              }}
              resizeMode="stretch"
              style={{
                width: 200,
                height: 200,
                padding: 15,
                borderRadius: 10,
                marginBottom: 0,
              }}
            />
          )}

          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button
              title={"Upload Picture"}
              color={"green"}
              onPress={() => {
                pickImage();
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setImageUri(
                  "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
                );
              }}
            >
              <Text style={{ color: "red", marginLeft: 5 }}>Remove</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>
            Full Name
            <Text style={{ color: "red", fontSize: 12, fontStyle: "italic" }}>
              {" "}
              {isLetter}
            </Text>
          </Text>
          <TextInput
            placeholder="Enter full name"
            style={[styles.input, { textTransform: "capitalize" }]}
            value={form.name}
            onChangeText={(text) => {
              const onlyLetters = text.replace(/[^A-Za-z ]/g, "");
              if (onlyLetters !== text) {
                setIsLetter("Alphabets Only");
                handleChange("name", "");
              } else {
                setIsLetter("");
                handleChange("name", text);
              }
            }}
            onEndEditing={(e) => {
              handleChange("name", e.nativeEvent.text.trim());
            }}
          />

          <Text style={styles.label}>Oracle Number</Text>

          <TextInput
            placeholder="Enter oracle number"
            style={styles.input}
            keyboardType="numeric"
            value={form.oracle}
            onChangeText={(text) => {
              // const OnlyNumber = /^(?:\+234|0)(7|8|9)(0|1)\d{8}$/;
              // const textTrue = OnlyNumber.test(text);
              // if (!textTrue) {
              //   alert("Invalid phone number");
              // } else {
              handleChange("oracle", text);
              // }
            }}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder="Enter phone number"
            style={styles.input}
            keyboardType="phone-pad"
            value={form.phone}
            onChangeText={(text) => handleChange("phone", text)}
          />

          <Text style={styles.label}>Date of Birth</Text>
          <Button
            ref={refButton}
            title={form.dob.toLocaleDateString("en-NG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            onPress={() => {
              if (Platform.OS === "web" && refDate.current) {
                // const inputClick = document.querySelector(".dateInput");
                // inputClick.style.color = "green";
                refDate.current.click();
              } else {
                setShowDate(true);
              }
            }}
          />

          {Platform.OS === "web" ? (
            //  showDate &&
            // <MembershipHtml></MembershipHtml>,

            <input
              type="date"
              //  accept=".csv"

              ref={refDate}
              max={`${c_year}-${c_month}-${c_day}`}
              title={form.dob.toDateString()}
              placeholder="Select a Date"
              className="dateInput"
              onChange={(e) => {
                // document.querySelector('.dateInput')
                const selectedInputDate = new Date(e.target.value);
                if (!isNaN(selectedInputDate.getTime())) {
                  handleChange("dob", selectedInputDate);
                }
                setShowDate(false);
              }}
            />
          ) : (
            showDate && (
              <DateTimePicker
                value={form.dob}
                mode="date"
                maximumDate={new Date()}
                display="default"
                onChange={(_, selectedDate) => {
                  setShowDate(false);
                  if (selectedDate) handleChange("dob", selectedDate);
                }}
              />
            )
          )}

          <Text style={styles.label}>Monthly Contribution (₦)</Text>
          <TextInput
            placeholder="Enter amount"
            style={styles.input}
            keyboardType="numeric"
            value={form.amount}
            onChangeText={(text) => {
              const minimumAmount = 15000;
              const enteredAmount = Number(text);

              if (!isNaN(enteredAmount) && enteredAmount < minimumAmount) {
                handleChange("amount", text);
                setIsAmount("Required Minimum is (₦)15000");

                // {(onEndEditing={handleChange("amount","")})};
              } else if (!isNaN(enteredAmount)) {
                handleChange("amount", text);
                setIsAmount(""); // Clear error if valid
              } else {
                setIsAmount("Please enter a valid number");
              }
            }}
            onEndEditing={(text) => {
              ///this is perfect for andr ios
              const entered = Number(text.nativeEvent.text);
              if (isNaN(entered) || entered < 15000) {
                handleChange("amount", ""); // Clear input if less than 15000
              }
            }}
            onBlur={(e) => {
              ///this  works for web dep
              const entered = Number(e.nativeEvent.text);
              if (isNaN(entered) || entered < 15000) {
                handleChange("amount", "");
              }
            }}
          />
          <Text style={{ color: "red", fontSize: 12, fontStyle: "italic" }}>
            {isAmount}
          </Text>
          <View
            style={{
              marginBottom: 5,
              flexDirection: "row",
              width: 250,
              alignItems: "center",
            }}
          >
            <Switch
              value={isChecked}
              thumbColor={isChecked ? "#ffffff" : "#f4f3f4"}
              trackColor={{ false: "red", true: "green" }}
              onValueChange={(value) => {
                setIsChecked(value);
                setIsColored(value ? "green" : "red");
              }}
            />
            <Text
              style={{ textAlign: "left", padding: 10, color: "grey" }}
              ref={refAgree}
            >
              "I understand that by signing up, I become a member of Morning
              Star Cooperative Society and agree to its terms and conditions."
            </Text>
          </View>
          <Text
            style={{ marginLeft: 8, marginBottom: 5, color: isColored }}
            // ref={checkedRef}
          >
            {
              isChecked ? "Agreed" : "Not Agreed"
              // isChecked ? setIsColored('green')
            }
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginRight: "auto",
              marginLeft: "auto",
              gap: 5,
              width: 300,
            }}
          >
            <TouchableOpacity
              style={{ backgroundColor: "grey", width: 150, padding: 7 }}
              // title="Print"
              onPress={() => {
                handlePrint();
                // if (Platform.OS === "web") {
                //   handlePrint();
                // } else {
                //   handlePrint();
                // }
              }}
            >
              <Text style={{ textAlign: "center", color: "#fff" }}>Print</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ backgroundColor: "green", width: 150, padding: 7 }}
              // disabled
              onPress={() => {
                joinusform()
                // if (Platform.OS === "web") {
                //   // print();
                //   // await Print.printAsync()
                //   handleSubmit();
                // } else {
                //   handleSubmit();
                // }
              }}
            >
              <Text style={{ textAlign: "center", 
                color: "#fff" }}>Submit</Text>
            </TouchableOpacity>
          </View>
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
          Morning Star Coop Society © {new Date().getFullYear()}
        </Text>
      </View>
    </>
  );

  async function joinusform(){
    try{
    const response=await fetch(`${API_URL}/api/submitjoinus`,
     { method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name: form.name,
        oracle: form.oracle,
        phone: form.phone,
        dob: form.dob.toISOString().split("T")[0],
        amount: form.amount,
        picture: imageUri,})
      }
    );
    const result = await response.json();
    if (result.success === true) {
      Alert.alert("Success", "Your membership form has been submitted successfully.");
    }
    }catch (error) {
    // console.error("Error submitting form:", error);
    Alert.alert("Error", "There was an error submitting your form. Please try again later.");
    }
  }
}




////////styling
const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    height: 45,
  },
});
