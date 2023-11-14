import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function SignUpReview(): JSX.Element {
  return (
    <View style={styles.rootWrapper}>
      <Image source={require('@/assets/images/review0.5.png')} />
      <Text style={{marginTop: '20%', fontSize: 16, color: '#000'}}>
        작성해주신 내용과 파일들을 토대로 검토중입니다
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  rootWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    // paddingTop: '20%',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingLeft: '7.5%',
    paddingRight: '7.5%',
  },
  agreeBoxWrap: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '20%',
    marginBottom: '10%',
  },
  agreeBox: {
    height: '100%',
    width: '45%',
    backgroundColor: 'white',
    opacity: 1,
    borderWidth: 1,
    borderColor: '#2CB07B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  agreeBoxCheck: {
    height: '100%',
    width: '45%',
    backgroundColor: 'white',
    opacity: 1,
    borderColor: '#2CB07B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  agreeBoxGreen: {
    display: 'none',
  },
  agreeBoxGreenCheck: {
    // backgroundColor:2CB07B
    height: '100%',
    width: '100%',
    backgroundColor: '#2CB07B',
    opacity: 0.8,
    //borderWidth: 1,
    // borderColor: '#2CB07B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  checkMark: {
    position: 'absolute',
  },
  buttonWrap: {
    minHeight: 130,
    height: '10%',
    width: '100%',
    justifyContent: 'flex-end',
    // paddingTop: '10%',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 100,
    paddingBottom: '10%',
  },
  button: {
    borderRadius: 100,
    width: '50%',
    backgroundColor: '#000326',
    color: 'white',
    display: 'flex',
    height: 40,
    // height: 50,
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
  },
});
