import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    padding: 10,
  },
  title: {
    fontFamily: "Righteous",
    color: "#ACE894",
    fontSize:25,
    marginBottom: 5,
  },
  description: {
    color: "#F3F3F4",
    fontSize: 15,
  },
  linksTitle: {
    fontFamily: "Righteous",
    color: "#ACE894",
    marginTop: 10,
    marginBottom: 5,
    fontSize: 15

  },
  linkButton: {
    marginBottom: 5,
  },
  link: {
    color: "#f3f3f4",
    textDecorationLine: "underline",
  },
});

export default styles;
