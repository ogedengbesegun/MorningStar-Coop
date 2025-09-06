import Papa from "papaparse";
// import DocumentPicker from "react-native-document-picker";
// import RNFS from "react-native-fs";
///////////////
import { API_URL as ENV_API_URL } from "@env";

import Card from "@/utilities/card";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from "expo-document-picker";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Hr from "../../utilities/hr";
import "./cssStyle.css"; // This only works on we
///////////////////
///////
export default function dashboard() {
  const API_URL =
    ENV_API_URL || "https://morningstar-coop-backend.onrender.com";
  const currentYear = new Date().getFullYear();
  ///////
  const inputRef = useRef(null);
  const refView = useRef<ScrollView>(null);
  ///////////////
  const [monthly, setMonthly] = useState("Select Month");
  const [yearly, setYearly] = useState("Select Year");
  const [csvText, setCsvText] = useState<string | null>(null);
  const [parseData, setParseData] = useState<any[]>([]);
  const [filename, setFilename] = useState<any | null>(null);
  const [disabled, setDisable] = useState(true);
  const [disabled2, setDisable2] = useState(true);
  const [showmodal, setShowModal] = useState(false);
  ////
  ////for New Members
  const [newMD, setNewMD] = useState<any[]>([]);
  const [newMemMsg, setNewMemMsg] = useState("");
  //////for Members Loan Requesst
  const [memLoan, setMemLoan] = useState<any[]>([]);
  //////
  const [show, setShow] = useState({
    show1: true,
    show2: false,
    show3: false,
  });
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

  ///////////
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
    { label: "Bank Deposit", key: "bank" },
    { label: "Savings", key: "savings" },
    { label: "Retirement", key: "retirement" },
    { label: "Loan Balance", key: "loan_balance" },
    { label: "Interest Balance", key: "interest_bal" },
    { label: "Soft Loan Balance", key: "soft_loanBal" },
  ];

  const dashBtn = [
    {
      label: "Add csvDocs",
      backColor: "lightgreen",
    },
    { label: " New Members", backColor: "lightgrey" },
    { label: "Loan Request", backColor: "lightblue" },
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
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          marginRight: "auto",
          marginLeft: "auto",
          gap: 5,
          // marginTop: 10,
          padding: 5,
        }}
      >
        {dashBtn.map((title, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: `${title.backColor}`,
              padding: 6,
              borderRadius: 5,
              width: 110,
              height: 55,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              if (index === 0) {
                setShow((show1) => ({
                  ...show1,
                  show1: !show1.show1,
                }));
              } else if (index === 1) {
                setShow((show1) => ({
                  ...show1,
                  show2: !show1.show2,
                }));
              } else if (index === 2) {
                setShow((show1) => ({
                  ...show1,
                  show3: !show1.show3,
                }));
              }
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "dark",
                fontWeight: "bold",
              }}
            >
              {title.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/*  */}
      <View>
        <Hr color="green" thickness={1} />
        <Text
          style={{
            color: "green",
            fontSize: 28,
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: -10,
            textAlign: "center",
          }}
        >
          Executives' Dashboard
        </Text>
      </View>

      {/* header btn end */}
      <ScrollView ref={refView}>
        {/* scroll entire  */}
        <Modal
          transparent
          visible={showmodal}
          animationType="fade"
          onDismiss={() => setShowModal(false)}
        >
          <View
            style={{
              backgroundColor: "rgba(248, 237, 237, 0.86)",
              height: "100%",
            }}
          >
            <View style={{ margin: "auto" }}>
              <Text style={{ color: "green", fontSize: 20 }}>
                Wait Loading...
              </Text>
              <ActivityIndicator size={"large"} color={"green"} />
            </View>
          </View>
        </Modal>
        <View style={{ display: show.show1 ? "flex" : "none" }}>
          {/* */}
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
                fontSize: 18,
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 1,
                textAlign: "center",
              }}
            >
              Upload csvMonthly Deductions
            </Text>
            <Hr color="green" thickness={2} />

            {/* phase 1 */}

            <Text
              style={{
                width: 250,
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: -5,
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
                        Fetch csvDocs
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
                      Fetch csvDocs
                    </Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={style.touchable}
                  onPress={() => {
                    parseCSV("");
                    setDisable(true);
                    setDisable2(true);
                    // setFilename("");
                    // setCsvText(null);
                  }}
                >
                  <Text
                    style={[
                      style.textStyle,
                      {
                        color: "red",
                      },
                    ]}
                  >
                    Delete Docs
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                disabled={disabled}
                onPress={() => {
                  setShowModal(true);
                  setTimeout(() => {
                    setShowModal(false);
                    parseCSV(csvText as string);
                    setDisable2(false);
                  }, 3000);
                }}
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
                  View Docs
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={disabled2}
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
                  No: {index + 1}
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

        <View style={{ display: show.show2 ? "flex" : "none" }}>
          {/* for New Members*/}
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
                color: "grey",
                fontSize: 18,
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 1,
                textAlign: "center",
              }}
            >
              View New Members
            </Text>
            <Hr color="grey" thickness={2} />
            <TouchableOpacity
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                padding: 5,
                borderColor: "grey",
                borderRadius: 5,
                height: 45,
              }}
              onPress={() => getNewMem()}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "grey",
                  marginTop: "auto",
                  marginBottom: "auto",
                  fontWeight: "bold",
                }}
              >
                DownLoad List...
              </Text>
            </TouchableOpacity>
            {/* to display feadback message from the server */}
            <Text style={{ textAlign: "center", color: "green" }}>
              {newMemMsg}
            </Text>

            {newMD.length > 0 ? (
              [...newMD].reverse().map(
                (
                  Nmdata,
                  index //rendering order reversed (last item shows first)
                ) => (
                  <Card
                    key={index}
                    style={{
                      backgroundColor: "#ebebe0",
                      padding: 10,
                      marginVertical: 5,
                    }}
                  >
                    {/* <Text>{Nmdata.status}</Text> */}
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        source={{ uri: Nmdata.picture }} // ✅ no `.data`
                        resizeMode="cover"
                        style={{ height: 50, width: 50, borderRadius: 25 }}
                      />
                      <View style={{ marginLeft: 15 }}>
                        <Text style={{ textAlign: "left", width: 200 }}>
                          Name: {Nmdata.name}
                        </Text>
                        <Text>Oracle: {Nmdata.oracle}</Text>
                        <Text>Phone: {Nmdata.phone}</Text>
                        <Text style={{ textAlign: "left", width: 200 }}>
                          Monthly Contribution:{" "}
                          {Number(Nmdata.amount).toLocaleString("en", {
                            style: "currency",
                            currency: "NGN",
                          })}
                        </Text>
                        <Text style={{ color: "#292902ff" }}>
                          Date: {Nmdata.createdAt}
                        </Text>
                      </View>
                    </View>
                    {/* <Text style={{ marginTop: 5 }}>Blessings</Text> */}
                  </Card>
                )
              )
            ) : (
              <Text style={{ textAlign: "center", color: "red" }}>
                No members Downloaded yet
              </Text>
            )}
          </Card>
        </View>
        <View style={{ display: show.show3 ? "flex" : "none" }}>
          {/* {" "} */}
          {/* for Pics    */}
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
                color: "blue",
                fontSize: 18,
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 1,
                textAlign: "center",
              }}
            >
              Members' Loan Requests
            </Text>
            <Hr color="blue" thickness={2} />
            <TouchableOpacity
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                padding: 5,
                borderColor: "blue",
                borderRadius: 5,
                height: 45,
              }}
              onPress={() => getMemLoan()}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "blue",
                  marginTop: "auto",
                  marginBottom: "auto",
                  fontWeight: "bold",
                }}
              >
                DownLoad Loan List...
              </Text>
            </TouchableOpacity>
            {memLoan.length > 0 ? (
              [...memLoan].reverse().map(
                (
                  MemLdata,
                  index //rendering order reversed (last item shows first)
                ) => (
                  <Card
                    key={index}
                    style={{
                      backgroundColor: "#b3e0ff",
                      padding: 10,
                      marginVertical: 5,
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        source={{ uri: MemLdata.picture }} // ✅ no `.data`
                        resizeMode="cover"
                        style={{ height: 50, width: 50, borderRadius: 25 }}
                      />
                      <View style={{ marginLeft: 15 }}>
                        <Text style={{ textAlign: "justify", width: 200 }}>
                          Name: {MemLdata.name}
                        </Text>
                        <Text>Oracle: {MemLdata.oracle}</Text>
                        <Text>Phone: {MemLdata.phone}</Text>
                        <Text style={{ textAlign: "justify", width: 200 }}>
                          Bank Name: {MemLdata.bankName}
                        </Text>
                        <Text>Bank Account: {MemLdata.bankNumber}</Text>
                        <Text>Bank Sort Code: {MemLdata.bankSort}</Text>
                        <Text>
                          Loan Request:{" "}
                          {Number(MemLdata.amount).toLocaleString("en", {
                            style: "currency",
                            currency: "NGN",
                          })}
                        </Text>
                        <Text style={{ color: "blue", textAlign: "justify" }}>
                          Application Date: {MemLdata.application_date}
                        </Text>
                        <Text>Date: {MemLdata.createdAt}</Text>
                      </View>
                    </View>
                    {/* <Text style={{ marginTop: 5 }}>Blessings</Text> */}
                  </Card>
                )
              )
            ) : (
              <Text style={{ textAlign: "center", color: "red" }}>
                No members' Loan Request Downloaded yet
              </Text>
            )}
          </Card>
        </View>
      </ScrollView>
      {/*  end entire  */}
      <View
        style={{
          marginBottom: 5,
          marginRight: 20,
          alignItems: "flex-end",
          position: "absolute",
          bottom: 2,
          right: 2,
          zIndex: 1000,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "lightgrey",
            padding: 5,
            borderRadius: 50,
            elevation: 5,
          }}
          onPress={() => {
            refView.current?.scrollTo({ y: 0, animated: true });
          }}
        >
          <MaterialCommunityIcons
            name="arrow-up-bold"
            //  refView.current?.scrollTo({ y: 0, animated: true })}};
            size={40}
            color={"grey"}
          />
        </TouchableOpacity>
      </View>
    </>
  );
  ///////

  ///delay
  async function delay(m: any) {
    new Promise((resolve) => setTimeout(resolve, m));
  }
  //////////////////await to delay loading from server
  async function Uploadcsv() {
    setShowModal(true);
    try {
      if (!csvText) {
        Alert.alert("No CSV data available to upload.");
        // return;
      }

      const results = Papa.parse(typeof csvText === "string" ? csvText : "", {
        header: true, // Converts to JSON using first row as keys
        skipEmptyLines: true,
        complete: function (results) {
          console.log("Parsed CSV data:", results.data); // Log the first row's name field
        },
      });
      ///////cause A delay

      // const delay = (m: any) =>
      //   new Promise((resolve) => setTimeout(resolve, m));
      await delay(3000);

      const response = await fetch(`${API_URL}/api/uploadcsv`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: results.data,
          monthly: parseData[1].month,
          yearly: parseData[0].yr,
        }),
      });

      const getRes = await response.json();

      if (getRes.success === true) {
        alert(getRes.message);
      } else {
        alert(getRes.message);
      }
    } catch (err) {
      if (Platform.OS === "web") {
        alert("Error,Failed to upload CSV");
      }
      // console.error(err);
      else {
        Alert.alert("Error", "Failed to upload CSV");
      }
    } finally {
      setShowModal(false);
    }
  } //////////end od async
  ////new members download
  // async function getNewMem() {
  //   try {
  //     const getNmem = await fetch(
  //       "https://morningstar-coop-backend.onrender.com/api/ViewNewMember",
  //       {
  //         method: "GET", // must match backend
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );

  //     const result = await getNmem.json();

  //     if (result.success) {
  //       setNewMD(result.data); // update state with members array
  //     } else {
  //       alert(result.message || "No members found");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to fetch, please try again");
  //   }
  // }

  async function getNewMem() {
    setShowModal(true);

    try {
      // const API_URL2 = "http://localhost:10000";///localtesting

      const response = await fetch(`${API_URL}/api/ViewNewMember`);

      // const delay = (ms: number) =>
      //   new Promise((resolve) => setTimeout(resolve, ms));
      await delay(2 * 1000);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success && Array.isArray(result.data)) {
        setNewMD(result.data); // update state with array of members
        // alert(result.message);
        setNewMemMsg(result.message);
      } else {
        setNewMemMsg(result.message);
        alert(result.message);
      }
    } catch (error) {
      console.error("Error fetching members:", error);
      alert("Failed to fetch, please try again");
    } finally {
      setShowModal(false);
    }
  }
  //////for membersLoan function
  async function getMemLoan() {
    setShowModal(true);

    try {
      // const API_URL2 = "http://localhost:10000";//local testing

      const response = await fetch(`${API_URL}/api/getMemberLoan`);

      // const delay = (ms: number) =>s
      //   new Promise((resolve) => setTimeout(resolve, ms));
      await delay(2 * 1000);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success && Array.isArray(result.data)) {
        setMemLoan(result.data); // update state with array of members
        // alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error fetching members:", error);
      alert(`Failed to fetch, please try again: ${error}`);
    } finally {
      setShowModal(false);
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
    height: 45,
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
