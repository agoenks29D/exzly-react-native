import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '@/stack/auth.stack';

type Prop = NativeStackScreenProps<AuthStackParams, 'ResetPassword'>;

const ResetPasswordScreen: React.FC<Prop> = () => {
  const {colors} = useTheme();

  return (
    <View>
      <Text style={{color: colors.text}}>Reset Password Screen</Text>
    </View>
  );
};

export default ResetPasswordScreen;
