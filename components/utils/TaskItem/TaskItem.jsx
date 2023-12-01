import React from "react";
import { Text, View, Linking, TouchableOpacity } from "react-native";
import styles from "./style";

const ExternalLink = (props) => {
  const { url } = props;

  const onPress = () =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
    });

  return (
    <TouchableOpacity onPress={onPress} style={styles.linkButton}>
      <Text style={styles.link}>{url}</Text>
    </TouchableOpacity>
  );
};

const TaskItem = (task) => {
  const title = task.task.title;
  const description = task.task.description;
  const taskLinks = task.task.links;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.linksTitle}>Links para aprender mais:</Text>
      {taskLinks.map((link) => {
        return (
          <ExternalLink url={link} />
        );
      })}
    </View>
  );
};

export default TaskItem;
