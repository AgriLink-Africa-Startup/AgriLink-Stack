import { View, Text, TextInput } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={{
        padding: 3,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
        marginHorizontal: 10
    }}>
        <AntDesign name="search1" size={22} color="black" />

        <TextInput 
        placeholder='Search Here...'
        />
    </View>
  )
}

export default SearchBar