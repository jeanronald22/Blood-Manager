import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../assets/Colors/colors";

const CatrgoryComponent = ({
  category,
  onPress,
  backgroundColor,
  backgroundColorLight,
}) => {
  // !------------------------DEFINITION DES STATES --------------------------------
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      style={[
        styles.categorie,
        { backgroundColor: backgroundColor },
        pressed && styles.pressed,
      ]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
    >
      <View>
        <Text style={styles.text}>Blood Group</Text>
      </View>
      <View style={[styles.cercle, { backgroundColor: backgroundColorLight }]}>
        <Text style={styles.letter}>{category}</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={25}
          color={Colors.blanc}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categorie: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: 15,
  },
  cercle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  letter: {
    fontSize: 48,
    color: Colors.blanc,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: Colors.blanc,
    fontWeight: "medium",
  },
  pressed: {
    opacity: 0.7,
  },
});
export default CatrgoryComponent;
