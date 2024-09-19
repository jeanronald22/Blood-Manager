import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import HeaderComponents from "../components/HeaderComponents";
import { Colors } from "../assets/Colors/colors";
import CatrgoryComponent from "../components/CatrgoryComponent";

const GroupAR = ({ navigation }) => {
  // navigation.goBack() permet de revenir à la page précédente
  const handleNav = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* definition du header */}
      <HeaderComponents title="Blood group" onPress={handleNav} />
      {/* definition du contenu */}
      <View style={styles.contents}>
        <View style={styles.content}>
          <Text style={styles.groupe}>A</Text>
          <Text style={styles.text}>Choose a Rhesus variant</Text>
        </View>
        <CatrgoryComponent
          category="A+"
          backgroundColor={Colors.RhesusAPlus}
          backgroundColorLight={Colors.RhesusAPlusLight}
        />
        <CatrgoryComponent
          category="A-"
          backgroundColor={Colors.RhesusAPMoins}
          backgroundColorLight={Colors.RhesusAPMoinsLight}
        />
      </View>
      <StatusBar styles="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contents: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 60,
  },
  content: {
    alignItems: "center",
    // backgroundColor: "red",
    marginVertical: 10,
  },
  groupe: {
    fontSize: 96,
    textAlign: "center",
    color: Colors.GroupeA,
  },
  text: {
    fontSize: 24,
    color: Colors.rougePrimaire,
    fontWeight: "bold",
  },
});
export default GroupAR;
