import { ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import ConcludedRoadmapItem from "../ConcludedRoadmapItem/ConcludedRoadmapItem";
import styles from "./style";
import { AuthContext } from "../../context/AuthContext";

/* <View>
      <ConcludedRoadmapItem
        roadmapTitle={"JAVA 101"}
        timeSpent={`33"25'`}
        commitCounter={"12"}
      />
    </View>
  ); */

const ConcludedRoadmapList = () => {
  const { concludedRoadmapsList } =
    useContext(AuthContext);

  

  return (
    <ScrollView>
      {concludedRoadmapsList.map((roadmap) => (
        <ConcludedRoadmapItem key={roadmap.id} roadmap={roadmap} />
      ))}
    </ScrollView>
  );
};

export default ConcludedRoadmapList;
