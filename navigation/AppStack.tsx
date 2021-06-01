import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import AppScreen from "../screens/AppScreen";
import LandingScreen from "../screens/LandingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import VideoScreen from "../screens/WorkoutActivity";
import Header from "../components/Header";
import { RootStackParamList } from "../types";

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator initialRouteName="Landing">
      <AppStack.Screen
        name="Landing"
        options={{
          header: () => null,
        }}
        component={LandingScreen}
      />
      <AppStack.Screen
        name="Video"
        options={{
          header: ({ navigation }) => (
            <Header
              title={"Workout"}
              navigation={navigation as StackNavigationProp<RootStackParamList>}
            />
          ),
          headerTransparent: true,
        }}
        component={VideoScreen}
      />
      <AppStack.Screen
        name="Profile"
        options={{
          header: ({ navigation }) => (
            <Header
              title={"Profile"}
              navigation={navigation as StackNavigationProp<RootStackParamList>}
            />
          ),
          headerTransparent: true,
        }}
        component={ProfileScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
