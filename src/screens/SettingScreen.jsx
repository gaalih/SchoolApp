import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative">
      <View>
        <Text>SettingScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
