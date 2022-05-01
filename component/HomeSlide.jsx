import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import Swiper from 'react-native-swiper'
import vinSlideApi from '../api/home/vinSlideApi'

const HomeSlide = () => {

  const [homeSlideData, setHomeSlideData] = useState([])
    useEffect(() => {
        
        const getHomeSlide = async () => {
            try {
                const res = await vinSlideApi.getAll()
                setHomeSlideData(res.data)
            } catch(err) {
                alert(err)
            }
        }
        getHomeSlide()
    }, [])
  return (
    <View style={styles.HomeSlide}>
      <Swiper style={styles.wrapper}
          height={240}
          loop
        >
        {
          homeSlideData ? homeSlideData.map((item,index) => (
            <View key={index} style={styles.slide}>
              <Image 
                style={{width: '100%', height: null, aspectRatio: 3840/1662}}
                source={{uri: item.banner}}
              />
            </View>
          )) : null
        }
      </Swiper>
      <View style={styles.HomeSlideContent}>
        <Text style={styles.slogan}>Cùng bạn</Text>
        <Text style={styles.slogan}>bứt phá mọi giới hạn</Text>
        <Text style={styles.title}>Vượt tầm nhìn toàn cầu, VinFast sáng tạo không ngừng nghỉ để mang lại những sản phẩm đẳng cấp, trải nghiệm thông minh và giá trị vượt trội cho khách hàng.</Text>
      </View>
    </View>
  )
}

const styles = {
    HomeSlide: {
    },
    wrapper: {
      height: 250
    },
    slide: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: 'transparent'
    },
    slogan: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontWeight: '300',
      letterSpacing: 2,
      // fontFamily: 'Open Sans',
    },
    title: {
      color: '#fff',
      fontSize: 13,
      fontWeight: 'bold',
      // fontFamily: 'Open Sans',
      marginTop: 4,
      lineHeight: 18,
    },
    HomeSlideImage: {
      
    },
    HomeSlideContent: {
      paddingTop: 28,
      paddingLeft: 28,
      backgroundColor: '#1f2125',
      // flex: 0.3,
      height: 178,
      marginTop: -70,
    },
    HomeSlideTitle: {

    },
    HomeSlideDescription: {

    },
}

export default HomeSlide

const style = StyleSheet.create({})