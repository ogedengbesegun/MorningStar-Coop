import { StyleSheet } from "react-native";
// This file contains the styles for the Billionaire's Club app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    // marginTop: 20,
    borderRadius: 5,
    // height: 30,
    borderColor: "gray",
    padding:5,
    // borderWidth: 1,
    width: "85%",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "green",
    fontSize:18,
    borderBottomColor: "green",
    borderBottomWidth: 1,
  },
  text: {
    color: "green",
    opacity: 0.8,
    fontSize: 20,
    fontWeight: "bold",
  },
  border: {
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default styles;
