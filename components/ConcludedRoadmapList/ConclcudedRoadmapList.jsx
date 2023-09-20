import { View, Text } from "react-native";
import React from "react";
import ConcludedRoadmapItem from "../ConcludedRoadmapItem/ConcludedRoadmapItem";
import styles from "./style";

const ConcludedRoadmapList = () => {
  return (
    <View>
      <ConcludedRoadmapItem
        roadmapTitle={"JAVA 101"}
        timeSpent={`33"25'`}
        commitCounter={"12"}
      />
    </View>
  );
};

export default ConcludedRoadmapList;