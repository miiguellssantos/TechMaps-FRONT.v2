import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./style";

const RoadmapItem = ({ roadmapTitle, timeSpent, commitsQuantity }) => {
  return (
    <LinearGradient
      style={styles.roadmapItem}
      locations={[0, 1]}
      colors={["#53bb5a", "#306b34"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.icon}>
        <Icon name={"language-python"} size={80} color={"#FFF"} />
        <View style={styles.iconChild} />
      </View>

      <View style={styles.content}>
        <View style={styles.stats}>
          <Text style={styles.roadmapItemTitle}>{roadmapTitle}</Text>
          <View style={styles.statLine1}>
            <Icon name={"clock-time-nine-outline"} size={25} color={"#FFF"} />
            <Text style={styles.textTypo}>{timeSpent}</Text>
          </View>
          <View style={styles.statLine1}>
            <Icon name={"source-commit"} size={25} color={"#FFF"} />
            <Text style={[styles.text2, styles.textTypo]}>
              {commitsQuantity}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Icon
            style={{ marginRight: 10 }}
            name={"location-enter"}
            size={50}
            color={"#FFF"}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default RoadmapItem;
