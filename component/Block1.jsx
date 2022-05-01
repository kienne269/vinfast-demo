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
    <View style={styles.block1ItemImage}>
      <Image 
        style={{width: '100%', height: null, aspectRatio: 394/570}}
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
    wrapper: {},
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    block1Item: {

    },
    block1ItemImage: {

    },
    block1ItemTitle: {

    },
    block1ItemDescription: {

    },
}

export default Block1

const style = StyleSheet.create({})