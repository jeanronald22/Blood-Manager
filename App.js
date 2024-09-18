import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Bienvenue from "./Screens/Bienvenue";
import ChooseCategory from "./Screens/ChooseCategory";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return <AppNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
