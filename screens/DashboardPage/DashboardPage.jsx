import { View, Text } from "react-native";
import React, {useContext, useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../RoadmapsPage/style";

import PageHeader from "../../components/PageHeader/PageHeader";
import Dashboard from "../../components/Dashboard/Dashboard";
import ConcludedRoadmapList from "../../components/ConcludedRoadmapList/ConcludedRoadmapList"
import { AuthContext } from "../../context/AuthContext";

const DashBoardPage = () => {
  const {fetchConcludedRoadmaps, concludedRoadmapsList} = useContext(AuthContext)

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
