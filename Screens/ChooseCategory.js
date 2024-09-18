import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../assets/Colors/colors";
import CatrgoryComponent from "../components/CatrgoryComponent";

const ChooseCategory = ({ navigation }) => {
  //!---------------------------DEFINITION DES FONCTIONS------------------------
  const handleNav = (route) => {
    navigation.navigate(route);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <SafeAreaView />
      <View style={styles.container}>
        <Text style={styles.text}>Choose a blood category</Text>
        {/* definition des categories */}
        <CatrgoryComponent
          category="A"
          backgroundColor={Colors.GroupeA}
          backgroundColorLight={Colors.GroupeALight}
          onPress={() => handleNav("Variante Rhesus groupe A")}
        />
        <CatrgoryComponent
          category="B"
          backgroundColor={Colors.GroupeB}
          backgroundColorLight={Colors.GroupeBLight}
          onPress={() => handleNav("Variante Rhesus groupe B")}
        />
        <CatrgoryComponent
          category="AB"
          backgroundColor={Colors.GroupeAB}
          backgroundColorLight={Colors.GroupeABLight}
          onPress={() => handleNav("Variante Rhesus groupe AB")}
        />
        <CatrgoryComponent
          category="O"
          backgroundColor={Colors.GroupeO}
          backgroundColorLight={Colors.GroupeOLight}
          onPress={() => handleNav("Variante Rhesus groupe O")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.rougePrimaire,
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
export default ChooseCategory;
