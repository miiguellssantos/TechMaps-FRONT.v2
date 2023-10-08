import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import RoadmapItem from "../RoadmapItem/RoadmapItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RoadmapList = () => {
  const roadmapList = AsyncStorage.getItem("roadmaps");
  console.log(roadmapList);
  const [roadmaps, setRoadmaps] = useState([roadmapList]);
  const [loading, setLoading] = useState(false);

   // setRoadmaps(roadmapList). .
  console.log("$$$$$$$$$$$$$$$$");
  if (loading) {
    console.log("@@@@@@@@@@@@");
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#FFF" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  if (roadmaps == []) {
    console.log("**********");
    return (
      <View style={styles.noRoadmapsContainer}>
        <Text style={styles.noRoadmapsText}>
          Você ainda não possui nenhum roadmap.
        </Text>
      </View>
    );
  } else {
    console.log("%%%%%%%%%%%%");
    console.log(roadmaps);
    return (
      <ScrollView>
        {roadmaps.map((roadmap) => (
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
