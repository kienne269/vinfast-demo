import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import VinCarBanner from '../component/VinCarBanner'
import VinCarDeposit from '../component/VinCarDeposit'

const Car = ({navigation}) => {
  return (
    <ScrollView style={styles.car}>
      <VinCarBanner/>
      <VinCarDeposit navigation={navigation}/>
    </ScrollView>
  )
}

export default Car

const styles = StyleSheet.create({
  car: {
    backgroundColor: '#fff',
  },
})