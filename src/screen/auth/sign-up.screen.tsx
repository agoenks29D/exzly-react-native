import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '@/stack/auth.stack';
import {useAppDispatch} from '@/hook/redux';
import appSlice from '@/state/app.slice';

type Prop = NativeStackScreenProps<AuthStackParams, 'SignUp'>;

const SignUpScreen: React.FC<Prop> = ({navigation}) => {
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {setIsAuthenticated} = appSlice.actions;

  return (
    <View style={styles.screen}>
      <Text style={{color: colors.text}}>Sign Up Screen</Text>
      <View style={styles.navigationWrapper}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={{color: colors.text}}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{color: colors.text}}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigationWrapper}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => dispatch(setIsAuthenticated(true))}>
          <Text style={{color: colors.text}}>Sign Up</Text>
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

export default SignUpScreen;
