import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Intro from '@/components/Intro'
import Consultation from '@/components/Consultation'
import Products from '@/components/Products'
import SearchBar from '@/components/SearchBar'

const home = () => {
  return (
    <ScrollView style={{
      paddingTop: 60,
      marginHorizontal: 10,
    }}
    showsVerticalScrollIndicator={false}
    >
        {/* hello */}
        <Intro/>
        <SearchBar/>
        {/* free consultation */}
        <Consultation/>
        {/* products */}
        <Products/>
      
    </ScrollView>
  )
}

export default home