import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../../../context/AuthContext";
import InputField from "../../../components/InputField/InputField";

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("miguel");
  const [senha, setSenha] = useState("senha");

  return (
    <LinearGradient
      style={styles.gradient}
      locations={[0, 1]}
      colors={["#306b34", "#ace894"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.header}>
            <Image
              style={styles.logoImage}
              source={require("../../../assets/logo-white-no-background.png")}
            />
            <Text style={styles.headerText}>{`A JORNADA\nCOMEÇA AQUI`}</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.loginText}>Login</Text>
            <InputField
              label="Nome de usuário"
              icon="account"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <View style={styles.inputView}>
              <Icon name={"lock"} size={20} color={"#FFF"} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={"#FFF"}
                secureTextEntry={true}
                value={senha}
                onChangeText={(text) => setSenha(text)}
              />

              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.esqueceuText}>Esqueceu?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                login(username, senha);
              }}
            >
              <LinearGradient
                style={styles.loginButton}
                locations={[0, 1]}
                colors={["#eee5e9", "#A39594"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.loginButtonText}>LOGIN</Text>
                <Icon name="arrow-right" color={"#FFF"} size={25} />
              </LinearGradient>
            </TouchableOpacity>

            <Text style={styles.textLoginCom}>Ou, faça login com...</Text>

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

            <View style={styles.registerButton}>
              <Text style={{ color: "#FFF" }}> Novo por aqui? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("REGISTER")}>
                <Text style={{ color: "#eee5e9", fontFamily: "InterBold" }}>
                  Registre-se.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;
