import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants/index'
import Swiper from 'react-native-swiper'

const FourEase = () => {
  const fourEase = [
    {
      image: 'http://192.168.234.1/images/login-register.png',
      imgaeArrow: 'http://192.168.234.1/images/arrow.png',
      descTop: 'Đăng nhập / đăng ký',
      descBottom: '& Lựa chọn xe',
    },
    {
      image: 'http://192.168.234.1/images/order.png',
      imgaeArrow: 'http://192.168.234.1/images/arrow.png',
      descTop: 'Đặt mua',
      descBottom: '& Chọn Showroom nhận xe',
    },
    {
      image: 'http://192.168.234.1/images/payment-method.png',
      imgaeArrow: 'http://192.168.234.1/images/arrow.png',
      descTop: 'Chọn phương thức thanh toán',
      descBottom: '(COD, trả trước, trả góp 0%)',
    },
    {
      image: 'http://192.168.234.1/images/showroom.png',
      imgaeArrow: 'none',
      descTop: 'Đến Showroom kiểm tra',
      descBottom: '& nhận xe',
    },
  ]

  const banner2 = ['http://192.168.234.1/images/banner-evn-vi.png', 'http://192.168.234.1/images/banner2_1.png']
  return (
    <View style={styles.fourEasy}>
      <ImageBackground source={{uri: 'http://192.168.234.1//images/four-easy.png'}}
        style={[{width: '100%', height: '100%'}, styles.fourEasy]}
      >
        <Text style={styles.title}>
          4 BƯỚC ĐƠN GIẢN
          {"\n"}
          MUA ONLINE
        </Text>
        <View style={styles.container}>
          {
            fourEase ? fourEase.map((item, index) => (
              <View style={styles.item} key={index}>
                <Image 
                  style={{width: 100, height: 100}}
                  source={{uri: item.image}}
                />
                <Text style={styles.desc}>
                  {item.descTop}
                  {"\n"}
                  {item.descBottom}
                </Text>
                <Image 
                  style={[{width: 11, height: 22}, styles.arrow]}
                  source={{uri: item.imgaeArrow}}
                />
              </View>
            )) : null
          }
        </View>
      </ImageBackground>
      <Swiper style={styles.wrapper}
        height={500}
        loop
      >
        {
          banner2 ? banner2.map((item,index) => (
            <View key={index} style={styles.slide}>
              <Image 
                style={{width: '100%', height: null, aspectRatio: 7079/3063}}
                source={{uri: item}}
              />
            </View>
          )) : null
        }
      </Swiper>
    </View>
  )
}

export default FourEase

const styles = StyleSheet.create({
  fourEasy: {
    // zIndex: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: '200',
    fontStyle: 'normal',
    paddingTop: 50,
    letterSpacing: 6,
    paddingBottom: 30,
    color: COLORS.white,
    textAlign: 'center',
  },
  container: {
    paddingHorizontal: 20,
    marginHorizontal: 'auto',
    width: '100%',
  },
  item: {
    height: 250,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    transform: [{rotate: "90deg"}],
    top: 24,
    zIndex: 100,
  },
  desc: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    paddingTop: 20,
    textAlign: 'center',
  },
  wrapper: {
    backgroundColor: '#fff',
    zIndex: 100,
  },
  slide: {

  },
})