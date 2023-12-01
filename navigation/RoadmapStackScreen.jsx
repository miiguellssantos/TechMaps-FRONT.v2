import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Roadmaps from "../screens/RoadmapsPage/RoadmapsPage";
import Profile from "../screens/ProfilePage/ProfilePage";
import SettingsPage from "../screens/SettingsPage/SettingsPage";
import TaskPage from "../screens/Tasks/TaskPage";

const RoadmapsStackScreen = () => {
  const RoadmapsStack = createNativeStackNavigator();

  return (
    <RoadmapsStack.Navigator screenOptions={{ headerShown: false }}>
      <RoadmapsStack.Screen name="RoadmapsStack" component={Roadmaps} />
      <RoadmapsStack.Screen name="Profile" component={Profile} />
      <RoadmapsStack.Screen name="SettingsPage" component={SettingsPage} />
      <RoadmapsStack.Screen name="TaskPage" component={TaskPage} />
    </RoadmapsStack.Navigator>
  );
};

export default RoadmapsStackScreen;
