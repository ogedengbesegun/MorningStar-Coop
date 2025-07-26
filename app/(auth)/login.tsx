import { API_URL as ENV_API_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import { Link, useRouter } from "expo-router"; // Ensure you have expo-router installed
import React, { useRef, useState } from "react";
import { useUser } from "../../context/UserContext";
// import CustomModal from "../../utilities/CustomModal";
import { Ionicons } from "@expo/vector-icons";
import ReusableModal from "../../utilities/ReusableModal";
import Card from "../../utilities/card";
import { lastMonth } from "../../utilities/mydate";
// import Constants from 'expo-constants';
//
import Hr from '../../utilities/hr'
// import * as SecureStore from "expo-secure-store";
// import Constants from "expo-constants";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../styles/dstyles"; // Adjust the path as necessary
import ModalContent from "../../utilities/menuModal";

export default function login() {
  const API_URL =
    ENV_API_URL || "https://morningstar-coop-backend.onrender.com";

  // console.log(`${API_URL}`);
  //other Modals
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setmodalText] = useState("");
  ////Modals  for change
  const [modalChangeVisible, setModalChangeVisible] = useState(false);
  const [modalChangeText, setmodalChangeText] = useState("");
  ////////

  /////MainModal
  const [visible, setVisible] = React.useState(false);
  const [textChange, setTextChange] = useState("Login");
  ///MainModal

  ///to get value of the compo
  const [oracle, setOracle] = useState("");
  const [pword, setPword] = useState("");
  ///////

  ////refrence the new textInput comp
  const refOracle = useRef<TextInput>(null);
  const refPword = useRef<TextInput>(null);
  /////
  /////////
  //to get value for forgot comp
  const [oraclededuct, setOraclededuct] = useState("");
  const [pwordn, setPwordn] = useState("");
  const [changeTextOraclededuct, setChangeTextOraclededuct] =
    useState("Change Password");
  ///make refrence to the compo
  const refOraclededuct = useRef<TextInput>(null);
  const refPwordn = useRef<TextInput>(null);
  /////
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  /////////
  const menuIcon = <Ionicons name="menu" size={35} color="black" />;
  const menuIcon2 = <Ionicons name="close" size={35} color="red" />;
  const [menuDialog, setMenuDialog] = useState(false);
  const toggleMenuIcon = () => setMenuDialog(!menuDialog);
  ////////////
  ///for Navigation btw screens
  const nav = useNavigation<any>(); // Ensure you have the correct type for navigation
  const router = useRouter();
  /////////////////////
  const { setUser } = useUser();
  //////////////////
  const [dialogMenu, setDialogMenu] = useState(false);
  const scrollRef = useRef(null);
  const refWhy = useRef(null);
  const refVision = useRef(null);
  const refMission = useRef(null);
  // ///////
 
  return (
    <>
      {/* <ImageBackground
      source={require("../assets/images/react-logo.png")}
      resizeMode="contain"
      style={{  flex: 1, justifyContent: "center", alignItems: "center" }}
    > */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={{
            backgroundColor: "green",
            flexDirection: "row",
            justifyContent: "center",
          }}
          ref={scrollRef}
        >
          <TouchableOpacity
            style={{ marginLeft: 15, alignSelf: "center" }}
            onPress={() => {
              toggleMenuIcon();
              setDialogMenu(true);
            }}
          >
            {menuDialog ? menuIcon : menuIcon}

            {/* {dialogMenu ? menuModal : null} */}
          </TouchableOpacity>
          <Text
            style={[
              styles.textWhite,
              {
                textAlign: "center",
                marginTop: 0,
                paddingTop: 7,
                paddingBottom: 7,
                paddingRight: 20,
                paddingLeft: 20,
              },
            ]}
          >
            Welcome to Morning-Star Cooperative Society 🌿
          </Text>

          <Modal
            visible={dialogMenu}
            transparent
            animationType="slide"
            onRequestClose={() => setDialogMenu(false)}
            // style={{ marginTop: 70, width: 15 }}
          >
            <View
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                marginTop: 0,
                height: "100%",
              }}
              // onResponderGrant={()=>{
              //   setDialogMenu(false);
              //   toggleMenuIcon(); // switch icon back
              // }}
            >
              <ModalContent
                scrollRef={scrollRef}
                refWhy={refWhy}
                refVision={refVision}
                refMission={refMission}
                setDialogMenu={setDialogMenu}
                toggleMenuIcon={toggleMenuIcon}
              />
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  marginTop: 20,
                  borderStyle: "solid",
                  borderColor: "white",
                  borderWidth: 1,
                  borderRadius: 50,
                  height: 50,
                  width: 50,

                  // marginLeft: 25,
                }}
                onPress={() => {
                  setDialogMenu(false);
                  toggleMenuIcon(); // switch icon back
                }}
              >
                <Ionicons
                  style={{
                    textAlign: "center",
                    margin: "auto",
                    // marginBottom: "auto",
                  }}
                  name="close"
                  size={35}
                  color="rgba(243, 34, 34, 0.5)"
                />
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <ScrollView ref={scrollRef}>
          <View
            // Img Src={require("../assets/images/react-logo.png")}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: "white",
            }}
          >
            <Image
              //https://reactnative.dev/img/tiny_logo.png
              // onLoad={() => dialog("Welcome to Egbe Alajeseku")}
              source={require("../../assets/images/d_img/money-graphic-3d.jpg")}
              // source={{ uri:"https://reactnative.dev/img/tiny_logo.png" }}
              style={{
                width: 320,
                height: 250,
                marginBottom: 10,
                marginTop: 5,
              }}
            />

            {/* login Details */}
            {/* <ImageBackground
              source={require("../../assets/images/d_img/money-graphic-3d.jpg")}
              resizeMode="cover"
            > */}
            <View
              style={{
                borderWidth: 2,
                borderColor: "lightgreen",
                borderRadius: 5,
                padding: 5,
                width: 320,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  marginTop: 5,
                  marginBottom: 5,
                  color: "dark",
                  fontSize: 20,
                  textDecorationLine: "underline",
                  textAlign: "center",
                }}
              >
                Members' Login
              </Text>

              <ReusableModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
              >
                <Text style={{ color: "grey", marginBottom: 5 }}>
                  MorningStar Says...
                </Text>
                <Text
                  style={{ textAlign: "left", color: "green", fontSize: 17 }}
                >
                  {modalText}
                </Text>
              </ReusableModal>

              {/* oracle */}
              <Text
                style={[styles.smalltext, { marginBottom: 0, marginLeft: 30 }]}
              >
                Oracle Number
              </Text>
              <TextInput
                ref={refOracle}
                value={oracle}
                placeholder="Oracle Number"
                placeholderTextColor="grey"
                style={[styles.input, { marginTop: 0, padding: 15 }]}
                maxLength={10}
                keyboardType="numeric"
                onChangeText={setOracle}
              ></TextInput>

              {/* password */}
              <Text
                style={[
                  styles.smalltext,
                  { marginBottom: 0, marginTop: 5, marginLeft: 30 },
                ]}
              >
                Password
              </Text>
              <TextInput
                ref={refPword}
                value={pword}
                placeholder="Password"
                placeholderTextColor="grey"
                style={[styles.input, { marginTop: 0, padding: 15 }]}
                maxLength={15}
                secureTextEntry={true}
                keyboardType="default"
                onChangeText={setPword}
              ></TextInput>
              {/* Dialog Text View for info */}
              {/* <Text style={{fontSize:15,fontStyle:"italic"}}></Text> */}

              {/* TouchableOpacity */}

              <TouchableOpacity
                style={[
                  styles.border,
                  {
                    backgroundColor: "white",
                    borderRadius: 10,
                    marginTop: 15,
                    width: "70%",
                    marginRight: "auto",
                    marginLeft: "auto",
                    padding: 10,
                  },
                ]}
                onPress={async () => {
                  setTextChange("Wait Loading...");
                  await loginUser();
                  setTextChange("Login");
                }}
              >
                <Text
                  style={{
                    color: "green",
                    //   width: 200,
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  {textChange}
                </Text>
              </TouchableOpacity>

              {/* Link */}
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <Text style={{ textAlign: "center", color: "grey" }}>OR </Text>
                <TouchableOpacity onPress={() => setVisible(true)}>
                  <Text style={{ color: "red" }}>forgot password?</Text>
                </TouchableOpacity>

                <Modal
                  visible={visible}
                  transparent
                  animationType="slide"
                  onRequestClose={() => setVisible(false)}
                >
                  <View style={[styles2.overlay]}>
                    <View
                      style={[
                        styles2.dialog,
                        { width: 300, alignSelf: "center" },
                      ]}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: "center",
                          color: "green",
                          textDecorationLine: "underline",
                        }}
                      >
                        Change your Password Instructions?
                      </Text>
                      <Text
                        style={{
                          // width: 350,
                          textAlign: "left",
                          color: "grey",
                          marginRight: "auto",
                          marginLeft: "auto",
                          fontSize: 16,
                          padding: 10,
                        }}
                      >
                        Enter Oracle Number with last Month Deduction without
                        space e.g 141516,200000 Oracle Number e.g 141516 and
                        last Month Deduction e.g 200000 {"\n"}Note: No space
                        fullstop is allowed but put comma as separator.
                      </Text>
                      {/* reuseableModal */}
                      <ReusableModal
                        visible={modalChangeVisible}
                        onClose={() => setModalChangeVisible(false)}
                      >
                        <Text style={{ color: "grey", marginBottom: 5 }}>
                          MorningStar Says...
                        </Text>
                        <Text
                          style={{
                            textAlign: "left",
                            color: "green",
                            fontSize: 17,
                          }}
                        >
                          {modalChangeText}
                        </Text>
                      </ReusableModal>

                      {/*  */}
                      <TextInput
                        ref={refOraclededuct}
                        value={oraclededuct}
                        placeholder="Oracle with last deduction "
                        keyboardType="numeric"
                        onChangeText={(text) => setOraclededuct(text.trim())}
                        style={[
                          styles.input,
                          {
                            fontSize: 15,
                            width: "100%",
                            padding: 13,
                          },
                        ]}
                      ></TextInput>
                      {/*  */}
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          // justifyContent: "space-between",
                        }}
                      >
                        <TextInput
                          ref={refPwordn}
                          value={pwordn}
                          placeholder="Enter New Password"
                          secureTextEntry={!isPasswordVisible}
                          maxLength={15}
                          keyboardType="default"
                          style={[
                            styles.input,
                            {
                              fontSize: 15,
                              width: "100%",
                              padding: 13,
                            },
                          ]}
                          onChangeText={(text) => setPwordn(text.trim())}
                        ></TextInput>
                        {/* eye eye-off */}
                        <TouchableOpacity
                          onPress={togglePasswordVisibility}
                          style={{ zIndex: 2 }}
                        >
                          <Ionicons
                            style={{
                              marginLeft: -35,
                            }}
                            name={isPasswordVisible ? "eye" : "eye-off"}
                            size={35}
                            color={isPasswordVisible ? "green" : "grey"}
                            // onPress={}
                          />
                        </TouchableOpacity>
                      </View>
                      {/*  */}
                      <TouchableOpacity
                        onPress={async () => {
                          setChangeTextOraclededuct("Password Changing...");
                          await changepword();
                          setChangeTextOraclededuct("Change Password");
                        }}
                        style={[
                          {
                            padding: 13,
                            backgroundColor: "lightgreen",
                            borderRadius: 5,
                            marginTop: 15,
                          },
                        ]}
                      >
                        <Text
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "600",
                          }}
                        >
                          {changeTextOraclededuct}
                          {/* Change Password */}
                        </Text>
                      </TouchableOpacity>

                      {/* Close Button */}
                      <TouchableOpacity
                        onPress={() => {
                          // refPwordn.current?.clear();
                          // refOraclededuct.current?.clear();
                          setPwordn("");
                          setOraclededuct("");
                          ///
                          ///make eye revert
                          setIsPasswordVisible(false);
                          ///setTime
                          setTimeout(() => {
                            setVisible(false);
                          }, 500);
                        }}
                        style={[
                          {
                            padding: 13,
                            backgroundColor: "lightblue",
                            borderRadius: 5,
                            marginTop: 5,
                            // width: 100,
                            // marginRight: "auto",
                            // marginLeft: "auto",
                          },
                        ]}
                      >
                        <Text
                          style={{
                            color: "red",
                            textAlign: "center",
                            fontWeight: "600",
                          }}
                        >
                          Close
                        </Text>
                      </TouchableOpacity>
                      {/* </View> */}
                    </View>
                  </View>
                </Modal>
              </View>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 10,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "black",
                  padding: 10,
                  borderRadius: 7,
                  marginRight: "auto",
                  marginLeft: "auto",
                  marginBottom: 10,
                  backgroundColor: "lightgreen",
                  width: 200,
                }}
              >
                <Link
                  href={"/(auth)/signup"}
                  style={{ textAlign: "center", padding: 5 }}
                >
                  <Text
                    style={{
                      textTransform: "capitalize",
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    create an account
                  </Text>
                </Link>
              </View>
            </View>
            {/* </ImageBackground> */}
            {/* New Menmbers */}
            {/* <View
              style={{
                elevation: 7,
                borderStyle: "solid",
                borderWidth: 2,
                padding: 5,
              }}
            > */}
            {/* are you a teacher? */}
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Are you a Civil Servant in Lagos?
            </Text>
            <Link
              href={"(auth)/joinus"}
              style={{
                color: "purple",
                elevation: 5,
              }}
            >
              <Text style={{ textAlign: "center" }}>Join Us Now 🌱</Text>
            </Link>

           <View ref={refWhy}> 
             <Text style={styles2.joinUsMsgStyle}>
              <Text style={{ fontSize: 23 }} >
                Why Morning Star Cooperative Society?
              </Text>
              {joinUsMsg}
            </Text>
           </View>
            <Link href={"(auth)/joinus"} style={styles2.joinUs}>
              <Text style={styles2.joinUsText}>Join Us Now 🌱</Text>
            </Link>
            <Link href={"(auth)/callus"} style={styles2.joinUs}>
              <Text style={styles2.callUsText}>For inquiries, call us 📞</Text>
            </Link>
            {/* </View> */}
            <View
              style={{
                backgroundColor: "green",
                width: 300,

                borderRadius: 8,
              }}
            >
              {/* Vision Statement */}
              <View
                style={{ width: 290, marginRight: "auto", marginLeft: "auto" }}
              ref={refVision}
              >
                <Card style={[, { backgroundColor: "white" }]}>
                  <Text style={styles2.vmHeader} >
                    Our Vision 🍀
                  </Text>
                  <Text style={styles2.vmStatement}>{vision}</Text>
                </Card>
               
              </View>
              {/* <Hr color='red' thickness={4} /> */}
              {/* Mission Statement */}
              <View
                style={{ width: 290, marginRight: "auto", marginLeft: "auto" }}
              ref={refMission}
              >
                <Card style={[, { backgroundColor: "white", marginTop: 1 }]}>
                  <Text style={styles2.vmHeader} >
                    Our Mission 🌴
                  </Text>
                  <Text style={styles2.vmStatement}>{mission}</Text>
                </Card>
              </View>
            </View>
            {/* Image Success & Story msg */}
            <View
              style={{
                backgroundColor: "green",
                marginBottom: 15,
                borderRadius: 10,
                marginTop: 15,
              }}
            >
              <Image
                source={require("../../assets/images/d_img/groupMSC.jpg")}
                style={{
                  width: 320,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <Text
                style={{ color: "white", margin: 5, padding: 5, fontSize: 15 }}
              >
                Our Story Over the years are success...
              </Text>
            </View>
          </View>
          {/*  */}
          <View></View>
          {/*  */}
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );

  /////////////////
  async function loginUser() {
    try {
      // console.log(`${API_URL}/api/login`);

      const login = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oracle: oracle,
          pword: pword,
        }),
      });
      const response = await login.json();

      if (response.success === true) {
        setModalVisible(true);
        setmodalText(response.message);
        
        // Set the user context with the user's name and password
        setUser({
          name:
            response.user.full_name.split(" ")[1] ??
            response.user.full_name.split(" ")[0],
          oracle: response.user.oracle,
          password: response.user.password, // Store the password securely if needed
        });

        const timer = setTimeout(() => {
          router.replace("/indextab"); // route to the tabs screen after login
        }, 3000);

        //////////////////

        refPword.current?.clear();
        refOracle.current?.clear();

        // refPword.current?.setState('');
        ////////set Oracle into Users device
        // await SecureStore.setItemAsync("myOracle", `${response.oracle}`);
      } else if (response.success === false) {
        setModalVisible(true);
        setmodalText(response.message);
        // alert(response.message);
        refPword.current?.clear();
        return;
      }
    } catch (error) {
      setModalVisible(true);
      setmodalText(`${error} Server NOT responding, try again later`);
      // alert(`${error} Server NOT responding, try again later`);
    } finally {
      // setModalVisible(false);
    }
  }
  ///////
  ///change pword function
  async function changepword() {
    console.log(API_URL);
    try {
      const changep = await fetch(`${API_URL}/api/change`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lastMonth: lastMonth,
          oraclededuct: oraclededuct,
          pwordn: pwordn,
        }),
      });
      const response = await changep.json();
      if (response?.success === true) {
        setModalChangeVisible(true);
        setmodalChangeText(response.message);
        // alert(response?.message);
        /////
        refOraclededuct.current?.clear();
        refPwordn.current?.clear();
      } else if (response?.success === false) {
        setModalChangeVisible(true);
        setmodalChangeText(response.message);
        // alert(response?.message);
        /////
        refOraclededuct.current?.clear();
        refPwordn.current?.clear();
      }
    } catch (error) {
      setModalChangeVisible(true);
      setmodalChangeText("Check your Internet Connection");

      // alert("Check  your Internet Connection");
    }
  }
  ///////
}

