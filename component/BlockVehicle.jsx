import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import "intl";
import "intl/locale-data/jsonp/en";
import Button from '../component/Button'
import Swiper from 'react-native-swiper';
import {COLORS} from '../constants/theme'

const BlockVehicle = ({dataApi}) => {

  return (
    <View>
        {
            dataApi ? dataApi.map((item,index) => (
              <BlockVehicleItem item={item} key={index}/>
            )) : null
        }
    </View>
  )
}

export default BlockVehicle

const BlockVehicleItem = ({item}) => (
  <View>
    <Image 
      style={{width: '100%', height: 235,}}
      source={{uri: item.path}}
    />
    <Text style={styles.slogan}>{item.slogan}</Text>
    <Text style={styles.name}>{item.name}</Text>
    <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
      <View style={styles.type}>
        <Text style={styles.title}>Dòng xe</Text>
        <Text style={styles.noname}>{item.vehicles}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.title}>Giá niêm yết</Text>
        <Text style={styles.noname}>{new Intl.NumberFormat('en').format(item.price)} vnđ</Text>
      </View>
    </View>
    <Button style={styles.deposit} label='Đặt cọc ngay' />
    <Text style={styles.viewAll}>Xem chi tiết</Text>
  </View>
)

const styles = StyleSheet.create({
  blockVehicle: {
    
  },
  container: {
    paddingHorizontal: 20,
    marginHorizontal: 'auto',
    width: '100%',
  },
  blockVehicleTitle: {
    fontWeight: '300',
    paddingTop: 50,
    paddingBottom: 50,
    fontSize: 30,
    fontWeight: '300',
    color: COLORS.black,
    letterSpacing: 0,
    textAlign: 'center',
    lineHeight: 44,
    backgroundColor: COLORS.white,
  },
  blockVehicleDescription: {
    color: '#707070',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  wrapper: {
    width: '100%',
    height: 716,
  },
  slogan: {
    marginTop: 36,
    marginBottom: 8,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 28,
    color: '#3c3c3c',
  },
  name: {
    marginBottom: 24,
    fontSize: 48,
    lineHeight: 60,
    fontWeight: '200',
    fontStyle: 'normal',
    color: '#3C3C3C',
  },
  type: {

  },
  price: {

  },
  title: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
    color: '#3C3C3C',
    marginBottom: 8,
  },
  noname: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 28,
    color: '#3C3C3C',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  deposit: {
    fontWeight: '400',
    width: '100%',
    fontSize: 14,
    borderRadius: 0,
  },
  viewAll: {
    backgroundColor: '#fff',
    color: '#1464f4',
    width: '100%',
    textAlign:'center',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 15,
    textTransform: 'uppercase',
    paddingVertical: 14,
  },
});