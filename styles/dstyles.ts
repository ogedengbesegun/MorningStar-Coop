import { StyleSheet } from "react-native";
// This file contains the styles for the Billionaire's Club app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderRadius: 50,
    borderColor: "gray",
    borderBottomColor: "green",
    borderBottomWidth: 2,
    width: "80%",
    textAlign: "center",
    // alignItems: "center",
    backgroundColor: "white",
    // fontSize: 18,
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
