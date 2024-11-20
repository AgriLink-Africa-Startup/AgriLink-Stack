import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'

const index = () => {

  const navigation = useNavigation()
  const router = useRouter()
  const handleNav = () => {
    router.push('/login/Login')
  }

  const data = [
    {
      id: 1,
      name: 'For Farmers',
      desc: 'Farmers can list their produce, set prices, and directly connect with buyers, opening up opportunities for growth and sustainability.',
      img: require('./../assets/images/farmer-ui.jpg')
    },
    // {
    //   id: 2,
    //   name: 'For Buyers',
    //   desc: 'Buyers can browse fresh produce, connect with farmers, and negotiate for fair prices, ensuring access to the best local products.',
    //   img: require('./../assets/images/coonect.jpg')
    // },
    {
      id: 3,
      name: 'Empowering Kenya',
      desc: 'AgriLink Africa Connect aims to boost Kenya’s agricultural economy by connecting local farmers with buyers across the region.',
      img: require('./../assets/images/link.jpg')
    },
  ]

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  const {width} = Dimensions.get('window')
 
  return (
    <View style={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      paddingTop: 30
    }}>
    <View style={{
      display: 'flex',
      alignItems: 'center',
      padding: 15
          }}>
      <Image source={require('./../assets/images/logo.png')} style={{
      width: 110,
      height: 110,
      borderRadius: 99
    }}
      />
      <Text style={{
        color: Colors.primary,
        fontSize: 25,
        marginBottom: 20
      }}>Welcome to AgriLink Africa Connect!</Text>
      <Text style={{
        fontSize: 16,
        marginBottom: 20
      }}>At AgriLink Africa Connect, we bridge the gap between farmers and buyers, creating a seamless marketplace for local produce. Join us in strengthening Kenya’s agricultural economy by empowering farmers and providing buyers with fresh, locally-sourced products.</Text>
    </View>
    <FlatList  
  data={data}
  horizontal 
  showsHorizontalScrollIndicator={false}
  pagingEnabled 
  contentContainerStyle={{
    display: 'flex',
    flexDirection: 'row', 
    padding: 15,
    gap: 20, 
  }}
  renderItem={({item, index}) => (
    <View 
      key={index} 
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 380, 
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10
      }}>
      <View style={{
        width: '100%'
      }}>
        <Image 
          source={item.img} 
          style={{
            width: '100%', 
            height: 400, 
            borderRadius: 10,
          }}
        />
      </View>
      <View style={{ padding: 10 }}>
        <Text 
          style={{
            color: Colors.primary,
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
          }}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 14 }}>{item.desc}</Text>
      </View>
    </View>
  )}
/>

    <View style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <TouchableOpacity  style={{
      backgroundColor: Colors.primary,
      padding: 10,
      width: '90%',
      // height: 30,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      borderRadius: 10,
    }}
    onPress={handleNav}
    >
      <Text style={{
        color: '#fff',
        textAlign: 'center'
      }}>Contunue</Text>
    </TouchableOpacity>
    </View>
   <View style={{
    marginTop:200
   }}>
   </View>
    </View>
  )
}

export default index