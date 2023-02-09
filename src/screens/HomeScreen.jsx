import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Alert,
  StyleSheet,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeMenus from "../components/HomeMenus";
import { HomeMenuList } from "../lib/MenuLists";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();

  const ListHome = () => {
    // const _onPressButton = (title) => {
    //   Alert.alert("You tapped the menu : " + title.toUpperCase());
    // };

    return (
      <View className="flex flex-row justify-center py-5 flex-wrap gap-7">
        {HomeMenuList.map((item, index) => (
          <TouchableHighlight
            underlayColor="white"
            // onPress={(e) => _onPressButton(item.title)}
            onPress={(e) => navigation.navigate(item.toPage)}
            key={index}
          >
            <Animatable.View
              className={`w-fit bg-${item.classColor}-200 p-2 rounded-2xl shadow-xl shadow-${item.classColor}-800/10`}
              animation="pulse"
              easing="ease-in-out"
            >
              <View
                className={`w-20 items-center bg-${item.classColor}-300 p-5 rounded-xl shadow-lg`}
              >
                <FontAwesome5
                  name={item.icon}
                  size={30}
                  color={item.iconColor}
                />
              </View>
              <Text
                className={`text-${item.classColor}-700 text-center text-xs tracking-wider pt-1`}
              >
                {item.title}
              </Text>
            </Animatable.View>
          </TouchableHighlight>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={style.container}
      className="flex-1 relative bg-slate-200 flex-col gap-4"
    >
      <View className="px-4 pt-16">
        <Text className="text-xl tracking-widest font-semibold text-center uppercase text-slate-500">
          Home menu
        </Text>
        {/* <BookList /> */}
      </View>
      <View className="px-4 bg-white absolute bottom-0 right-0 left-0 top-52 py-5 rounded-t-3xl shadow-xl">
        <ListHome />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop:
      StatusBar.currentHeight !== undefined
        ? StatusBar.currentHeight + 10
        : StatusBar.currentHeight,
  },
});

export default HomeScreen;
