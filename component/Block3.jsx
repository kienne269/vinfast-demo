import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import "intl";
import "intl/locale-data/jsonp/en";
import block3Api from '../api/home/block3Api'
import {COLORS} from '../constants/theme'
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import ButtonLink from './ButtonLink'

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
        <View style={styles.container}>
          <Text style={styles.block3Title}>Xe ô tô</Text>
          <Text style={styles.block3Description}>Hơn cả việc tạo nên một chiếc xe mới, VinFast ra đời đại diện cho tinh thần và niềm kiêu hãnh dân tộc.</Text>
          <Swiper style={styles.wrapper} showsButtons={false} loop={true}>
              {
                block3Data ? block3Data.map((item,index) => (
                  <View key={index} style={styles.slide}>
                    <View>
                      <Image 
                        style={{width: '100%', height: 240,}}
                        source={{uri: item.path}}
                      />
                      <Text style={styles.slogan}>{item.slogan}</Text>
                      <Text style={styles.name}>{item.name}</Text>
                      <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={styles.type}>
                          <Text style={styles.title}>Dòng xe</Text>
                          <Text style={styles.noname}>{item.vehicles}</Text>
                        </View>
                        <View style={styles.price}>
                          <Text style={styles.title}>Giá niêm yết</Text>
                          <Text style={styles.noname}>{new Intl.NumberFormat('en').format(item.price)} vnđ</Text>
                        </View>
                      </View>
                      <ButtonLink style={styles.deposit} label='Mua ngay' screen="Car" params={{ id: item.name }} />
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('CarDetail', {
                          itemId: item.product_id,
                          nameParam: item.name,
                        })}
                      >
                        <Text style={styles.detail}>Xem chi tiết</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )) : null
              }
          </Swiper>
        </View>
      </View>
    )
}

export default Block3

const styles = StyleSheet.create({
  block3: {
    
  },
  container: {
    paddingHorizontal: 20,
    marginHorizontal: 'auto',
    width: '100%',
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
    backgroundColor: COLORS.white,
  },
  block3Description: {
    color: '#707070',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  wrapper: {
    // width: '100%',
    height: 716,
  },
  slogan: {
    marginTop: 36,
    marginBottom: 8,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 28,
    color: '#3c3c3c',
  },
  name: {
    marginBottom: 24,
    fontSize: 48,
    lineHeight: 60,
    fontWeight: '200',
    fontStyle: 'normal',
    color: '#3C3C3C',
  },
  type: {

  },
  price: {

  },
  title: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
    color: '#3C3C3C',
    marginBottom: 8,
  },
  noname: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 28,
    color: '#3C3C3C',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  deposit: {
    fontWeight: '400',
    width: '100%',
    fontSize: 14,
    borderRadius: 0,
    backgroundColor: '#1464f4',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#1464f4',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '100%',
    borderRadius: 0,
    alignItems: "center",
  },
  detail: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    textTransform: 'uppercase',
    paddingVertical: 14,
    color: '#1464f4',
  }
});