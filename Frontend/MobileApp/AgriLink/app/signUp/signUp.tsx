import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useEffect } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'

const signUp = () => {
    const navigation = useNavigation()
    const router = useRouter()
    const handleLogin = () =>{
      router.push('/login/Login')
    }
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
  return (
    <KeyboardAvoidingView behavior='padding'>
    <View style={{
        padding: 10,
        margin: 30,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 300,
        display: 'flex',
        gap: 10
    }}>
        <Text style={{
            textAlign: 'center',
            color: Colors.primary,
            fontSize: 25
        }}>Weclome to AgriLink</Text>
     <TextInput
     placeholder='Enter your first name'
     style={{
        width: '100%',
        borderRadius:8,
        borderWidth: 1,
        marginBottom:10,
        padding:10
      }}
     />
      <TextInput
     placeholder='Enter your last name'
     style={{
        width: '100%',
        borderRadius:8,
        borderWidth: 1,
        marginBottom:10,
        padding:10
      }}
     />
      <TextInput
     placeholder='yourexample@gmail.com'
     style={{
        width: '100%',
        borderRadius:8,
        borderWidth: 1,
        marginBottom:10,
        padding:10
      }}
     />
      <TextInput
     placeholder='Enter your phone number'
     style={{
        width: '100%',
        borderRadius:8,
        borderWidth: 1,
        marginBottom:10,
        padding:10
      }}
     />
      <TextInput
     placeholder='Enter your password'
     secureTextEntry
     autoCapitalize='none'
     style={{
        width: '100%',
        borderRadius:8,
        borderWidth: 1,
        marginBottom:10,
        padding:10
      }}
     />
     <TouchableOpacity style={{
        backgroundColor:Colors.primary,
        padding: 10,
        borderRadius: 8,

     }}>
        <Text style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 20
        }}>Register</Text>
     </TouchableOpacity>
     <View style={{
        display:'flex',
        flexDirection: 'row'
     }}>
     <Text style={{
        fontSize: 18
     }}>Already have an account? <Text style={{color: Colors.primary}} onPress={handleLogin}>Login</Text></Text>
     
     </View>
    </View>
    </KeyboardAvoidingView>
  )
}

export default signUp