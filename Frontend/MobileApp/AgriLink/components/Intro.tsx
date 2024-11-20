import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';

const Intro = () => {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 4,
      marginHorizontal: 10
    }}>
    <View>
    <Text style={{
      fontSize: 18,

    }}>Hi Levi!  👋</Text>
    <Text style={{
      fontSize: 18
    }}>Enjoy our servives! </Text>
    </View>
    <View>
    <AntDesign name="bells" size={22} color={Colors.primary} />
    </View>
    </View>
  )
}

export default Intro