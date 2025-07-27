import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useRef, useState } from "react";
import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import "./cssStyle.css";
export default function MembershipForm() {
  const [form, setForm] = useState({
    name: "",
    oracle: "",
    phone: "",
    dob: new Date(),
    amount: "",
  });
  const [showDate, setShowDate] = useState(false);
  const refDate = useRef<HTMLInputElement | null>(null);

  const [isAmount, setIsAmount] = useState("");
  const [isLetter, setIsLetter] = useState("");

  //   type Props={

  //   }
  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.oracle || !form.phone || !form.amount) {
      return (
        Alert.alert("Please fill all required fields.") ??
        alert("Please fill all required fields.")
      );
    }
    Alert.alert("Submitted", JSON.stringify(form, null, 2)) ??
      alert(`Submitted, ${JSON.stringify(form, null, 2)}`);
    // Submit to backend logic here
  };

  return (
    <View
      style={{
        padding: 20,
        width: 350,
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Text style={styles.label}>
        Full Name
        <Text style={{ color: "red", fontSize: 12, fontStyle: "italic" }}>
          {" "}
          {isLetter}
        </Text>
      </Text>
      <TextInput
        placeholder="Enter full name"
        style={styles.input}
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
      />

      <Text style={styles.label}>Oracle Number</Text>

      <TextInput
        placeholder="Enter oracle number"
        style={styles.input}
        keyboardType="numeric"
        value={form.oracle}
        onChangeText={(text) => handleChange("oracle", text)}
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
        // ref={refDate}
        title={form.dob.toDateString()}
        onPress={() => {
          if (Platform.OS === "web" && refDate.current) {
            refDate.current.click();
          } else {
            setShowDate(true);
          }
        }}
      />

      {Platform.OS === "web" ? (
        //  showDate &&
        <input
          type="date"
          //  accept=".csv"
          ref={refDate}
          //  onChange={handleWebUpload}
          title={form.dob.toDateString()}
          placeholder="Select a Date"
          className="dateInput"
          onChange={(e) => {
            const selectedDate = new Date(e.target.value);
            if (!isNaN(selectedDate.getTime())) {
              handleChange("dob", selectedDate);
            }
            setShowDate(false);
          }}
        />
      ) : (
        showDate && (
          <DateTimePicker
            value={form.dob}
            mode="date"
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
          } else if (!isNaN(enteredAmount)) {
            handleChange("amount", text);
            setIsAmount(""); // Clear error if valid
          } else {
            setIsAmount("Please enter a valid number");
          }
        }}
        // onEndEditing={(text) => {
        //   const minimumAmount = 15000;
        //   const enteredAmount = Number(text);
        //   if (!isNaN(enteredAmount) && enteredAmount < minimumAmount) {
        //     handleChange("amount", "");
        //   }
        // }}
      />
      <Text style={{ color: "red", fontSize: 12, fontStyle: "italic" }}>
        {isAmount}
      </Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Submit"
          onPress={() => {
            if (Platform.OS === "web") {
              print();
              // await Print.printAsync()
              // handleSubmit
            }
          }}
          color="green"
        />
      </View>
    </View>
  );
}

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
  },
});
