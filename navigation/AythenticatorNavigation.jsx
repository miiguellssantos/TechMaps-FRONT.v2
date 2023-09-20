import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/Authorization/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/Authorization/RegisterScreen/RegisterScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen/OnBoardingScreen";

const Stack = createNativeStackNavigator();

const AythenticatorNavigation = () => {
  const SCREEN_NAMES = {
    ONBOARDING: "ONBOARDINGSCREEN",
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
  };
  
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREEN_NAMES.ONBOARDING} component={OnBoardingScreen} />
      <Stack.Screen name={SCREEN_NAMES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={SCREEN_NAMES.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AythenticatorNavigation;
