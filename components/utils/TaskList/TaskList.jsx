import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { pythonTasks } from "../../../data/taskData";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ language }) => {
  if (language === "PYTHON") {
    console.log(pythonTasks);
    return (
      <View>
        {pythonTasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </View>
    );
  } else if (language === "JAVA") {
    javaTasks.map((task) => {
      <TaskItem title={task.title} />;
    });
  }
};

export default TaskList;
