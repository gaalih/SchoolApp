import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, SafeAreaView } from "react-native";
import Tabs from "./src/components/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
