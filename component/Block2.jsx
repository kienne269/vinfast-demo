import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import Swiper from 'react-native-swiper'
import block2Api from '../api/home/block2Api'

const Block2 = () => {
  const [block2Data, setBlock2Data] = useState([])
    useEffect(() => {
        
        const getBlock1 = async () => {
            try {
                const res = await block2Api.getAll()
                setBlock2Data(res.data)
            } catch(err) {
                alert(err)
            }
        }
        getBlock1()
    }, [])

  return (
    <View style={styles.block2}>
      <Text style={styles.block2Title}>Hành trình {"\n"} chinh phục thế giới</Text>
      <Swiper style={styles.wrapper} showsButtons loop={false}>
        {
            block2Data ? block2Data.map((item, index) => (
                <View key={index}>
                  <Block2Item item={item} />
                </View>
            )) : null
        }
      </Swiper>
    </View>
  )
}

const Block2Item = props => (
  <View style={styles.block2Item}>
    <Text style={styles.block2ItemQuote}>"{props.item.quote}"</Text>
    <Text style={styles.block2ItemAuthor}>{props.item.author}</Text>
  </View>
)

export default Block2

const styles = StyleSheet.create({
  block2: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    height: 400,  
  },
  block2Title: {
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 50,
    color: '#1f2125',
    // height: 65,
    letterSpacing: 0,
    textAlign: 'center',
    lineHeight: 40,
  },
  block2Item: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  block2ItemQuote: {
    paddingLeft: 60,
    paddingRight: 60,
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '300',
    color: '#5B5B5B',
    textAlign: 'center',
  },
  block2ItemAuthor: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  }
})