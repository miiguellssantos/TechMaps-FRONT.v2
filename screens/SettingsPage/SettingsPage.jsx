import React, { useContext } from "react";
import { Text, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/AuthContext";
import styles from "./style";

const SettingsPage = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.body}>
      <Pressable
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.backText}>"Voltar"</Text>
      </Pressable>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          logout();
        }}
      >
        <Text style={{ fontFamily: "Righteous", color: "#FFF" }}>SAIR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsPage;
