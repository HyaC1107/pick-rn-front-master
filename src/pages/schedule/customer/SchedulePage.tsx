import React, {useRef, useState} from 'react';
import {
  Animated,
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styled, {css} from 'styled-components/native';

import {
  RouteProp,
  StackNavigationState,
  TypedNavigator,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import SchedulePopup from '@/pages/popup/SchedulePopup';
import ScheduleCardComponent from '@/components/card/ScheduleCardComponent';
import {scheduleData} from './schedule';

export default function SchedulePage(): JSX.Element {
  const navigation = useNavigation<any>();
  const router = useRoute<any>();
  const handlePopup = () => {
    navigation.setParams({...router.params, popupOpen: false});
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          padding: '5%',
          alignItems: 'center',
          marginBottom: '2%',
        }}>
        <Text style={{fontSize: 16}}>업체에서 확인하고 있습니다</Text>
      </View>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {scheduleData.map((el: any, i: number) => {
          return (
            <ScheduleCardComponent
              key={i}
              i={i}
              dt={el.dt}
              nm={el.nm}
              review={el.review}
              isCheck={el.isCheck}
              state={el.state}
              thumnailList={el.thumnailList}
            />
          );
        })}
      </ScrollView>
      <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
        <View
          style={{
            width: '50%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#416292',
          }}>
          <Text style={{color: 'white', fontWeight: '600'}}>스케줄 안내문</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('SetServiceTime')}>
          <View
            style={{
              width: '50%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: 'white',
              borderTopColor: '#F6F6F6',
              borderTopWidth: 1,
            }}>
            <Image source={require('@/assets/images/scheduleler0.5.png')} />
            <Text style={{fontWeight: '600', paddingLeft: '5%'}}>
              스케줄관리
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {router.params?.popupOpen && <SchedulePopup handlePopup={handlePopup} />}
      {/* <PickService /> */}
      {/* {showPopup && <IntroServicePopup />} */}
      {/* // <CategorySelWarnPopup /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  rootWrapper: {
    //justifyContent: 'center',
    //alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flex: 1,
  },
  locationWrapper: {
    height: '10%',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    //backgroundColor: '#ff0',
    position: 'relative',
    paddingBottom: '5%',
  },

  // font Style1 : 예약중
  // font Style2 : 예약완료
  // font Style3 : 예약불가
  // fontStyle1Wrap: 예약중, 예약완료 wrap
  // fontStyleOtherWrap: 예약불가wrap
  fontaStyle1Wrap: {
    borderTopWidth: 1,
    borderColor: '#F1F1F5',
    padding: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  fontStyle1: {
    paddingLeft: '5%',
    paddingRight: '5%',
    color: '#656565',
    fontWeight: '600',
  },
  fontStyle2: {
    paddingLeft: '5%',
    paddingRight: '5%',
    color: '#2CB07B',
    fontWeight: '600',
  },
  fontStyleOtherWrap: {
    borderTopWidth: 1,
    borderColor: '#F1F1F5',
    padding: '2%',
    alignItems: 'center',
  },
  fontStyle3: {
    paddingLeft: '5%',
    color: '#EB701F',
    fontWeight: '600',
  },
});
