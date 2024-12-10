import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppStack from '@/stack/app.stack';
import AuthStack from '@/stack/auth.stack';
import ReduxProvider from '@/state/redux';
import {useAppSelector} from '@/hook/redux';
import {appDarkScheme, appLightScheme} from './config/app';

const Provider: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

const Navigation = () => {
  const isAuthenticated = useAppSelector(state => state.app.isAuthenticated);
  return isAuthenticated ? <AppStack /> : <AuthStack />;
};

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === 'light' ? appLightScheme : appDarkScheme}>
      <SafeAreaView style={styles.safeArea}>
        <Provider>
          <Navigation />
        </Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {flex: 1},
});
