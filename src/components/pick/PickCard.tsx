import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

// import Carousel from '@components/carousel/Carousel';
import Carousel2 from '@components/carousel/Carousel2';

const data = [
  {dt: '2023년 4월 1일', nm: 'test', review: false},
  {dt: '2023년 4월 1일', nm: 'test', review: false},
  {dt: '2023년 4월 1일', nm: 'test', review: false},
  {dt: '2023년 4월 1일', nm: 'test', review: false},
  {dt: '2023년 4월 1일', nm: 'test', review: false},
  {dt: '2023년 4월 2일', nm: 'test', review: false},
  {dt: '2023년 4월 2일', nm: 'test', review: false},
  {dt: '2023년 4월 2일', nm: 'test', review: false},
  {dt: '2023년 4월 2일', nm: 'test', review: true},
];
/* PickCardProps
1. PickCardProps 속성 : index, thumUrl, like, subscribe, storNm, tagString
2. 속성설명
- index:  카드구분 index
- thumUrl: 서비스 썸네일
- like: 하트아이콘
- subscribe: 사람모양아이콘
- storeNm: 업체명
- tagString: 태그값들 ' '으로 구분된 1개의 스트링
*/
interface PickCardPropsImpl {
  index: number;
  thumUrl: any;
  like: string;
  subscribe: string;
  storeNm: string;
  tagString: string;
  detailImgList: string[];
}
interface PickCardProps {
  data: PickCardPropsImpl;
}
export default function PickCard(cardProps: PickCardProps): JSX.Element {
  const {data} = cardProps;
  useEffect(() => {
    // console.log(data.detailImgList);
  }, []);
  return (
    <View
      key={data.index}
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
      }}>
      <View
        style={{
          width: '90%',
          height: Dimensions.get('window').height * 0.4,
          borderRadius: 10,
          shadowColor: '#ababab',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,
          backgroundColor: 'white',
          elevation: 3,
        }}>
        <View style={{width: '100%', height: '30%', flexDirection: 'row'}}>
          <View style={{padding: '5%'}}>
            <Image source={data.thumUrl} />
          </View>
          <View
            style={{
              paddingTop: '10%',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                paddingBottom: '7%',
              }}>
              {data.storeNm}
            </Text>
            <View style={{flexDirection: 'row'}}>
              {data.tagString.split(' ').map((el, i) => {
                return (
                  <Text
                    style={{
                      fontSize: 12,
                      paddingRight: '2%',
                      color: '#656565',
                    }}>
                    {el}
                  </Text>
                );
              })}
            </View>
          </View>
        </View>
        <View
          style={{
            paddingTop: '10%',
            width: '100%',
            height: '65%',
          }}>
          <Carousel2 data={data.detailImgList} />
        </View>
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
});
