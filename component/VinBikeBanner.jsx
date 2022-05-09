import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

const VinBikeBanner = () => {

    const bikeBanners = ['http://192.168.234.1//images/Slide/bike-deposit-desktop.png', 'http://192.168.234.1//images/Slide/EVN-Tragop-0D.jpg', 'http://192.168.234.1//images/Slide/3.png']
  return (
    <View style={styles.banner}>
        <Swiper style={styles.wrapper}
          height={240}
          loop
        >
            {
                bikeBanners ? bikeBanners.map((item,index) => (
                    <View key={index} style={styles.slide}>
                        <Image 
                            style={{width: '100%', height: null, aspectRatio: 2800/1246}}
                            source={{uri: item}}
                        />
                    </View>
                )) : null
            }
        </Swiper>
        <View style={styles.table}>
            <View style={styles.column}>
                <Image 
                    style={{width: 60, height: 60}}
                    source={{uri: 'http://192.168.234.1//images/bike/pay.png'}}
                />
                <Text style={styles.colText}>
                    <Text style={styles.colorBlue}>Thanh toán</Text>
                    {"\n"}
                    Khi nhận xe
                </Text>
            </View>
            <View style={styles.column}>
                <Image 
                    style={{width: 60, height: 60}}
                    source={{uri: 'http://192.168.234.1//images/bike/sales.png'}}
                />
                <Text style={styles.colText}>
                    Ưu đãi trả góp
                    {"\n"}
                    <Text style={styles.colorBlue}>Lãi xuất 0%</Text>
                </Text>
            </View>
            <View style={styles.column}>
                <Image 
                    style={{width: 60, height: 41}}
                    source={{uri: 'http://192.168.234.1//images/bike/car.png'}}
                />
                <Text style={styles.colText}>
                    Nhận xe tại hệ thống
                    {"\n"}
                    <Text style={styles.colorBlue}>Showroom trên toàn quốc</Text>
                </Text>
            </View>
        </View>
    </View>
  )
}

export default VinBikeBanner

const styles = StyleSheet.create({
    banner: {
    },
    wrapper: {
    },
    table: {
        
    },
    column: {
        padding: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: '#e4e4e4',
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    colText: {
        marginTop: 10,
        paddingLeft: 40,
        fontSize: 16,
        fontWeight: '700',
        fontStyle: 'normal',
        textTransform: 'uppercase',
    },
    colorBlue: {
        color: '#1464f4',
        paddingBottom: 10,
    }
})