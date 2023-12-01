import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import RoadmapItem from "../RoadmapItem/RoadmapItem";
import { AuthContext } from "../../context/AuthContext";

const RoadmapList = () => {
  const [loading, setLoading] = useState(false); 
  const { roadmapsList, fetchRoadmaps } = useContext(AuthContext)

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#FFF" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  if (roadmapsList == []) {
    return (
      <View style={styles.noRoadmapsContainer}>
        <Text style={styles.noRoadmapsText}>
          Você ainda não possui nenhum roadmap.
        </Text>
      </View>
    );
  } else {
    return (
      <ScrollView>
        {roadmapsList.map((roadmap) => (
          <RoadmapItem key={roadmap.id} roadmap={roadmap} />
        ))}
      </ScrollView>
    );
  }
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
