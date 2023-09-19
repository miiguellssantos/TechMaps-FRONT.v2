import React from "react";
import { Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

export default function Profile({ navigation }) {
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
    </SafeAreaView>
  );
}
