import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashBoard from "../screens/Dashboard/Dashboard";
import ProfilePage from "../screens/ProfilePage/ProfilePage";
import SettingsPage from "../screens/SettingsPage/SettingsPage";

const DashboardStackScreen = () => {
  const DashboardStack = createNativeStackNavigator();

  return (
    <DashboardStack.Navigator screenOptions={{ headerShown: false }}>
      <DashboardStack.Screen name="Dashboard" component={DashBoard} />
      <DashboardStack.Screen name="Profile" component={ProfilePage} />
      <DashboardStack.Screen name="SettingsPage" component={SettingsPage} />
    </DashboardStack.Navigator>
  );
};

export default DashboardStackScreen;
