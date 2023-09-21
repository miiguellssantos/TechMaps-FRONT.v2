import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import RoadmapItem from "../RoadmapItem/RoadmapItem";

const RoadmapList = () => {
    const { fetchRoadmaps } = useContext(AuthContext)
  const { dashboardId, userToken } = useContext(AuthContext);
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRoadmaps(setRoadmaps, setLoading);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#FFF" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {roadmaps.map((roadmap) => (
        <RoadmapItem key={roadmap.id} roadmap={roadmap} />
      ))}
    </ScrollView>
  );
};

const styles = {
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  loadingText: {
    color: "#FFF",
    textAlign: "center",
    marginTop: 10,
  },
  noRoadmapsContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  noRoadmapsText: {
    color: "#FFF", // Defina a cor desejada para o texto
    fontSize: 15, // Defina o tamanho de fonte desejado
    textAlign: "center",
  },
};

export default RoadmapList;
