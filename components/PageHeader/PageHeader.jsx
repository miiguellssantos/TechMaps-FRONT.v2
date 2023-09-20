import React from "react";
import { View, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";

const PageHeader = ({ navigation, pageName }) => {
  return (
    <LinearGradient
      style={styles.header}
      locations={[0, 1]}
      colors={["#eee5e9", "#ace894"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Pressable
        style={styles.gearsixFlexBox}
        onPress={() => navigation.navigate("Profile")}
      >
        <Icon name={"account-circle-outline"} size={45} color={"#306B34"} />
      </Pressable>

      <View>
        <Text style={styles.title}>{pageName}</Text>
      </View>

      <Pressable
        style={styles.gearsixFlexBox}
        onPress={() => navigation.navigate("SettingsPage")}
      >
        <Icon name={"cog-outline"} size={40} color={"#306B34"} />
      </Pressable>
    </LinearGradient>
  );
};

export default PageHeader;
