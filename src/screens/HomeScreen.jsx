import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "1",
    title: "list siswa",
  },
  {
    id: "2",
    title: "jadwal",
  },
  {
    id: "3",
    title: "kalender",
  },
  {
    id: "4",
    title: "transkrip",
  },
];

const Item = ({ title }) => (
  <View className="m-3 mb-10">
    <View className="bg-teal-400/50 mb-2 w-20 h-20 rounded-xl"></View>
    <Text className="text-center text-slate-500">{title}</Text>
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative bg-slate-200 flex-col gap-4">
      <View className="px-4 pt-5">
        <Text className="text-xl tracking-widest font-semibold">Home</Text>
      </View>
      <View className="px-4 bg-white absolute bottom-0 right-0 left-0 top-32 py-5 rounded-t-3xl shadow-xl">
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          numColumns={3}
          className="self-center"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
