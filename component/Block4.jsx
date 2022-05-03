import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, {useState, useEffect} from 'react'
import Swiper from 'react-native-swiper'
import block4Api from '../api/home/block4Api'
import {COLORS} from '../constants/theme'

const Block4 = ({navigation}) => {
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
      <Text style={styles.block4Title}>Xe máy điện</Text>
      <Swiper style={styles.wrapper} loop={true} autoplay 
        dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 20, marginBottom: 3,}} />}
        activeDot={<View style={{backgroundColor: '#007aff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 20, marginBottom: 3,}} /> }
      > 
        {
          block4Data ? block4Data.map((item,index) => (
            <View key={index} style={styles.slide}>
                <Block4Item item={item}/>
            </View>
          )) : null
        }
      </Swiper>
    </View>
  )
}

const Block4Item = props => (
  <View>
    <ImageBackground source={{uri: 'http://192.168.234.1//images/vinfast-data-01/bg_xe_may_slide.png'}} style={[{width: '100%', height: null, aspectRatio: 2880/506}, styles.info]}>
      <View style={styles.infoBody}>
        <Image 
          style={{width: 346, height: 248, resizeMode: 'contain',}}
          source={{uri: props.item.image}}
        />
        <Text style={styles.infoBodyName}>{props.item.name}</Text>
      </View>
      <View style={styles.infoBody}>
        <Text style={styles.infoBodySlogan}>{props.item.slogan}</Text>
        <View style={styles.infoBodyBody}>
          <Text style={styles.infoBodyDesc}>{props.item.description1}</Text>
          <Text style={styles.infoBodyDesc}>{props.item.description2}</Text>
          <Text style={styles.infoBodyDesc}>{props.item.description3}</Text>
          <Text style={styles.infoBodyDesc}>{props.item.description4}</Text>
        </View>
      </View>
    </ImageBackground>
  </View>
)

export default Block4

const styles = StyleSheet.create({
  block4: {
    borderWidth: 1,
    borderBottomColor: '#707070',
    borderStyle: 'solid',
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
    textTransform: 'uppercase',
    backgroundColor: COLORS.white,
  },
  wrapper: {
    width: '100%',
    height: 716,
  },
  info: {
  },
  infoBody: {
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 50,
    paddingLeft: 20,
  },
  infoBodyDongXe: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 4,
    color: "#707070",
    marginBottom: 30,
    // fontFamily: "Mulish",
  },
  infoBodySlogan: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 29,
    color: COLORS.black,
    marginBottom: 20,
  },
  infoBodyName: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: COLORS.black,
    textAlign: 'center',
  },
  infoBodyBody: {
    height: 213,
    left: 0,
  },
  infoBodyDesc: {
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.black,
    paddingLeft: 15,
    marginBottom: 15,
  },
  imgLienKet: {
    marginTop: 30,
    alignItems: 'center',
    color: '#979797',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
  },
});