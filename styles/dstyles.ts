import { StyleSheet } from "react-native";
// This file contains the styles for the Billionaire's Club app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    // borderBottomColor: "green",
    // borderBottomWidth: 2,
    width: "80%",
    position: "relative",
    // textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
    padding: 5,
    backgroundColor: "lightgrey",
    textAlignVertical: "center",
    fontSize: 18,
    marginTop: 5,
  },
  textWhite: {
    color: "white",
    opacity: 0.8,
    fontSize: 20,
    fontWeight: "bold",
  },
  border: {
    borderColor: "green",
    borderWidth: 1,
    padding: 8,
    margin: 10,
  },
  smalltext: {
    color: "green",
    fontStyle: "italic",
  },
});

export default styles;
