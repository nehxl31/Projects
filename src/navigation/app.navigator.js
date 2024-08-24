import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import AboutScreen from "../screens/AboutScreen";
import TrackOrderScreen from "../screens/TrackOrderScreen";
import DrinksListScreen from "../screens/DrinksListScreen";
import BreakfastListScreen from "../screens/BreakfastListScreen";
import ChineseDishesScreen from "../screens/ChineseDishesScreen";
import ShortEatsScreen from "../screens/ShortEatsScreen";
import MainTabNavigator from "./MainTabNavigator";
import { colors } from "../utils/colors";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? "MainTabNavigator" : "SignInScreen"}
        screenOptions={{ headerShown: false }}
      >
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
            <Stack.Screen
              name="About"
              component={AboutScreen}
              options={{
                title: "About",
                headerStyle: {
                  backgroundColor: colors.pure,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="TrackOrder"
              component={TrackOrderScreen}
              options={{
                title: "Track Order",
                headerStyle: {
                  backgroundColor: colors.pure,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="DrinksList"
              component={DrinksListScreen}
              options={{
                title: "Drinks List",
                headerStyle: {
                  backgroundColor: colors.pure,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="BreakfastList"
              component={BreakfastListScreen}
              options={{
                title: "Breakfast List",
                headerStyle: {
                  backgroundColor: colors.pure,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="ChineseDishes"
              component={ChineseDishesScreen}
              options={{
                title: "Chinese Dishes",
                headerStyle: {
                  backgroundColor: colors.pure,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="ShortEats"
              component={ShortEatsScreen}
              options={{
                title: "Short Eats",
                headerStyle: {
                  backgroundColor: colors.pure,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
