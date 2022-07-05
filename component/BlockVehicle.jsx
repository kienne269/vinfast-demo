import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import Swiper from 'react-native-swiper'
import block3Api from '../api/home/block3Api'
import ButtonLink from './ButtonLink'
import Button from './Button'
import { COLORS } from '../constants'
import luxsa from '../assets/data/Image360View';
import CarDetail from './CarDetail'

const BlockVehicle = ({dataApi, screen, navigation}) => {
  const initialCurrentLocation = {
    streetName: "Kuching",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919932    
    }
  }
  const [currentLocation, useCurrentLocation] = useState(initialCurrentLocation)
  return (
    <View style={styles.block1}>
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={false} loop={true}>
            {
              dataApi ? dataApi.map((item,index) => (
                <View key={index} style={styles.slide}>
                  <BlockVehicleItem navigation={navigation} screen={screen} item={item} key={index}/>
                </View>
              )) : null
            }
        </Swiper>
      </View>
    </View>
  )
}

const BlockVehicleItem = ({item, screen, navigation}) => (
  <View>
    <Image 
      style={{width: '100%', height: 240,}}
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
    <ButtonLink style={styles.deposit} label='Mua ngay' screen={screen} params={{ id: item.name }} />
    <TouchableOpacity style={styles.deposit} label='Xem chi tiết' screen="CarDetail" params={{ id: 1 }} />
  </View>
)

export default BlockVehicle

const styles = StyleSheet.create({
  blockVehicle: {
    
  },
  container: {
    // paddingHorizontal: 20,
    // marginHorizontal: 'auto',
    // width: '100%',
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
    // width: '100%',
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
    backgroundColor: '#1464f4',
    marginTop: 20,
  },
  viewAll: {
    backgroundColor: '#fff',
    borderColor: '#1464f4',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '100%',
    textAlign:'center',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 15,
    textTransform: 'uppercase',
    paddingVertical: 14,
    borderRadius: 0,
  },
})