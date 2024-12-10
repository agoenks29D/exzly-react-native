import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UserStackParams} from '@/stack/user.stack';

type Prop = NativeStackScreenProps<UserStackParams, 'Account'>;

const UserAccountScreen: React.FC<Prop> = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.screen}>
      <Text style={{color: colors.text}}>User Account Screen</Text>
      <View style={styles.navigationWrapper}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Profile', {id: 'UserID'})}>
          <Text style={{color: colors.text}}>Profile</Text>
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

export default UserAccountScreen;
