import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const VinCarBanner = () => {
  return (
    <View>
        <Image 
            style={{width: '100%', height: null, aspectRatio: 1920/837,}}
            source={{uri: 'http://192.168.234.1//images/banner/Banner-all-car-VN.jpg'}}
        />
    </View>
  )
}

export default VinCarBanner

const styles = StyleSheet.create({})