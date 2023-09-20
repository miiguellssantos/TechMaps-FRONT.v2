import { TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";

const CreateRoadmapButton = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <LinearGradient
        style={styles.btnCriarRoadmap}
        locations={[0, 1]}
        colors={["#53bb5a", "#306b34"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Icon name={"plus-circle"} color={"#FFF"} size={25} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CreateRoadmapButton;
