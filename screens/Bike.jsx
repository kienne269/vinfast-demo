import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import VinBikeBanner from '../component/VinBikeBanner'
import SalePower from '../component/SalePower'
import PolicyPower from '../component/PolicyPower'
import FourEasy from '../component/FourEasy'

const Bike = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff',}}>
      <VinBikeBanner/>
      <SalePower/>
      <PolicyPower/>
      <FourEasy/>
    </ScrollView>
  )
}

export default Bike

const styles = StyleSheet.create({})