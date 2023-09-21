import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import styles from "./style.jsx";

const InputField = ({
    label,
    icon,
    inputType,
    keyboardType,
    value, 
    onChangeText
  }) => {
    return (
      <View style={styles.inputView}>
        <Icon name={icon} size={20} color={"#FFF"} />
        {inputType == "password" ? (
          <TextInput
            style={styles.input}
            placeholder={label}
            placeholderTextColor={"#FFF"}
            secureTextEntry={true}
            value={value}
            onChangeText={onChangeText}
          />
        ) : (
          <TextInput
            style={styles.input}
            placeholder={label}
            keyboardType={keyboardType}
            placeholderTextColor={"#FFF"}
            value={value}
            onChangeText={onChangeText}
          />
        )}
      </View>
    );
  };
  
  export default InputField;