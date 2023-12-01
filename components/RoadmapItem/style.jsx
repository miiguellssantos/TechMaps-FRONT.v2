import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  roadmapItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    padding: 8,
    borderRadius: 15,
    overflow: "hidden",
  },
  icon: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconChild: {
    borderStyle: "solid",
    borderColor: "#eee5e9",
    borderRadius: 10,
    borderRightWidth: 2,
    width: 2,
    height: 72,
    marginLeft: 5,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stats: {
    alignSelf: "flex-start",
    padding: 3,
    marginLeft: 10,
  },
  roadmapItemTitle: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "left",
    fontFamily: "Righteous",
  },
  statLine1: {
    marginTop: 2,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  textTypo: {
    marginLeft: 2,
    color: "#FFF",
    fontFamily: "InterSemiBold",
    fontSize: 15,
  },
  statLineRightItem: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default styles;
