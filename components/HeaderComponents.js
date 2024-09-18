import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../assets/Colors/colors";

const HeaderComponents = ({ title, onPress }) => {
  //!-------------------------------------------DEFINITION DES STATES--------------------------------
  const [pressed, setPressed] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable
        style={[pressed && styles.pressed]}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(true)}
        onPress={onPress}
      >
        <MaterialIcons name="keyboard-arrow-left" size={35} color={"black"} />
      </Pressable>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    fontSize: 24,
    color: Colors.rougePrimaire,
    fontWeight: "bold",
    marginLeft: 100,
  },
});

export default HeaderComponents;
