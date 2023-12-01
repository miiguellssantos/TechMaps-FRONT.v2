import { View, Text, TouchableOpacity } from "react-native";
import React, {useContext} from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../RoadmapItem/style";
import { timeFormat } from "../../utils/timeFormat";
import { AuthContext } from "../../context/AuthContext";

const ConcludedRoadmapItem = ({ roadmap }) => {
const {id, totalTime, title, type} = roadmap
const { createCertificate } = useContext(AuthContext)

  return (
    <LinearGradient
      style={styles.roadmapItem}
      locations={[0, 1]}
      colors={["#53bb5a", "#306b34"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.icon}>
        <Icon name={"language-python"} size={80} color={"#FFF"} />
        <View style={styles.iconChild} />
      </View>

      <View style={styles.content}>
        <View style={styles.stats}>
          <Text style={styles.roadmapItemTitle}>{title}</Text>
          <View style={styles.statLine1}>
            <View style={styles.statLineRightItem}>
              <Icon name={"clock-time-nine-outline"} size={25} color={"#FFF"} />
              <Text style={styles.textTypo}>{timeFormat(totalTime)}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => {
          console.log(roadmap);
          createCertificate(id)}}>
          <Icon
            style={{ marginRight: 10 }}
            name={"location-enter"}
            size={50}
            color={"#FFF"}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ConcludedRoadmapItem;
