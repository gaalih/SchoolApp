import { View, Text, TouchableHighlight, Alert } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { HomeMenuList } from "../lib/MenuLists";

const HomeMenus = () => {
  const _onPressButton = (e) => {
    Alert.alert("You tapped the button!" + e);
  };
  return (
    <View className="flex flex-row justify-center py-5 flex-wrap gap-7"></View>
  );
};

export default HomeMenus;
