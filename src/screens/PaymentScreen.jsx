import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PaymentScreen = () => {
  return (
    <SafeAreaView className="flex-1 relative">
      <View>
        <Text>PaymentScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
