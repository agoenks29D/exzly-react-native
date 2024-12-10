import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import HomeScreen from '@/screen/app/home.screen';
import UserStack, {UserStackParams} from './user.stack';

export type AppStackParams = {
  Home: undefined;
  UserStack: NavigatorScreenParams<UserStackParams>;
};

const Stack = createNativeStackNavigator<AppStackParams>();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserStack" component={UserStack} />
    </Stack.Navigator>
  );
}
