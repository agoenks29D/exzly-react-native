import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserAccountScreen from '@/screen/user/account.screen';
import UserProfileScreen from '@/screen/user/profile.screen';

export type UserStackParams = {
  Account: undefined;
  Profile: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<UserStackParams>();

export default function UserStack() {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Account" component={UserAccountScreen} />
      <Stack.Screen name="Profile" component={UserProfileScreen} />
    </Stack.Navigator>
  );
}
