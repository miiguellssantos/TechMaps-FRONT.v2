import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

const TaskItem = (task) => {
  const title = task.title
  const description = task.description

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default TaskItem;
