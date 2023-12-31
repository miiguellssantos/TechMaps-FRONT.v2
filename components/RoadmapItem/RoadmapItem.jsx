import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./style";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { timeFormat } from "../../utils/timeFormat";
import { Toast } from "react-native-toast-notifications";

const languageIcons = {
  JAVA: "language-java",
  PYTHON: "language-python",
  JAVASCRIPT: "language-javascript",
};

const RoadmapItem = ({ roadmap }) => {
  const { deleteRoadmapContext } = useContext(AuthContext);
  const roadmapId = roadmap.id;
  const roadmapTitle = roadmap.title;
  const timeSpent = roadmap.totalTime;
  const commitsQuantity = roadmap.commits;
  const language = roadmap.language;
  const iconName = languageIcons[roadmap.language];
  const navigation = useNavigation();

  const deleteRoadmap = (roadmapId) =>
    Alert.alert("Tem certeza?", "Deseja mesmo deletar este roadmap?", [
      {
        text: "Cancelar",
        onPress: () => Toast.show("Remoção cancelada."),
        style: "cancel",
      },
      { text: "Confirmar", onPress: () => deleteRoadmapContext(roadmapId) },
    ]);

  return (
    <LinearGradient
      style={styles.roadmapItem}
      locations={[0, 1]}
      colors={["#53bb5a", "#306b34"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <TouchableOpacity
        style={styles.roadmapContent}
        onLongPress={() => deleteRoadmap(roadmapId)}
      >
        <View style={styles.icon}>
          <Icon name={iconName} size={80} color={"#FFF"} />
          <View style={styles.iconChild} />
        </View>

        <View style={styles.content}>
          <View style={styles.stats}>
            <Text style={styles.roadmapItemTitle}>{roadmapTitle}</Text>
            <View style={styles.statLine1}>
              <Icon name={"clock-time-nine-outline"} size={25} color={"#FFF"} />
              <Text style={styles.textTypo}>{timeFormat(timeSpent)}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TaskPage", {
                language: language,
                title: roadmapTitle,
              });
            }}
          >
            <Icon
              style={{ marginRight: 10 }}
              name={"location-enter"}
              size={50}
              color={"#FFF"}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default RoadmapItem;
