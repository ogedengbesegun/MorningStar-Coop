import { API_URL as ENV_API_URL } from "@env";

import DateTimePicker from "@react-native-community/datetimepicker";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import * as Print from "expo-print";
import React, { useRef, useState } from "react";
import {
  Alert,
  Button,
  Image,
  ImageBackground,
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
import Hr from "../../utilities/hr";
import { LoanRequestHtml } from "../../utilities/html";
// import {  } from "react-native-gesture-handler";
import { c_day, c_month, c_year } from "@/utilities/mydate";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useUser } from "../../context/UserContext";
import "./cssStyle.css";

/////////////////////////////
export default function LoanRequestForm() {
  const API_URL =
    ENV_API_URL || "https://morningstar-coop-backend.onrender.com";
  // const setMax = document.querySelector(".dateInput")?.setAttribute("max", `${c_year}-${c_month}-${c_date}`);
  const { user } = useUser();
  const { user2 } = useUser();
  //////
  /////////////////
  const [form, setForm] = useState({
    picture: "",
    name: "",
    oracle: user?.oracle ?? "",
    phone: "",
    dob: new Date(),
    amount: "",
    bankName: "",
    bankBranch: "",
    bankSort: "",
    bankNumber: "",
  });
  /////////////////
  const [showDate, setShowDate] = useState(false);
  const refDate = useRef<HTMLInputElement | null>(null);
  const refButton = useRef<any>(null);
  const refAgree = useRef<any>(null);

  const [isAmount, setIsAmount] = useState("");
  const [isLetter, setIsLetter] = useState("");
  const [isLetter2, setIsLetter2] = useState("");
  const [numValid, setNumValid] = useState("");

  /////////////////
  const [savings, setSavings] = useState(user2?.savings ?? "0");
  const [loan, setLoan] = useState(user2?.loanBalance ?? "0");
  const [softLoan, setSoftLoan] = useState(user2?.softloanBalance ?? "0");
  ///////////////////
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
  const html = LoanRequestHtml(form, imageUri, savings, loan, softLoan);
  ///////////////////////////////////////////////
  const handlePrint = async () => {
    if (
      !form.name ||
      !form.oracle ||
      !form.phone ||
      !form.amount ||
      !form.bankName ||
      !form.bankNumber ||
      !form.bankSort ||
      isChecked === false ||
      refButton.current === form.dob ||
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

  const sendWhatapp = async () => {
    if (
      !form.name ||
      !form.oracle ||
      !form.phone ||
      !form.amount ||
      !form.bankName ||
      !form.bankNumber ||
      !form.bankSort ||
      isChecked === false ||
      !imageUri
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
        `Attached herewith is my Printed Loan Application Form for speedy treatment`
        // JSON.stringify(form, null, 2)
      )}`
    );
  };
  ///////useEffect

  //////////////////////
  return (
    <>
      <ImageBackground
        source={require("../../assets/images/d_img/mscKnittedHands-faint.png")} // local image
        style={{ width: "100%", height: "100%" }} // full width and height
        // cover the entire screen

        resizeMode="center" // or "contain", "stretch"
      >
        <ScrollView>
          {/* <MembershipHtml></MembershipHtml> */}

          <View
            style={{
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
                fontSize: 16,
                textAlign: "center",
                width: 300,
                //   marginRight: "auto",
              }}
            >
              Morning Star Members' Co-operative & Thrift Society
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 14, fontWeight: "bold" }}
            >
              Address: Girls HIGH SCHOOL AGEGE
            </Text>
            <View style={{ width: "100%" }}>
              <Hr color="green" thickness={3} marginVertical={5} />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                width: 300,
                fontWeight: "bold",
              }}
            >
              APPLICATION FOR LOAN
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
                  width: 150,
                  height: 150,
                  padding: 15,
                  borderRadius: 10,
                  marginBottom: 0,
                  marginTop: 10,
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
              readOnly
              keyboardType="numeric"
              value={form.oracle}
              onChangeText={(text) => {
                // /^(?:\+234|0)(7|8|9)(0|1)\d{8}$/;
                const onlyNumber = text.replace(/[^0-9]/g, "");
                // const textTrue = OnlyNumber.test(text);
                if (!onlyNumber) {
                  handleChange("oracle", "");

                  // alert("Invalid phone number");
                } else {
                  handleChange("oracle", text);
                }
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

            <Text style={styles.label}>Date of Application</Text>
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
              color={"lightgreen"}
              disabled
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
            <Text style={styles.label}>
              Total Savings (₦) <Text>{user2?.savings}</Text>{" "}
            </Text>
            <Text style={styles.label}>
              Loan Balance (₦) <Text>{user2?.loanBalance}</Text>
            </Text>
            <Text style={styles.label}>
              Soft Loan Balance (₦) <Text>{user2?.softloanBalance}</Text>
            </Text>
            <Text style={styles.label}>Loan Amount Requested (₦)</Text>
            <TextInput
              placeholder="Enter amount Required"
              style={styles.input}
              keyboardType="numeric"
              value={form.amount}
              onChangeText={(text) => {
                const minimumAmount = 50000;
                const enteredAmount = Number(text);

                if (!isNaN(enteredAmount) && enteredAmount < minimumAmount) {
                  handleChange("amount", text);
                  setIsAmount("Expected Minimum Loan Amount is (₦)50000");

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
                if (!isNaN(entered) && entered < 50000) {
                  handleChange("amount", ""); // Clear input if less than 15000
                }
              }}
              onBlur={(e) => {
                ///this  works for web dep

                const entered = Number(e.nativeEvent.text);
                if (!isNaN(entered) && entered < 50000) {
                  handleChange("amount", "");
                }
              }}
            />
            <Text style={{ color: "red", fontSize: 12, fontStyle: "italic" }}>
              {isAmount}
            </Text>
            {/*Bank Name */}
            <Text style={styles.label}>
              Bank Name / Branch Name
              <Text style={{ color: "red", fontSize: 12 }}> {isLetter2}</Text>
            </Text>
            <TextInput
              placeholder=" e.g first Bank plc Branch ilupeju lagos"
              style={styles.input}
              keyboardType="default"
              value={form.bankName}
              onChangeText={(text) => {
                const onlyLetters = text.replace(/[^A-Za-z ]/g, "");
                if (onlyLetters !== text) {
                  setIsLetter2("Alphabets Only");
                  handleChange("bankName", "");
                } else {
                  setIsLetter2("");
                  handleChange("bankName", text);
                }
              }}
            />
            <Text style={styles.label}>
              Bank Account Number
              <Text style={{ color: "red" }}> {numValid}</Text>
            </Text>
            <TextInput
              placeholder="Enter Bank Account Number"
              style={styles.input}
              keyboardType="numeric"
              value={form.bankNumber}
              onChangeText={(text) => {
                ///this is perfect for andr ios
                // const value = text;
                const onlyNumber = text.replace(/[^0-9]/g, "");
                // const entered = Number(text);
                if (onlyNumber !== text) {
                  handleChange("bankNumber", ""); // Clear input if less than 10 digits
                  setNumValid("Invalid Number");
                } else {
                  handleChange("bankNumber", text);
                  setNumValid("");
                }
              }}
              ///////////////
              onBlur={() => {
                if (form.bankNumber.length < 10) {
                  setNumValid("Invalid Number");

                  handleChange("bankNumber", ""); // Clear input if less than 10 digits
                }
              }}
            />
            <Text style={styles.label}>
              Bank Sort Code
              <Text style={{ color: "red", fontSize: 12 }}>
                {" "}
                (Ensure Sort Code is Correct)
              </Text>
            </Text>
            <TextInput
              placeholder="Enter Bank Sort Code"
              style={styles.input}
              keyboardType="numeric"
              value={form.bankSort}
              onChangeText={(text) => {
                handleChange("bankSort", text);
              }}
              // onEndEditing={(text) => {
              //   ///this is perfect for andr ios
              //   const entered = Number(text.nativeEvent.text);
              //   if (isNaN(entered) {
              //     handleChange("bankName", ""); // Clear input if less than 15000
              //   }
              // }}
              onBlur={(e) => {
                ///this  works for web dep
                const entered = Number(e.nativeEvent.text); //for native
                const NaNentered = !entered;
                Platform.OS === "web"
                  ? NaNentered && handleChange("bankSort", "")
                  : entered;
              }}
            />
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
                thumbColor={isChecked ? "#fff" : "#f4f3f4"}
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
                I {form.name}, hereby "E-signed" this Loan Application Form.
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
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: "auto",
                    marginBottom: "auto",
                    color: "#fff",
                  }}
                >
                  Print Application Form
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ backgroundColor: "green", width: 150, padding: 7 }}
                // disabled
                onPress={() => {
                  loanform();
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  Submit Application Form{" "}
                  <MaterialCommunityIcons
                    name="whatsapp"
                    size={20}
                    color={"white"}
                  />
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                width: 300,
                color: "grey",
                fontStyle: "italic",
                margin: 5,
                fontSize: 14,
              }}
            >
              Click Print to have a copy on your device and Click Submit then,
              attach the pdf copy to the whatsapp number of the Executive
              in-charge of Loans for speedy treatment.{" "}
            </Text>
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
      </ImageBackground>
    </>
  );

  async function loanform() {
    try {
      const API_URL2 = `http://localhost:10000`;
      const response = await fetch(
        `https://morningstar-coop-backend.onrender.com/api/submitLoanRequest`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            oracle: form.oracle,
            phone: form.phone,
            doa: form.dob.toISOString().split("T")[0],
            amount: form.amount,
            bankName: form.bankName,
            bankNumber: form.bankNumber,
            bankSort: form.bankSort,
            picture: imageUri,
          }),
        }
      );
      const result = await response.json();
      if (result.success === true) {
        alert(result.message);
        ///if the result is true send whatsapp msg
        sendWhatapp();
      } else {
        alert(result.message);
      }
    } catch (error) {
      // console.error("Error submitting form:", error);
      // Alert.alert(
      //   "Error",
      //   "There was an error submitting your form. Please try again later."
      // ) ??
      alert(`Error,
        There was an error submitting your form. Please try again later.`);
    }
  }
  ////load  Total savings and loan balance///
  // async function getSavingLoanBal() {
  //   const response = await fetch(`${API_URL}/api/savingLoanBal`, {
  //     method: "POST",
  //     headers: { "Content-Type": "aplication/json" },
  //     body: JSON.stringify({
  //       oracle: "180095",
  //     }),
  //   });
  //   const result = await response.json();
  //   if (result.success === true) {
  //     setSavings(result.data.total_savings);
  //     setLoan(result.data.total_loan_balance);
  //     setSoftLoan(result.data.total_soft_loanBal);
  //     alert(result.message);
  //   } else {
  //     setForm((prev) => ({ ...prev, oracle: "" }));

  //     alert(result.message && form.oracle);
  //   }
  // }
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
    width: "100%",
  },
});
