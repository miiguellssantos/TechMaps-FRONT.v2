import React, { useContext, useEffect, useRef } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

import PageHeader from "../../components/PageHeader/PageHeader";
import CreateRoadmapButton from "../../components/Buttons/CreateRoadmapButton/CreateRoadmapButton";
import RoadmapList from "../../components/RoadmapList/RoadmapList";
import { AuthContext } from "../../context/AuthContext";

const RoadmapsPage = ({ navigation }) => {
  const { fetchRoadmaps } = useContext(AuthContext);
   
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      fetchRoadmaps();
    }, 1000);

    return () => {
      // Limpa o intervalo quando o componente for desmontado
      clearInterval(intervalRef.current);
    };
  }, [fetchRoadmaps]);

  // Executa somente uma vez para configurar o intervalo
  useEffect(() => {
    // Limpa o intervalo ao desmontar o componente
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

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

/* import React, { useContext, useEffect} from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

import PageHeader from "../../components/PageHeader/PageHeader";
import CreateRoadmapButton from "../../components/Buttons/CreateRoadmapButton/CreateRoadmapButton";
import RoadmapList from "../../components/RoadmapList/RoadmapList";
import { AuthContext } from "../../context/AuthContext";

const RoadmapsPage = ({ navigation }) => {
  const { fetchRoadmaps } = useContext(AuthContext);

  useEffect(() => {
      fetchRoadmaps();
    }, [fetchRoadmaps]);

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

export default RoadmapsPage; */
