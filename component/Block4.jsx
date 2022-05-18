import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, {useState, useEffect} from 'react'
import "intl";
import "intl/locale-data/jsonp/en";
import Swiper from 'react-native-swiper';
import block4Api from '../api/home/block4Api'
import {COLORS} from '../constants/theme'
import BlockVehicle from './BlockVehicle';

const Block4 = () => {
  const [block4Data, setBlock4Data] = useState([])

    useEffect(() => {
        const getBlock4 = async () => {
            try {
                const res = await block4Api.getAll()
                setBlock4Data(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getBlock4()  
    }, [])

  return (
    <View style={styles.block4}>
      <View style={styles.container}>
        <Text style={styles.block4Title}>Xe máy điện</Text>
        <Text style={styles.block4Description}>Sản phẩm của người Việt, dành cho người Việt với các chính sách ưu đãi tốt nhất thị trường.</Text>
        <BlockVehicle screen="Bike" dataApi={block4Data}/>
      </View>
    </View>
  )
}

export default Block4

const styles = StyleSheet.create({
  block4: {
    
  },
  block4Title: {
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
  block4Description: {
    color: '#707070',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  container: {
    paddingHorizontal: 20,
    marginHorizontal: 'auto',
    width: '100%',
  },
  block4Title: {
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
  block4Description: {
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
});