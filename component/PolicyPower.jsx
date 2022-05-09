import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {COLORS, FONTS} from '../constants/index'

const PolicyPower = () => {
  return (
    <View style={styles.PolicyPower}>
      <View style={styles.container}>
        <Text style={styles.title}>CHÍNH SÁCH PIN</Text>
        <Text style={styles.title}>LINH HOẠT - TIẾT KIỆM</Text>
        <Text style={styles.desc}>
          Mua pin, thuê pin linh hoạt, tiết kiệm. Khách hàng linh hoạt lựa chọn hình thức mua pin
          {"\n"}
          hoặc thuê pin ưu việt với gói thuê pin chỉ từ 149.000 vnđ/pin/tháng.</Text>
        <Image 
          style={{width: '100%', height: null, aspectRatio: 1553/864}}
          source={{uri: 'http://192.168.234.1/images/policy.png'}}
        />
        <LinearGradient style={styles.buttonPolicy} colors={['#0094FF', '#2C72C6']} start={{x:1,y:0.82}} end={{x:0,y:0.18}}>
          <Text style={styles.button}>Chính sách thuê pin</Text>
        </LinearGradient>
      </View>
    </View>
  )
}

export default PolicyPower

const styles = StyleSheet.create({
  PolicyPower: {
    paddingBottom: 50,
    backgroundColor: '#fbfbfb',
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: '200',
    fontStyle: 'normal',
    letterSpacing: 3.4,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: COLORS.black,
  },
  desc: {
    fontSize: 15,
    marginTop: 15,
    textAlign: 'center',
  },
  buttonPolicy: {
    marginTop: 40,
  },
  button: {
    height: 45,
    fontSize: 16,
    lineHeight: 45,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: COLORS.white,
    borderRadius: 3,
  },
})