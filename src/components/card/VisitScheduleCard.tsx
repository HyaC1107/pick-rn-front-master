import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Carousel from '@/components/carousel/Carousel';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@/constants/context';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const data = {
  dt: '2023년 4월 1일',
  nm: 'test',
  review: false,
  isCheck: true,
  state: 1,
};

interface SchecduleCardProps {
  tm: string;
  nm: string;
  addr: string;
}
export default function VisitScheduleCard(
  data: SchecduleCardProps,
): JSX.Element {
  return (
    <View
      style={{
        width: WINDOW_WIDTH * 0.8,
        // justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
        padding: '2%',
        flexDirection: 'row',
        gap: 10,
      }}>
      <View
        style={{
          backgroundColor: '#F6F6F6',
          height: WINDOW_HEIGHT * 0.09,
          width: WINDOW_HEIGHT * 0.09,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}>
        <Text style={{fontWeight: '700', fontSize: responsiveFontSize(1.6)}}>
          시공예정
        </Text>
        <Text style={{fontWeight: '700', fontSize: responsiveFontSize(2)}}>
          {data.tm}
        </Text>
      </View>
      <View
        style={{
          height: WINDOW_HEIGHT * 0.09,
          justifyContent: 'center',
          gap: 5,
        }}>
        <Text style={{fontWeight: '700', fontSize: responsiveFontSize(2)}}>
          {data.nm} 고객님
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(1.6),
            color: '#656565',
            width: WINDOW_WIDTH * 0.5,
          }}>
          {data.addr}
        </Text>
      </View>
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
