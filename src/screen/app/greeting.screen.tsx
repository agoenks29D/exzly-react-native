import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '@/stack/auth.stack';

type Prop = NativeStackScreenProps<AuthStackParams, 'Greeting'>;

const GreetingScreen: React.FC<Prop> = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.screen}>
      <Text style={{color: colors.text}}>Greeting Screen</Text>
      <View style={styles.navigationWrapper}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: colors.text}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={{color: colors.text}}>Sign In</Text>
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

export default GreetingScreen;
