import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

import PageHeader from "../../components/PageHeader/PageHeader";
import CreateRoadmapButton from "../../components/Buttons/CreateRoadmapButton/CreateRoadmapButton";
import RoadmapList from "../../components/RoadmapList/RoadmapList";

const RoadmapsPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.body}>
      <PageHeader navigation={navigation} pageName="ROADMAPS" />
      <View>
        <CreateRoadmapButton />
        <RoadmapList />
      </View>
    </SafeAreaView>
  );
};

export default RoadmapsPage;
