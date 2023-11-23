import React from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskPageHeader from "../../components/Tasks/TaskPageHeader/TaskPageHeader";
import TaskList from "../../components/utils/TaskList/TaskList";
import styles from "./style";

const TaskPage = ({ route }) => {
  const language = route.params.language;
  const title = route.params.title;
  return (
    <SafeAreaView style={styles.container}>
      <TaskPageHeader pageName={title} />
      <TaskList language={language} />
    </SafeAreaView>
  );
};

export default TaskPage;
