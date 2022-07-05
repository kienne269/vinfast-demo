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

  const banner2 = ['http://192.168.234.1/images/banner-evn-vi.jpg', 'http://192.168.234.1/images/banner2_1.png']
  return (
    <>
      <View style={styles.fourEasy}>
        <ImageBackground source={{uri: 'http://192.168.234.1//images/four-easy.png'}}
          style={[{width: '100%', height: '100%'}, styles.fourEasy]}
        >
          <Text style={[styles.title, {fontSize: 24,
              fontWeight: '200',
              fontStyle: 'normal',
              paddingTop: 50,
              letterSpacing: 6,
              paddingBottom: 30,
              color: COLORS.white,
              textAlign: 'center',}]}>
            4 BƯỚC ĐƠN GIẢN
            {"\n"}
            MUA ONLINE
          </Text>
          <View style={styles.container}>
            {
              fourEase ? fourEase.map((item, index) => (
                <View style={styles.itemBike} key={index}>
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
      </View>
      <Swiper style={styles.wrapper}
          height={220}
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
    </>
  )
}

export default FourEase

const styles = StyleSheet.create({
  fourEasy: {
    height: 1200,
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
  itemBike: {
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
    zIndex: 100,
    // marginTop: 50,
    backgroundColor: 'red',
  },
  slide: {
  },

  vinCarDeposit: {
    height: 110,
},
vinCarDepositContainer: {
    
},
wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'row',
},
item: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
},
h2: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 20,
    marginBottom: 20,
},
vinCarDetail: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    borderStyle: 'solid',
},
vinCarDetail360: {

},
vinCarDetailSelect: {
    textAlign: 'center',
    marginTop: 100,
    paddingLeft: 30,
    paddingRight: 30,
},
groupNameTitle: {
    
},
title: {
    fontSize: 30,
    fontWeight: '600',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'solid',
    textAlign: 'center',
},
amount: {
    alignItems: 'center', 
    justifyContent: 'center',
},
groupNameColor: {
    alignItems: 'center',
    justifyContent: 'center',
},
listColor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
ItemColorCar: {
    borderRadius: 50,
    borderColor: '#e4e4e4',
    borderStyle: 'solid',
    borderWidth: 3,
    width: 40,
    height: 40,
    marginRight: 10,
},
selectColor: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    width: '100%',
},
colorInterior: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
},
colorName: {
    textAlign: 'center',
},
policy: {
    marginTop: 40,
    marginBottom: 40,
    color: COLORS.blue,
    borderColor: COLORS.blue,
    borderBottomWidth: 1,
    borderStyle: 'solid',
},
})