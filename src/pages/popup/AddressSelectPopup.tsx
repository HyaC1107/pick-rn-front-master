import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
interface AddressPopupProps {
  handleAdress: (data: string) => void;
  handlePopup: () => void;
}
export default function AddressSelectPopup(
  data: AddressPopupProps,
): JSX.Element {
  const {handleAdress, handlePopup} = data;
  const [check, setCheck] = useState(0);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [showPopup, setPopup] = useState(true);

  useEffect(() => {
    if (!check1 || !check2 || !check3 || !check4) setCheck(0);
  }, [check1, check2, check3, check4]);
  return (
    <View style={styles.rootWrapper}>
      <View style={styles.popUpWrap}>
        <View style={styles.barWrap}>
          <View style={styles.bar}></View>
        </View>
        <View style={{height: 20, justifyContent: 'flex-start'}}>
          <View
            style={{
              width: '100%',
              //backgroundColor: '#ff0',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              paddingLeft: '7.5%',
              flexDirection: 'row',
            }}>
            <TextInput style={{width: '80%'}} placeholder="주소를 입력하세요" />
            <TouchableWithoutFeedback
              onPress={() => {
                // onPress action here
              }}>
              <Image
                style={{marginRight: '10%'}}
                source={require('@/assets/images/plus.png')}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
        {/* divier---- */}
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.divider} />
        </View>
        {/* divier---- */}
        <View
          style={{
            flexGrow: 1,
            //backgroundColor: '#ff0',
            width: '100%',
            minHeight: 200,
          }}>
          <ScrollView style={{width: '100%', flex: 1}}>
            <View style={styles.checkGroupWrap}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setCheck(1);
                  handleAdress('서울시 마포구 도화동 00-1');
                }}>
                <View style={styles.iconWrap}>
                  <View
                    style={check === 1 ? styles.iconBox : styles.iconGreyBox}>
                    <Image source={require('@/assets/images/whitecheck.png')} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.textWrap}>
                <Text style={styles.text}>서울시 마포구 도화동 00-1</Text>
              </View>
            </View>
            <View style={styles.checkGroupWrap}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setCheck(2);
                  handleAdress('서울시 마포구 도화동 00-2');
                }}>
                <View style={styles.iconWrap}>
                  <View
                    style={check === 2 ? styles.iconBox : styles.iconGreyBox}>
                    <Image source={require('@/assets/images/whitecheck.png')} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.textWrap}>
                <Text style={styles.text}>서울시 마포구 도화동 00-2</Text>
              </View>
            </View>
            <View style={styles.checkGroupWrap}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setCheck(3);
                  handleAdress('서울시 마포구 도화동 00-3');
                }}>
                <View style={styles.iconWrap}>
                  <View
                    style={check === 3 ? styles.iconBox : styles.iconGreyBox}>
                    <Image source={require('@/assets/images/whitecheck.png')} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.textWrap}>
                <Text style={styles.text}>서울시 마포구 도화동 00-3</Text>
              </View>
            </View>
            <View style={styles.checkGroupWrap}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setCheck(4);
                  handleAdress('서울시 마포구 도화동 00-2');
                }}>
                <View style={styles.iconWrap}>
                  <View
                    style={check === 4 ? styles.iconBox : styles.iconGreyBox}>
                    <Image source={require('@/assets/images/whitecheck.png')} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.textWrap}>
                <Text style={styles.text}>서울시 마포구 도화동 00-2</Text>
              </View>
            </View>
            <View style={styles.checkGroupWrap}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setCheck(5);
                  handleAdress('서울시 마포구 도화동 00-3');
                }}>
                <View style={styles.iconWrap}>
                  <View
                    style={check === 5 ? styles.iconBox : styles.iconGreyBox}>
                    <Image source={require('@/assets/images/whitecheck.png')} />
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <View style={styles.textWrap}>
                <Text style={styles.text}>서울시 마포구 도화동 00-3</Text>
              </View>
            </View>
            <View style={styles.checkGroupWrap}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setCheck(6);
                  handleAdress('서울시 마포구 도화동 00-3');
                }}>
                <View style={styles.iconWrap}>
                  <View
                    style={check === 6 ? styles.iconBox : styles.iconGreyBox}>
                    <Image source={require('@/assets/images/whitecheck.png')} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.textWrap}>
                <Text style={styles.text}>서울시 마포구 도화동 00-3</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.buttonWrap}>
          <TouchableWithoutFeedback
            onPress={() => {
              setPopup(false);
              handlePopup();
            }}>
            <View style={check !== 0 ? styles.button : styles.buttonNonActive}>
              <Text
                style={check !== 0 ? styles.btnTxt : styles.btnTxtNonActive}>
                선택하기
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  close: {display: 'none'},
  rootWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    // backgrou: 0.5,
    position: 'absolute',
  },
  popUpWrap: {
    // position: 'absolute',
    backgroundColor: 'white',
    height: '60%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    width: '100%',
    //  alignItems: 'center',
  },
  barWrap: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    borderWidth: 3,
    width: '30%',
    marginBottom: '5%',
    borderColor: '#707070',
  },
  modalTitle: {},
  checkGroupWrap: {
    width: '100%',
    minHeight: 40,
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: '2%',
    paddingLeft: '7.5%',
    flex: 1,
  },
  checkSubGroupWrap: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: '2%',
    paddingLeft: '18%',
  },
  iconWrap: {
    width: '6%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBox: {
    borderRadius: 5,
    backgroundColor: '#2CB07B',
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGreyBox: {
    borderRadius: 5,
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrap: {
    width: 'auto',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: '2%',
  },
  text: {fontSize: 13},
  divider: {
    borderWidth: 1,
    borderColor: '#F6F6F6',
    width: '85%',
    marginBottom: '5%',
    // marginLeft: '7.5%',
  },
  iconWrapSmall: {
    width: '6.2%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBoxSmall: {
    borderRadius: 5,
    backgroundColor: '#2CB07B',
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGreyBoxSmall: {
    borderRadius: 5,
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSmallWrap: {
    width: 'auto',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  textSmall: {
    fontSize: 12,
    //  backgroundColor: '#ff0',
  },
  buttonWrap: {
    width: '100%',
    paddingLeft: '7.5%',
    paddingRight: '7.5%',
    //justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    //paddingBottom: '40%',
    //backgroundColor: '#ff0',
  },
  button: {
    backgroundColor: '#2CB07B',
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonNonActive: {
    backgroundColor: '#F6F6F6',
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTxt: {
    color: 'white',
    fontSize: 15,
  },
  btnTxtNonActive: {
    color: '#000',
    fontSize: 15,
  },
});
