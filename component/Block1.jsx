import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import Swiper from 'react-native-swiper'
import block1Api from '../api/home/block1Api'

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
    <Swiper style={styles.wrapper} showsButtons loop={false}>
        {
          block1Data ? block1Data.map((item,index) => (
            <View key={index} style={styles.slide}>
              <Block1Item item={item}/>
            </View>
          )) : null
        }
    </Swiper>
  )
}

const Block1Item = props => (
  <View style={styles.block1Item}>
    <View style={{height: 60}}>
      <Image 
        style={{width: '100%', height: null, aspectRatio: 1200/518}}
        source={{uri: props.item.image}}
      />
    </View>
    <View style={styles.block1ItemInfo}>
      <Text style={styles.block1ItemTitle}>{props.item.title}</Text>
      <Text style={styles.block1ItemDescription}>{props.item.description}</Text>
    </View>
  </View>
)

const styles = {
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
    block1Item: {
      height: 500,
    },
    block1ItemInfo: {
      width: '90%',
      // marginTop: -30,
      top: 60,
      left: '5%',
      backgroundColor: '#FAFAFA',
      borderRadius: 3,
      paddingTop: 30,
      paddingLeft: 30,
      paddingBottom: 70,
      paddingRight: 30,
      zIndex: 9,
    },
    block1ItemTitle: {
      fontSize: 24,
      marginBottom: 32,
      textTransform: 'uppercase',
    },
    block1ItemDescription: {
      fontSize: 18,
      lineHeight: 26,
      color: '#5B5B5B',
    },
}

export default Block1

const style = StyleSheet.create({})