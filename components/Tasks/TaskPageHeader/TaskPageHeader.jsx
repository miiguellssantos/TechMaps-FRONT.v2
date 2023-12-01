import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";

const TaskPageHeader = ({ pageName }) => {
  return (
    <LinearGradient
      style={styles.header}
      locations={[0, 1]}
      colors={["#eee5e9", "#ace894"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View>
        <Text style={styles.title}>{pageName}</Text>
      </View>
    </LinearGradient>
  );
};

export default TaskPageHeader;
