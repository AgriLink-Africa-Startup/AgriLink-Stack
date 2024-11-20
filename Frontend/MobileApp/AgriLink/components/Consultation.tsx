import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const Consultation = () => {
  return (
    <View style={{
      marginHorizontal: 10,
      marginTop: 30,
      padding: 10,
      backgroundColor: '#f0fdf4',
      display: 'flex',
      flexDirection: 'column',
      gap: 50,
      borderRadius: 8,
      boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
    }}>
      <View style={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
      }}>
        <View>
          <Image
          source={require('./../assets/images/consult.png')}
          width={60}
          height={60}
          style={{
            borderRadius: 99,
            width: 60,
            height: 60
          }}
          />
        </View>
       <View>
       <Text>Free Consultation</Text>
       <Text>Get free support from our customer service</Text>
       </View>
      </View>
      {/* <View style={{
        height:1,
        width:'100%',
        backgroundColor: 'gray',
        display: 'flex',
        alignItems: 'center',
      }}></View> */}
      <TouchableOpacity style={{
        backgroundColor: Colors.primary,
        padding: 8,
        width: 100,
        borderRadius: 8,
        marginBottom: 10
      }}>
        <Text style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: 16
        }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Consultation