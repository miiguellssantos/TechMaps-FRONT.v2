import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    justifyContent: "space-around",
    color: "#FFF",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 20,
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  headerText: {
    fontFamily: "Righteous",
    fontSize: 30,
    color: "#FFF",
  },
  loginText: {
    fontSize: 28,
    fontFamily: "InterRegular",
    color: "#FFF",
    marginBottom: 30,
  },
  gradient: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    justifyContent: "center",
  },
  container: {
    paddingHorizontal: 25,
  },
  inputView: {
    flexDirection: "row",
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  input: {
    color: "#FFF",
    marginLeft: 5,
    flex: 1,
    paddingVertical: 0,
  },
  esqueceuText: {
    color: "#eee5e9",
    opacity: 0.7,
    fontFamily: "InterExtraBold",
  },
  loginButton: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loginButtonText: {
    color: "#FFF",
    fontFamily: "Righteous",
  },
  textLoginCom: {
    textAlign: "center",
    color: "#eee5e9",
    marginVertical: 30,
  },
  googleButton: {
    backgroundColor: "#FFF",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    flexDirection: "row",
  },
  googleText: {
    fontFamily: "DMSans",
    paddingLeft: 10,
  },
  githubText: {
    fontFamily: "DMSans",
    paddingLeft: 10,
    color: "#FFF",
  },
  githubButton: {
    backgroundColor: "#2059AA",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    height: 24,
    width: 24,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  registerButton: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    marginBottom: 30,
  },
});

export default styles;
