import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnCriarRoadmap: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  modalCriarRoadmap: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
    backgroundColor: "#306B34",
    borderRadius: 20,
  },
  btnCancelar: {
    backgroundColor: "red",
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  txtBtnCancelar: {
    color: "#FFF",
    fontFamily: "Righteous",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnSalvar: {
    backgroundColor: "#FFF",
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  txtBtnSalvar: {
    color: "#306b34",
    fontFamily: "Righteous",
  },
  header: {
    padding: 10,
    justifyContent: "flex-start",
  },
  formHeader: {
    fontSize: 30,
    color: "#FFF",
    fontFamily: "Righteous",
  },
  inputs: {
    gap: 30,
    marginVertical: 20,
  },

  label: {
    color: "#FFF",
    fontFamily: "Righteous",
    marginBottom: 8,
    fontSize: 15,
  },
});

export default styles;
