import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded, error] = useFonts({
    Righteous: require("./assets/fonts/Righteous-Regular.ttf"),
    InterBlack: require("./assets/fonts/Inter-Regular.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterExtraBold: require("./assets/fonts/Inter-ExtraBold.ttf"),
    InterExtraLight: require("./assets/fonts/Inter-ExtraLight.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterThin: require("./assets/fonts/Inter-Thin.ttf"),
    DMSans: require("./assets/fonts/DMSans-Medium.ttf"),
  });

  if (!loaded && error) {
    return null;
  }

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
