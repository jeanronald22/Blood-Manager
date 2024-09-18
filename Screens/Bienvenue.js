import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../assets/Colors/colors";

const Bienvenue = ({ navigation }) => {
  // !--------------------------------- DEFINITION DES STATES ----------------------------------------------------
  const [pressed, setPressed] = useState(false); // permet de verifier si le boutton pressable est enfoncer ou non et appliquer un style en consequnce
  return (
    <View style={styles.container}>
      {/* se composant permet de donner une marge suppérieur au composant pour l'affichage de la status bar */}
      <SafeAreaView />
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/WelcomeImage.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.subHeader}>Labile blood products management</Text>
        <Pressable
          onPress={() => navigation.navigate("Caterogry")}
          style={[styles.btn, pressed && styles.btnPressed]}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
        >
          <Text style={styles.btnText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.rougePrimaire,
  },
  imageContainer: {
    height: "50%", // le conteneur de l'image occupera 50% de la page
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    height: "50%",
    alignItems: "center",
  },
  header: {
    color: Colors.blanc,
    fontSize: 42,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 20,
    color: Colors.blanc,
    fontWeight: "medium",
    marginTop: 10,
  },
  btn: {
    marginTop: 50,
    backgroundColor: Colors.blanc,
    width: "90%",
    paddingVertical: 18,
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    color: Colors.rougePrimaire,
    fontSize: 18,
    fontWeight: "bold",
  },
  btnPressed: {
    opacity: 0.7,
  },
});
export default Bienvenue;