// This function returns the stored oracle number (freeman)
// export async function transf(){
// This function is a placeholder for any transfer logic you might want to implement.
// It can be used to handle data transfer or other operations as needed.

// }
// Reasonable implementation of useRef for React Native/React context
// Exporting freeman to be used in other parts of the app
const styles2 = StyleSheet.create({
  container: { marginTop: 100, padding: 20 },

  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  dialog: {
    margin: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  joinUs: {
    textAlign: "center",
    padding: 15,
    backgroundColor: "white",
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 10,
    width: 300,
  },
  joinUsText: {
    textTransform: "capitalize",
    color: "purple",
    fontWeight: "bold",
    fontSize: 25,
  },
  callUsText: {
    textTransform: "capitalize",
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
  joinUsMsgStyle: {
    backgroundColor: "green",
    color: "white",
    width: 300,
    fontSize: 16,
    padding: 20,
    textAlign: "center",
    borderRadius: 8,
    margin: 5,
    elevation: 10,
  },
  vmStatement: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    padding: 8,
  },
  vmHeader: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "green",
  },
});
// This is a simple modal dialog component that can be used to confirm actions or display messages.
const joinUsMsg = `

Just like the color green, your arrival brings a sense of renewal, hope, and promise.

At Morning Star, we believe in growing together — rooted in trust, unity, and a shared vision for prosperity. Your membership marks a new beginning, not just for you, but for the collective strength of our society.

Together, we thrive — just like a flourishing garden.

Welcome to a future of growth and abundance. 

Welcome to Morning Star. 🌱`;
const mission = `To provide our members with accessible financial services, 
prompt financial access and support, and a 
trusted platform for growth—fostering a cooperative community where 
wealth is built, opportunities are shared, and success is multiplied.`;
const vision = `To be a beacon of financial empowerment, where every member achieves
 financial independence, prosperity, and the collective strength to thrive.`;
