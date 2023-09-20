import React from "react";
import { Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./style";

import InputField from "../../../components/InputField/InputField";

const RegisterScreen = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.gradient}
      locations={[0, 1]}
      colors={["#306b34", "#ace894"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/logo-white-no-background.png")}
          />
          <Text style={styles.headerText}>{`A JORNADA\nCOMEÇA AQUI`}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.loginText}>Registre-se</Text>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.googleButton}>
                <Image
                  styles={styles.logo}
                  source={require("../../../assets/googleButton.png")}
                />
                <Text style={styles.googleText}>Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.githubButton}>
                <Image
                  styles={styles.logo}
                  source={require("../../../assets/githubButton.png")}
                />
                <Text style={styles.githubText}>GitHub</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.textLoginCom}>Ou, registre-se com...</Text>

          <InputField label="Nome de usuário" icon="account" />
          <InputField label="Email" icon="at" keyboardType={"email-address"} />
          <InputField label="Senha" icon="lock" inputType={"password"} />
          <InputField
            label="Confirme a senha"
            icon="lock"
            inputType={"password"}
          />

          <TouchableOpacity onPress={() => {}}>
            <LinearGradient
              style={styles.loginButton}
              locations={[0, 1]}
              colors={["#eee5e9", "#A39594"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.loginButtonText}>REGISTRE-SE</Text>
              <Icon name="arrow-right" color={"#FFF"} size={25} />
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.registerButton}>
            <Text style={{ color: "#FFF" }}> Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: "#eee5e9", fontFamily: "InterBold" }}>
                Faça login.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default RegisterScreen;
