import { StyleSheet, Text, View, Image, } from 'react-native'
import React, {useState, useEffect} from 'react'
import Swiper from 'react-native-swiper'
import block1Api from '../api/home/block1Api'
import Button from '../component/Button'
import { COLORS } from '../constants'

const Block1 = () => {

  const [block1Data, setBlock1Data] = useState([])
    useEffect(() => {
        
        const getBlock1 = async () => {
            try {
                const res = await block1Api.getAll()
                setBlock1Data(res.data)
            } catch(err) {
                alert(err)
            }
        }
        getBlock1()
    }, [])
  return (
    <View style={styles.block1}>
      <View style={styles.container}>
        <Button style={styles.button} label='Đặt cọc ngay' />
        <Swiper style={styles.wrapper} showsButtons loop={false}>
            {
              block1Data ? block1Data.map((item,index) => (
                <View key={index} style={styles.slide}>
                  <Block1Item item={item}/>
                </View>
              )) : null
            }
        </Swiper>
      </View>
    </View>
  )
}

const Block1Item = props => (
  <View style={styles.block1Item}>
    <View style={styles.block1ItemInfo}>
      <Text style={styles.block1ItemTitle}>{props.item.title}</Text>
      <Text style={styles.block1ItemDescription}>{props.item.description}</Text>
    </View>
    <Image 
      style={{width: '100%', height: null, aspectRatio: 1820/754}}
      source={{uri: props.item.path}}
    />
  </View>
)

export default Block1

const styles = StyleSheet.create({
  wrapper: {
    height: 560,
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  block1: {
    backgroundColor: COLORS.white,
  },
  container: {
    paddingHorizontal: 20,
    marginHorizontal: 'auto',
    width: '100%',
  },
  block1Item: {
    height: 500,
  },
  block1ItemInfo: {
    marginBottom: 36,
    marginTop: 20,
    // width: '90%',
    // // marginTop: -30,
    // top: 60,
    // left: '5%',
    // backgroundColor: '#FAFAFA',
    // borderRadius: 3,
    // paddingTop: 30,
    // paddingLeft: 30,
    // paddingBottom: 70,
    // paddingRight: 30,
    // zIndex: 9,
  },
  block1ItemTitle: {
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 10,
    fontWeight: '300',
    textAlign: 'center',
    minHeight: 60,
  },
  block1ItemDescription: {
    fontSize: 18,
    lineHeight: 26,
    color: '#707070',
    minHeight: 250,
  },
  button: {
    width: 200,
    backgroundColor: '#1464F4',
    paddingHorizontal: 15,
    marginTop: 20,
    marginLeft: 80,
    borderRadius: 0,
  },
})