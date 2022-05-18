import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import "intl";
import "intl/locale-data/jsonp/en";
import block3Api from '../api/home/block3Api'
import {COLORS} from '../constants/theme'
import BlockVehicle from './BlockVehicle';

const Block3 = () => {
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
        <BlockVehicle screen="Car" dataApi={block3Data}/>
      </View>
    </View>
  )
}

export default Block3

const styles = StyleSheet.create({
  block3: {
    
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
    width: '100%',
    height: 716,
  },
});