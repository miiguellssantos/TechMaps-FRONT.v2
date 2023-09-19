import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  backButton: {
    backgroundColor: "#ACE894",
    padding: 10,
    width: 71,
    marginLeft: 10,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  backText: {
    fontFamily: "Righteous",
    color: "#306B34",
    flex: 1,
  },
  logoutButton: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "red",
    margin: 20,
    borderRadius: 20,
  },
});

export default styles;
