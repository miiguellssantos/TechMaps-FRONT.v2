import React, { useContext } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "./TabNavigation";
import AuthenticatorNavigation from "./AuthenticatorNavigation";

import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    <View>
      <ActivityIndicator size={"large"} />
    </View>;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor={"#1e1e1e"}
      />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userToken !== null ? (
          <Stack.Screen name="Tab" component={TabNavigation} />
        ) : (
          <Stack.Screen
            name="Authentication"
            component={AuthenticatorNavigation}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
