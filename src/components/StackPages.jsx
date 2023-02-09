import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const HomeScreen = React.lazy(() => import("../screens/HomeScreen"));
const SiswaPage = React.lazy(() => import("../pages/home/SiswaPage"));
const JadwalPage = React.lazy(() => import("../pages/home/JadwalPage"));
const TranskripPage = React.lazy(() => import("../pages/home/TranskripPage"));
const BiayaPage = React.lazy(() => import("../pages/home/BiayaPage"));
const EskulPage = React.lazy(() => import("../pages/home/EskulPage"));
const DosenPage = React.lazy(() => import("../pages/home/DosenPage"));
const GrafikPage = React.lazy(() => import("../pages/home/GrafikPage"));
const JurnalPage = React.lazy(() => import("../pages/home/JurnalPage"));
const AlumniPage = React.lazy(() => import("../pages/home/AlumniPage"));

const Stack = createNativeStackNavigator();
export const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SiswaPage" component={SiswaPage} />
      <Stack.Screen name="JadwalPage" component={JadwalPage} />
      <Stack.Screen name="TranskripPage" component={TranskripPage} />
      <Stack.Screen name="BiayaPage" component={BiayaPage} />
      <Stack.Screen name="EskulPage" component={EskulPage} />
      <Stack.Screen name="DosenPage" component={DosenPage} />
      <Stack.Screen name="GrafikPage" component={GrafikPage} />
      <Stack.Screen name="JurnalPage" component={JurnalPage} />
      <Stack.Screen name="AlumniPage" component={AlumniPage} />
    </Stack.Navigator>
  );
};
