import { TouchableOpacity, View, Text } from "react-native";
import React, { useState, useContext } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import ReactNativeModal from "react-native-modal";
import { AuthContext } from "../../../context/AuthContext";
import InputField from "../../InputField/InputField";

const CreateRoadmapButton = () => {
  const { createRoadmap } = useContext(AuthContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [nomeRoadmap, setNomeRoadmap] = useState("");
  const [tipoRoadmap, setTipoRoadmap] = useState("");
  const [languageRoadmap, setLanguageRoadmap] = useState("")
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <LinearGradient
          style={styles.btnCriarRoadmap}
          locations={[0, 1]}
          colors={["#53bb5a", "#306b34"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Icon name={"plus-circle"} color={"#FFF"} size={25} />
        </LinearGradient>
      </TouchableOpacity>

      <ReactNativeModal
        isVisible={isModalVisible}
        style={styles.modalCriarRoadmap}
        propagateSwipe={true}
        swipeDirection="down"
        avoidKeyboard={true}
      >
        <View>
          <View style={styles.header}>
            <Text style={styles.formHeader}>CRIAR ROADMAP</Text>
          </View>
          <View style={styles.inputs}>
            <View>
              <Text style={styles.label}>Nome: </Text>
              <InputField
                label="Nome"
                icon="ab-testing"
                value={nomeRoadmap}
                onChangeText={(text) => setNomeRoadmap(text)}
              />
            </View>

            <View>
              <Text style={styles.label}>Tipo: </Text>
              <InputField
                label="Tipo"
                icon="webpack"
                value={tipoRoadmap}
                onChangeText={(text) => setTipoRoadmap(text)}
              />
            </View>

            <View>
              <Text style={styles.label}>Linguagem: </Text>
              <InputField
                label="Linguagem"
                icon="webpack"
                value={languageRoadmap}
                onChangeText={(text) => setLanguageRoadmap(text)}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.btnCancelar}
            onPress={() => {
              setModalVisible(!isModalVisible);
            }}
          >
            <Text style={styles.txtBtnCancelar}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnSalvar}
            onPress={() => {
              setModalVisible(!isModalVisible);
              createRoadmap(nomeRoadmap, tipoRoadmap, languageRoadmap);
              setNomeRoadmap("")
              setTipoRoadmap("")
              setLanguageRoadmap("")
            }}
          >
            <Text style={styles.txtBtnSalvar}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default CreateRoadmapButton;
