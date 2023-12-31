import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { pythonTasks, javaTasks, javascriptTasks } from "../../../data/taskData";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ language }) => {
  if (language === "PYTHON") {
    return (
      <ScrollView style={{marginBottom: 40}}>
        {pythonTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ScrollView>
    );
  } else if (language === "JAVA") {
    return (
      <ScrollView style={{marginBottom: 40}}>
        {javaTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ScrollView>
    );
  } else if (language === "JAVASCRIPT") {
    return (
      <ScrollView style={{marginBottom: 40}}>
        {javascriptTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ScrollView>
    );
  }
};

export default TaskList;
