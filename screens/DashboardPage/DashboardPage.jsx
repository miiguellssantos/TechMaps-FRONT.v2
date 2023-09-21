import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../RoadmapsPage/style";

import PageHeader from "../../components/PageHeader/PageHeader";
import Dashboard from "../../components/Dashboard/Dashboard";
import ConcludedRoadmapList from "../../components/ConcludedRoadmapList/ConclcudedRoadmapList"

const DashBoardPage = () => {
  return (
    <SafeAreaView style={styles.body}>
      <PageHeader pageName={"DASHBOARD"} />
      <View>
        <Dashboard />
        <Text style={{ color: "#FFF", marginTop: 10, fontFamily: "InterSemiBold" }}>Roadmaps Concluídos:</Text>
        <ConcludedRoadmapList />
      </View>
    </SafeAreaView>
  );
};

export default DashBoardPage;
