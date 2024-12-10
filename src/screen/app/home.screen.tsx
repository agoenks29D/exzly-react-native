import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParams} from '@/stack/app.stack';
import {useAppDispatch} from '@/hook/redux';
import appSlice from '@/state/app.slice';

type Prop = NativeStackScreenProps<AppStackParams, 'Home'>;

const HomeScreen: React.FC<Prop> = ({navigation}) => {
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {setIsAuthenticated} = appSlice.actions;

  return (
    <View style={styles.screen}>
      <Text style={{color: colors.text}}>Home Screen</Text>
      <View style={styles.navigationWrapper}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('UserStack', {screen: 'Account'})}>
          <Text style={{color: colors.text}}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => dispatch(setIsAuthenticated(false))}>
          <Text style={{color: colors.text}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  navigationButton: {
    marginHorizontal: 4,
    borderWidth: 2,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default HomeScreen;
