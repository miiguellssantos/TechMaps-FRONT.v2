import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#eee5e9",
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "Righteous",
    fontSize: 30,
    color: "#ACE894",
  },
  startButtonGradient: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 25,
  },
  startButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  startButtonText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Righteous",
  },
  image: {
    height: 250,
    width: 330,
    marginTop: 25,
  },
  content: {
    width: "90%",
    marginTop: 45,
  },
});

export default styles;
