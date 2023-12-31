import { View, Text } from "react-native";
import React, {useContext, useEffect, useRef} from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import { AuthContext } from "../../context/AuthContext";
import { timeFormat } from "../../utils/timeFormat";

const Dashboard = () => {
  const {dashboardData, fetchDashboardData, fetchConcludedRoadmaps} = useContext(AuthContext)
  const {totalRoadmaps, totalCommits, totalTasks, totalTime} = dashboardData

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      fetchDashboardData();
      fetchConcludedRoadmaps()
    }, 1000);

    return () => {
      // Limpa o intervalo quando o componente for desmontado
      clearInterval(intervalRef.current);
    };
  }, [fetchDashboardData]);

  // Executa somente uma vez para configurar o intervalo
  useEffect(() => {
    // Limpa o intervalo ao desmontar o componente
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <LinearGradient
      style={styles.dashboard}
      locations={[0, 1]}
      colors={["#53bb5a", "#306b34"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.linhaFlexBox}>
        <View style={styles.roadmaps}>
          <View style={[styles.icon, styles.iconSpaceBlock]}>
            <Icon name={"check-circle"} size={50} color={"#fff"} />
          </View>
          <View style={[styles.texto, styles.textoSpaceBlock]}>
            <Text style={[styles.text3, styles.textFlexBox]}>{totalRoadmaps}</Text>
            <Text
              style={[styles.roadmapsConcludos, styles.textFlexBox]}
            >{`Roadmaps\nConcluídos`}</Text>
          </View>
        </View>
        <View style={styles.tasksConcludas}>
          <View style={styles.iconSpaceBlock}>
            <Icon name={"format-list-checks"} size={50} color={"#fff"} />
          </View>
          <View style={styles.textoSpaceBlock}>
            <Text style={[styles.text4, styles.textFlexBox]}>{totalTasks}</Text>
            <Text
              style={[styles.roadmapsConcludos, styles.textFlexBox]}
            >{`Tasks\nConcluídas`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.linha2, styles.linhaFlexBox]}>
        <View style={styles.roadmaps}>
          <View style={[styles.icon, styles.iconSpaceBlock]}>
            <Icon name={"source-commit"} size={50} color={"#fff"} />
          </View>
          <View style={[styles.texto, styles.textoSpaceBlock]}>
            <Text style={[styles.text3, styles.textFlexBox]}>{totalCommits}</Text>
            <Text
              style={[styles.roadmapsConcludos, styles.textFlexBox]}
            >{`Quantidade\nde Commits`}</Text>
          </View>
        </View>
        <View style={styles.tasksConcludas}>
          <View style={styles.iconSpaceBlock}>
            <Icon name={"timer"} size={50} color={"#fff"} />
          </View>
          <View style={styles.textoSpaceBlock}>
            <Text style={[styles.d22h2m, styles.textFlexBox]}>{timeFormat(totalTime)}</Text>
            <Text
              style={[styles.roadmapsConcludos, styles.textFlexBox]}
            >{`Tempo total de\nestudos`}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Dashboard;
