import Papa from "papaparse";
// import DocumentPicker from "react-native-document-picker";
// import RNFS from "react-native-fs";
///////////////
import Card from "@/utilities/card";
import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from "expo-document-picker";
import React, { useRef, useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import Hr from "../../utilities/hr";
import "./cssStyle.css"; // This only works on we
///////////////////
export default function dashboard() {
  const currentYear = new Date().getFullYear();
  ///////
  const inputRef = useRef(null);
  const refView = useRef(true);
  ///////////////
  const [monthly, setMonthly] = useState("Select Month");
  const [yearly, setYearly] = useState("Select Year");
  const [csvText, setCsvText] = useState<string | null>(null);
  const [parseData, setParseData] = useState<any[]>([]);
  const [filename, setFilename] = useState<any | null>(null);
  const [disabled, setDisable] = useState(true);
  //////////
  // const Hr = ({ color = "#ccc", thickness = 1, marginVertical = 10 }) => (
  //   <View
  //     style={{
  //       borderBottomColor: color,
  //       borderBottomWidth: thickness,
  //       marginVertical,
  //     }}
  //   />
  // );
  ////////////
  const handleWebUpload = (event: any) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith(".csv")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const target = e.target as FileReader | null;
        if (target && target.result) {
          setFilename(file.name);
          console.log("Web CSV content:", target.result);

          return setCsvText(target.result as string);
        }
      };

      reader.readAsText(file);
    } else {
      alert("Please select a CSV file.");
    }
  };

  //////////////////////
  /////////////

  const handleMobileUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
      multiple: false,
    });

    if (result.assets && result.assets.length > 0) {
      const file = result.assets[0];

      // Check mimeType instead of file extension
      if (
        file.mimeType === "text/csv" ||
        file.name.toLowerCase().endsWith(".csv")
      ) {
        setFilename(file.name);

        const response = await fetch(file.uri);
        const text = await response.text();
        setCsvText(text);
        // console.log("Mobile CSV content:", text);
      } else {
        alert("Selected file is not CSV");
      }
    } else {
      console.log("No file selected");
    }
  };
  /////
  const parseCSV = (csvText: string) => {
    const result = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: false,
    });
    setParseData(result.data);
    // console.log("Parsed CSV data:", result.data); // Log the first row's name field
    return result.data; // returns an array of objects
  };

  const userFields = [
    { label: "Year", key: "yr" },
    { label: "Month", key: "month" },
    { label: "Name", key: "name" },
    { label: "Oracle", key: "oracle" },
    { label: "Deduction", key: "deduction" },
    { label: "Savings", key: "savings" },
    { label: "Retirement", key: "retirement" },
    { label: "Loan Balance", key: "loan_balance" },
    { label: "Interest Balance", key: "interest_bal" },
    { label: "Soft Loan Balance", key: "soft_loanBal" },
  ];
  ////////////////
  //   let array= parseData
  // for (let i = 0; i < array.length; i++) {
  //   const element = array[i];
  //   return element
  // }

  ////////////////
  return (
    <>
      <ScrollView>
        <View>
          <Card
            style={{
              alignSelf: "center",
              width: 330,
              backgroundColor: "#fff",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "green",
                fontSize: 24,
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 1,
                textAlign: "center",
              }}
            >
              Executives' Dashboard
            </Text>
            <Hr color="green" thickness={2} />
            <Text
              style={{
                width: 250,
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 5,
                marginBottom: 5,
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              This platform is for Monthly Deductions' Update, Upload and or
              Deletion into the Database
            </Text>

            <Hr />

            <View>
              <Text style={{ marginTop: 10 }}>
                Maximum of 3 Years Reviewable
              </Text>
              {/*picker year  */}
              <Picker
                selectedValue={yearly}
                onValueChange={(itemValue) => setYearly(itemValue)}
                style={{
                  height: 55,
                  width: 300,
                  alignSelf: "center",
                  marginBottom: 5,
                  borderRadius: 6,
                  backgroundColor: "#D3D3D3",
                }}
              >
                <Picker.Item label="Select Year" value="Select Year" />
                <Picker.Item
                  label={(currentYear - 2).toString()}
                  value={(currentYear - 2).toString()}
                />
                <Picker.Item
                  label={(currentYear - 1).toString()}
                  value={(currentYear - 1).toString()}
                />
                <Picker.Item
                  label={currentYear.toString()}
                  value={currentYear.toString()}
                />
              </Picker>

              {/* picker Month */}
              <Picker
                selectedValue={monthly}
                onValueChange={(itemValue) => setMonthly(itemValue)}
                // console.log(itemValue, itemIndex)

                style={{
                  height: 55,
                  width: 300,
                  alignSelf: "center",
                  borderRadius: 6,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderColor: "#999",
                  backgroundColor: "#D3D3D3",
                }}
              >
                <Picker.Item label="Select Month" value="Select Month" />
                <Picker.Item label="January" value="January" />
                <Picker.Item label="February" value="February" />
                <Picker.Item label="March" value="March" />
                <Picker.Item label="April" value="April" />
                <Picker.Item label="May" value="May" />
                <Picker.Item label="June" value="June" />
                <Picker.Item label="July" value="July" />
                <Picker.Item label="August" value="August" />
                <Picker.Item label="September" value="September" />
                <Picker.Item label="October" value="October" />
                <Picker.Item label="November" value="November" />
                <Picker.Item label="December" value="December" />
              </Picker>
              <Text style={{ color: "purple", fontSize: 20 }}>
                Total Document: {parseData.length} <Text>{}</Text>
              </Text>
              <Hr />
              <Text>{filename}</Text>
              <View style={{ flexDirection: "row", gap: 2 }}>
                {Platform.OS === "web" ? (
                  <>
                    <input
                      type="file"
                      accept=".csv"
                      ref={inputRef}
                      onChange={handleWebUpload}
                      title="Upload CSV file"
                      placeholder="Select a CSV file"
                      className="hiddenFileInput"
                    />

                    <TouchableOpacity
                      style={style.touchable}
                      onPress={() => {
                        if (inputRef.current) {
                          (inputRef.current as HTMLInputElement).click();

                          setDisable(false);
                        }
                      }}
                    >
                      <Text
                        style={[
                          style.textStyle,
                          {
                            color: "green",
                          },
                        ]}
                      >
                        Fetch CSV
                      </Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <TouchableOpacity
                    style={style.touchable}
                    onPress={() => {
                      handleMobileUpload();

                      setDisable(false);
                    }}
                  >
                    <Text
                      style={[
                        style.textStyle,
                        {
                          color: "green",
                        },
                      ]}
                    >
                      Fetch CSV
                    </Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={style.touchable}
                  // onPress={}
                >
                  <Text
                    style={[
                      style.textStyle,
                      {
                        color: "red",
                      },
                    ]}
                  >
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                disabled={disabled}
                onPress={() => parseCSV(csvText as string)}
                style={[style.touchable, { width: "100%", marginTop: 5 }]}
              >
                <Text
                  style={[
                    style.textStyle,
                    {
                      color: "blue",
                    },
                  ]}
                >
                  View
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={disabled}
                onPress={() => Uploadcsv()}
                style={[style.touchable, { width: "100%", marginTop: 5 }]}
              >
                <Text
                  style={[
                    style.textStyle,
                    {
                      color: "purple",
                    },
                  ]}
                >
                  Upload csvDocument
                </Text>
              </TouchableOpacity>
            </View>
          </Card>

          {parseData.map((user, index) => (
            <Card
              key={index}
              style={{
                width: 330,
                marginRight: "auto",
                marginLeft: "auto",
                marginBottom: 10,
                backgroundColor: "#f0f8ff",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignSelf: "flex-start",
                  gap: 5,
                  padding: 5,
                  marginTop: 0,
                }}
              >
                <Text
                  style={{
                    color: "green",
                    fontStyle: "italic",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Serial No: {index + 1}
                </Text>
                {userFields.map((field, i) => (
                  <Text key={i} style={{ color: "grey" }}>
                    {field.label}:{"  "}
                    <Text
                      style={{
                        marginLeft: 5,
                        color: "black",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      {field.key ? user[field.key] ?? "" : " "}
                    </Text>
                  </Text>
                  ))}
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </>
  );
  ///////
  async function Uploadcsv() {
    try {
      // const res = await DocumentPicker.pickSingle({
      //   type: [DocumentPicker.types.plainText], // csv is text/csv or plainText
      // });

      // const fileUri = res.uri;

      // Read file content (depends on platform: content:// vs file://)
      // const content = await RNFS.readFile(fileUri, "utf8");
      // You need to pass a valid event object here, or remove this line if not needed.
      // Example: ;
      // If you don't have an event, you should not call handleWebUpload here.
      // const getcsv = await handleWebUpload(event)
      // if (!csvText) {
      //   // throw new Error("No CSV data available to upload.");
      //   alert("No CSV data available to upload.")
      // }
      if (!csvText) {
        Alert.alert("No CSV data available to upload.");
        // return;
      }
      
      const results = Papa.parse(typeof csvText === "string" ? csvText : "", {
        header: true, // Converts to JSON using first row as keys
        skipEmptyLines: true,
      });

      const response = await fetch(
        "https://morningstar-coop-backend.onrender.com/api/uploadcsv",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: results.data,
            // monthly,
            // yearly,
          }),
        }
      );
      // Send to backend
      // Uncomment and replace with your backend URL
      // const response = await axios.post('https://your-backend/upload-csv', {
      //   data: results.data,
      // });
      const getRes = await response.json();
      // Alert.alert('Success', 'CSV uploaded successfully');
      if (getRes.success === true) {
        alert(getRes.message);
      } else {
        alert(getRes.message);
      }
    } catch (err) {
      console.error(err);
      // Alert.alert("Error", "Failed to upload CSV");
    }
  }
}

const style = StyleSheet.create({
  touchable: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#D3D3D3",
    width: "50%",
    padding: 5,
    borderRadius: 8,
    height: 40,
  },
  textStyle: {
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    fontWeight: "bold",
  },
  yearMonth: {
    fontSize: 18,
    textAlign: "center",

    color: "green",
    fontWeight: "bold",
  },
});
