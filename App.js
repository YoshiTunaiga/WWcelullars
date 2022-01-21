import { registerRootComponent } from "expo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./client/components/Navigation";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer"]);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
