import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Swiper from 'react-native-swiper'
import {COLORS, FONTS} from '../constants/index'

const SalePower = () => {
    const bikeNew = [
        {
            img: 'http://192.168.234.1/images/bike/bike-klara-s-2022.jpg',
            name: 'KLARA S (2022)',
            price: '36.900.000',
            kilomet: '194',
        },
        {
            img: 'http://192.168.234.1/images/bike/bike-feliz-s.jpg',
            name: 'FELIZ S',
            price: '29.900.000',
            kilomet: '198',
        },
    ]
    const bikeHot = [
        {
            img: 'http://192.168.234.1/images/bike/klaras.png',
            name: 'KLARA S - Xanh lục',
            price: '39.900.000',
            kilomet: '120',
        },
        {
            img: 'http://192.168.234.1/images/bike/feliz.png',
            name: 'FELIZ - Đỏ',
            price: '24.900.000',
            kilomet: '90',
        },
        {
            img: 'http://192.168.234.1/images/bike/bike-klara-a2.jpg',
            name: 'KLARA A2 - 2021',
            price: '26.900.000',
            kilomet: '90',
        },
        {
            img: 'http://192.168.234.1/images/bike/impes-red.jpg',
            name: 'IMPES - Xanh đậm',
            price: '14.900.000',
            kilomet: '70',
        },
        {
            img: 'http://192.168.234.1/images/bike/impres-blue.jpg',
            name: 'IMPES - Đỏ',
            price: '14.900.000',
            kilomet: '70',
        },
        {
            img: 'http://192.168.234.1/images/bike/klara-s-black.jpg',
            name: 'KLARA S - Đen',
            price: '39.900.000',
            kilomet: '120',
        },
        {
            img: 'http://192.168.234.1/images/bike/ludo-red.jpg',
            name: 'LUDO - Đỏ',
            price: '12.900.000',
            kilomet: '75',
        },
    ]
  return (
    <LinearGradient colors={['#fff', '#F5FAFF']} style={styles.salesPower}>
      <View style={styles.container}>
        <View style={styles.salesPowerNew}>
            <Text style={styles.title}>Sản phẩm mới</Text>
            <View style={styles.row}>
                {
                    bikeNew.map((item, index) => (
                        <View style={styles.item} key={index}>
                            <View style={styles.container}>
                                <Image 
                                    style={{width: '100%', height: null, aspectRatio: 1000/1000}}
                                    source={{uri: item.img}}
                                />
                                <View style={styles.salesPowerNewPrice}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.price}>{item.price} vnđ</Text>
                                    <Text style={styles.desc}>Giá đã bao gồm VAT, 01 bộ sạc, không bao gồm pin</Text>
                                </View>
                                <View style={styles.salesPowerNewEndow}>
                                    <Text style={styles.powerText}>Ưu đãi</Text>
                                    <Text style={styles.powerTextPrice}>Trả góp lãi suất 0%</Text>
                                </View>
                                <View style={styles.salesPowerNewEndow}>
                                    <Text style={styles.powerText}>Quãng đường</Text>
                                    <Text style={styles.powerTextPrice}>lên tới {item.kilomet} km/ 1 lần sạc</Text>
                                </View>
                                
                                <View style={styles.buy}>
                                    <Text style={styles.seeDetail}>Xem chi tiết</Text>
                                    <Text style={styles.buttonBuy}>Mua ngay</Text>
                                </View>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
      </View>
      <View style={styles.product}>
        <View style={styles.container}>
            <View style={styles.SalesPowerHot}>
                <Text style={[styles.title, styles.titleHot]}>Sản phẩm bán chạy</Text>
                <Swiper style={styles.wrapper}
                    // height={700}
                    loop
                >
                    {
                        bikeHot ? bikeHot.map((item,index) => (
                            <View key={index} style={styles.slide}>
                                <Image 
                                    style={{width: '100%', height: null, aspectRatio: 720/732}}
                                    source={{uri: item.img}}
                                />
                                <Text style={[styles.title, styles.titleItem]}>{item.name}</Text>
                                <View style={styles.container}>
                                    <View style={styles.salesPowerHotEndow}>
                                        <Text style={styles.totalName}>Giá bán</Text>
                                        <Text style={styles.totalPrice}>{item.price} vnđ</Text>
                                    </View>
                                    <View style={styles.salesPowerHotEndow}>
                                        <Text style={styles.priceName}>Ưu đãi</Text>
                                        <Text style={styles.priceName}>Trả góp lãi suất 0%</Text>
                                    </View>
                                    <View style={styles.salesPowerHotEndow}>
                                        <Text style={styles.priceName}>Quãng đường</Text>
                                        <Text style={styles.priceName}>lên tới {item.kilomet} km/ 1 lần sạc</Text>
                                    </View>
                                    <View style={styles.buy}>
                                        <Text style={styles.seeDetail}>Xem chi tiết</Text>
                                        <Text style={styles.buttonBuy}>Mua ngay</Text>
                                    </View>
                                </View>
                            </View>
                        )) : null
                    }
                </Swiper>
            </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default SalePower

const styles = StyleSheet.create({
    salesPower: {
        // backgroundColor: '#f5faff',
    },
    container: {
        paddingHorizontal: 20,
        marginHorizontal: 'auto',
        width: '100%',
    },
    salesPowerNew: {
        
    },
    title: {
        marginTop: 70,
        marginBottom: 40,
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 60,
        color: COLORS.black,
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: 5,
        backgroundColor: COLORS.white,
    },
    row: {
    
    },
    item: {
        backgroundColor: COLORS.white,
    },
    salesPowerNewPrice: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#e4e4e4',
    },
    name: {
        padding: 20,
        fontSize: 22,
        fontWeight: '600',
        fontStyle: 'normal',
        paddingBottom: 0,
        lineHeight: 33,
        marginBottom: 5,
    },
    price: {
        fontSize: 22,
        fontWeight: '700',
        fontStyle: 'normal',
        textAlign: 'center',
        color: "#1464f4",
        marginBottom: 5,
    },
    desc: {
        fontWeight: '400',
        fontSize: 12,
    },
    powerTextKm: {

    },
    salesPowerNewEndow: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        padding: 10,
    },
    powerText: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 22,
        color: COLORS.black,
        
    },
    powerTextPrice: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 22,
        color: COLORS.black,
    },
    buy: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 20,
    },
    seeDetail: {
        flexBasis: '48%',
        height: 40,
        lineHeight: 40,
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: "#1464f4",
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonBuy: {
        flexBasis: '48%',
        height: 40,
        lineHeight: 40,
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: COLORS.white,
        backgroundColor: "#1464f4",
        textAlign: 'center',
        borderRadius: 3,
    },
    product: {
    },
    titleHot: {
        backgroundColor: '#f5faff',
    },
    slide: {
        backgroundColor: COLORS.white,
    },
    titleItem: {
        marginTop: 0,
        letterSpacing: 0,
        marginBottom: 10,
    },
    salesPowerHotEndow: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
    },
    totalName:{
        color: COLORS.black,
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700',

    },
    totalPrice: {
        color: "#1464f4",
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '700',
        textAlign: 'right',
    },
    priceName: {
        color: COLORS.black,
        fontSize: 14,
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: '400',
    },
    priceDesc: {
        color: COLORS.black,

    },
})