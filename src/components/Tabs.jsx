// import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import PaymentScreen from "../screens/PaymentScreen";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#16a34a",
        tabBarActiveBackgroundColor: "#fff",
        tabBarStyle: { paddingTop: 15, borderTopColor: "#fff" },
        tabBarBadgeStyle: {
          marginTop: -15,
          backgroundColor: "#f59e0b",
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: "home",
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="home" color={color} size={size} />
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarLabel: "payment",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="credit" size={size} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: "setting",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
