import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  count: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center"
  },
  button: {
    width: 80,
    height: 32,
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    margin: 8
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold"
  }
});
