import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
// import classes from './TextInput.module.css';

export interface CustomTextProps {
  placeholder: string;
}
export default function PssWdTextInput(data: CustomTextProps): JSX.Element {
  const {placeholder} = data;
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.rootWrapper}>
      <View style={styles.textWrapper}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/lock.png')}
        />
        <TextInput style={styles.TextInput} placeholder={placeholder} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '7%',
    marginBottom: '3%',
    //backgroundColor: '#aab',
  },
  icon: {
    width: 20,
    height: 25,
    //backgroundColor: '#ff0',
  },

  textWrapper: {
    alignItems: 'center',
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    width: '85%',
    backgroundColor: 'transparent',
    height: '100%',
    borderColor: '#E6E6E6',
    borderWidth: 1,
    borderRadius: 5,
  },
  TextInput: {
    marginLeft: 20,
    width: '60%',
    backgroundColor: '#fff',
    height: '100%',
    display: 'flex',
  },
});
