import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import WelcomeScreen from "./WelcomeScreen";
import ProductScreen from "./ProductScreen";
import LoginScreen from "./LoginScreen";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import AdminScreen from "./AdminScreen";
import NewItemScreen from "./NewItemScreen";

const Stack = createNativeStackNavigator();

export const Navigation = ({}) => {
  const cart = [];
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons name="ios-cart" size={35} color="white" />
            </TouchableOpacity>
          ),
          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          //     <Ionicons name="home-outline" size={35} color="white" />
          //   </TouchableOpacity>
          // ),
          // headerTitle: () => (
          //   <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          //     <Ionicons name="home-outline" size={35} color="white" />
          //   </TouchableOpacity>
          // ),
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#009aff",
          },
          title: "WorldWide Cellulars",
          headerTintColor: "white",
        })}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Admin"
          component={AdminScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                <Ionicons name="home-outline" size={35} color="white" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("NewItem")}>
                <Ionicons name="add-circle" size={30} color="white" />
              </TouchableOpacity>
            ),
            headerTitle: () => <TouchableOpacity></TouchableOpacity>,
          })}
        />
        <Stack.Screen
          name="NewItem"
          component={NewItemScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
