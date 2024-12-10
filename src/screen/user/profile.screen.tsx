import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UserStackParams} from '@/stack/user.stack';

type Prop = NativeStackScreenProps<UserStackParams, 'Profile'>;

const UserProfileScreen: React.FC<Prop> = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.screen}>
      <Text style={{color: colors.text}}>User Profile Screen</Text>
      <View style={styles.navigationWrapper}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Account')}>
          <Text style={{color: colors.text}}>Back to Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.getParent()?.navigate('Home')}>
          <Text style={{color: colors.text}}>Back to Home</Text>
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

export default UserProfileScreen;
