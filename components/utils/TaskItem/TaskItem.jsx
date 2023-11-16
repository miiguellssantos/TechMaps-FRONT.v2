import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, LinkingContext } from "@react-navigation/native";

const TaskItem = (task) => {
  const { title, description, links } = task;

  function linkExternal(link) {
    LinkingContext.openURL({link});
  }

  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      {links.map((link) => {
        <Pressable onPress={linkExternal(link)}>
            <Text>{link}</Text>
        </Pressable>
      })}
    </View>
  );
};

export default TaskItem;
