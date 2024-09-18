import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Bienvenue from "../Screens/Bienvenue";
import ChooseCategory from "../Screens/ChooseCategory";
import GroupAR from "../Screens/GroupAR";
import GroupeBR from "../Screens/GroupeBR";
import GroupeABR from "../Screens/GroupeABR";
import GroupeOR from "../Screens/GroupeOR";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator(); //pile de navigation
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Hello" component={Bienvenue} />
        <Stack.Screen name="Caterogry" component={ChooseCategory} />
        <Stack.Screen name="Variante Rhesus groupe A" component={GroupAR} />
        <Stack.Screen name="Variante Rhesus groupe B" component={GroupeBR} />
        <Stack.Screen name="Variante Rhesus groupe AB" component={GroupeABR} />
        <Stack.Screen name="Variante Rhesus groupe O" component={GroupeOR} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
