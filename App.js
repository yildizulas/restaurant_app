import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./screens/SearchScreen";
import ResultsShowScreen from "./screens/ResultsShowScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitle: "Restaurants" }}
      >
        {/* Home screen where users search for restaurants */}
        <Stack.Screen
          name="Search"
          component={SearchScreen}
        />
        {/* Detail screen displaying information about a specific restaurant */}
        <Stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
