import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GreetingScreen from '@/screen/app/greeting.screen';
import SignUpScreen from '@/screen/auth/sign-up.screen';
import SignInScreen from '@/screen/auth/sign-in.screen';
import ForgotPasswordScreen from '@/screen/auth/forgot-password.screen';
import ResetPasswordScreen from '@/screen/auth/reset-password.screen';

export type AuthStackParams = {
  Greeting: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Greeting"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Greeting" component={GreetingScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}
