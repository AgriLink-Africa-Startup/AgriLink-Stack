import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

const product_data = [
  {
    id: 1,
    name: 'Rice',
    price: 'ksh 120/kg',
    img: require('./../assets/images/rice.jpeg'),
  },
  {
    id: 2,
    name: 'Maize',
    price: 'ksh 60/kg',
    img: require('./../assets/images/maize.jpeg'),
  },
  {
    id: 3,
    name: 'Dairy Cows',
    price: 'ksh 100,000/animal',
    img: require('./../assets/images/cows.jpeg'),
  },
  {
    id: 4,
    name: 'Chicken',
    price: 'ksh 600/chicken',
    img: require('./../assets/images/chicken.jpeg'),
  },
];

const Products = () => {
  return (
    <View
      style={{
        padding: 10,
        marginTop: 20,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
          }}
        >
          Featured Products
        </Text>
        <Text
          style={{
            color: Colors.primary,
          }}
        >
          See all
        </Text>
      </View>
      <FlatList
        data={product_data}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between', // Evenly space items in each row
          marginBottom: 10, // Add spacing between rows
        }}
        contentContainerStyle={{
          paddingHorizontal: 1,
          paddingBottom: 50,
          marginTop: 20
        }}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1, 
              padding: 10,
              backgroundColor: Colors.bg,
              marginHorizontal: 5,
              borderRadius: 8,
            }}
          >
            <Image
              source={item.img}
              style={{
                width: '100%', 
                height: 150,
                borderRadius: 8,
              }}
            />
            <View
              style={{
                display: 'flex',
                padding: 10,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'gray',
                }}
              >
                {item.price}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Ensure unique keys
      />
    </View>
  );
};

export default Products;
