import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import HomeSlide from '../component/HomeSlide'
import Block1 from '../component/Block1'
import Block2 from '../component/Block2'
import Block3 from '../component/Block3'
import Block4 from '../component/Block4'
import Block5 from '../component/Block5'

const Home = () => {
  return (
    <ScrollView >
      <HomeSlide/>
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})