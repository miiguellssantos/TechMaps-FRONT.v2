import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

import PageHeader from "../../components/PageHeader/PageHeader";
import CreateRoadmapButton from "../../components/Buttons/CreateRoadmapButton/CreateRoadmapButton";

const RoadmapsPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.body}>
      <PageHeader navigation={navigation} pageName="ROADMAPS" />
      <View>
        <CreateRoadmapButton />
      </View>
    </SafeAreaView>
  );
};

export default RoadmapsPage;
