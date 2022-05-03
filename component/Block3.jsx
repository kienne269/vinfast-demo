import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, {useState, useEffect} from 'react'
import Swiper from 'react-native-swiper'
import block3Api from '../api/home/block3Api'
import {COLORS} from '../constants/theme'

const Block3 = ({navigation}) => {
  const [block3Data, setBlock3Data] = useState([])

    useEffect(() => {
        const getBlock3 = async () => {
            try {
                const res = await block3Api.getAll()
                setBlock3Data(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getBlock3()  
    }, [])

  return (
    <View style={styles.block3}>
      <Text style={styles.block3Title}>Xe ô tô</Text>
      <Swiper style={styles.wrapper} loop={true} autoplay 
        dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 20, marginBottom: 3,}} />}
        activeDot={<View style={{backgroundColor: '#007aff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 20, marginBottom: 3,}} /> }
      >
        {
          block3Data ? block3Data.map((item,index) => (
            <View key={index}>
              <View key={index} style={styles.slide}>
                <Block3Item item={item}/>
              </View>
            </View>
          )) : null
        }
      </Swiper>
    </View>
  )
}

const Block3Item = props => (
  <View>
    <ImageBackground source={{uri: 'http://192.168.234.1//images/vinfast-data-01/bgcar.png'}} style={[{width: '100%', height: '100%'}, styles.info]}>
      <View style={styles.infoBody}>
        <Text style={styles.infoBodyDongXe}>{props.item.dongxe}</Text>
        <Text style={styles.infoBodySlogan}>{props.item.slogan}</Text>
        <Text style={styles.infoBodyName}>{props.item.name}</Text>
      </View>
      <View>
        <Image 
            style={{width: '100%', height: null, aspectRatio: 720/104}}
            source={{uri: 'http://192.168.234.1//images/vinfast-data-01/bg-title-car.png'}}
        />
      </View>
      <View style={styles.infoBody}>
        <View style={styles.infoBodyBody}>
          <Text style={styles.infoBodyDesc}>{props.item.description1}</Text>
          <Text style={styles.infoBodyDesc}>{props.item.description2}</Text>
          <Text style={styles.infoBodyDesc}>{props.item.description3}</Text>
          <Text style={styles.infoBodyDesc}>{props.item.description4}</Text>
        </View>
      </View>
      <View style={styles.imgLienKet}>
        <Text style={{marginBottom: 10,}}>Chi tiết</Text>
        <Image 
          style={{width: 68, height: 68,resizeMode: 'contain'}}
          source={{uri: 'http://192.168.234.1//images/vinfast/logo_gray.png'}}
        />
        <Image 
          style={{width: 380, height: 276, resizeMode: 'contain'}}
          source={{uri: props.item.image}}
        />
      </View>
    </ImageBackground>
  </View>
)

export default Block3

const styles = StyleSheet.create({
  block3: {
    borderWidth: 1,
    borderBottomColor: '#707070',
    borderStyle: 'solid',
  },
  block3Title: {
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
    borderTopColor: '#dadada',
    borderStyle: 'solid',
  },
  wrapper: {
    width: '100%',
    height: 955,
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