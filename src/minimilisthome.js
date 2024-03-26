import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

import minimilistbanner from '../assets/minimilistbanner.png';
import productData from './data/minidata'; 

const Minimilisthome = ({ dispatch ,navigation}) => {
  const handleAddToCart = (product) => {
    console.log(product)
    dispatch(addToCart(product));
    navigation.navigate('cartpro')
  };

  const handleLikePress = (productName) => {
    console.log(`Like icon of ${productName} pressed`);
  };

  const handlePressImage = (productId) => {
    console.log(`Image of product with ID ${productId} pressed`);
    navigation.navigate('productdetailscreen', { productId });
  };

  const handlePressCart = () => {
    navigation.navigate('cartpro');
  };

  const handlePressHeart = () => {
    console.log('Banner like icon pressed');
  }

  const handleSearchPress = () => {
    console.log('Search icon pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SUGOI</Text>
        <View style={styles.iconContainer}>
          <Pressable onPress={handleSearchPress}>
            <AntDesign name="search1" size={24} color="white" />
          </Pressable>
          <Pressable onPress={handlePressHeart}>
            <AntDesign name="hearto" size={24} color="white" />
          </Pressable>
          <Pressable onPress={handlePressCart}>
            <Ionicons name="cart-outline" size={24} color="white" />
          </Pressable>
        </View>
      </View>
      <View style={styles.backgroundImageContainer}>
        <Image source={minimilistbanner} style={styles.backgroundImage} />
      </View>
      <View style={{ paddingHorizontal: 30, paddingTop: 27 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Minimalist</Text>
        <Text>{productData.length} products</Text>
      </View>

      <ScrollView>
        <View style={styles.additionalImagesContainer}>
          {productData.reduce((rows, product, index) => {
            if (index % 2 === 0) {
              rows.push([product]);
            } else {
              rows[rows.length - 1].push(product);
            }
            return rows;
          }, []).map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((product, columnIndex) => (
                <View key={columnIndex} style={styles.column}>
                  <View style={styles.additionalImageWrapper}>
                    <Pressable onPress={() => handlePressImage(product.id)}>
                      <Image source={product.image} style={styles.additionalImage} />
                      <Text numberOfLines={2} style={styles.additionalImageText}>{product.name}</Text>
                      <Text style={styles.amounttext}>${product.price.toFixed(2)}</Text>
                      <Text style={{ color: 'green', paddingVertical: 3 }}>Enjoy free gifts!</Text>
                    </Pressable>
                    <View style={styles.addButtonContainer}>
                      <Pressable onPress={() => handleLikePress(product.name)}>
                        <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                      </Pressable>
                      <Pressable style={styles.addButton} onPress={() => handleAddToCart(product.id)}>
                        <Text style={styles.addButtonText}>Add to Cart</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    marginTop: 25,
    alignItems: 'center',
    backgroundColor: 'rgb(9, 72, 95)',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 20,
    paddingVertical:20,
    fontStyle:'italic',
  },
  iconContainer: {
    flexDirection: 'row',
    paddingRight: 10,
    gap: 25,
  },
  backgroundImageContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  backgroundImage: {
    width: 400,
    height: 130,
    resizeMode: 'cover',
  },
  additionalImagesContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  column: {
    flex: 1,
    width: '48%', // Adjusted width to fit two columns with spacing
  },
  additionalImageWrapper: {
    paddingHorizontal: 10,
  },
  additionalImage: {
    width: '100%', // Adjusted width to fit container
    height: 170,
    borderRadius: 10,
    marginBottom: 5,
  },
  additionalImageText: {
    color: 'black',
    paddingBottom:6,
    marginTop: 5,
    textAlign: 'left',
  },
  amounttext:{
    fontWeight:'bold',
  },
  addButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    gap: 20,
  },
  addButton: {
    backgroundColor: '#013220',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 5,
    width: 100,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default connect()(Minimilisthome);
