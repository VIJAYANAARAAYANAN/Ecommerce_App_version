import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

import scentData from './data/scentdata'; 

const Scent = ({ navigation, dispatch }) => {
  const handleAddToCart = (scentproduct) => {
    console.log(scentproduct)
    dispatch(addToCart(scentproduct));
    navigation.navigate('cartpro')
  };

  const handlePressImage = (productName) => {
    console.log(`Image of ${productName} pressed`);
  };

  const handleLikePress = (productName) => {
    console.log(`Like icon of ${productName} pressed`);
  };

  const handlePressCart = (productName) => {
    console.log(`Cart icon of ${productName} pressed`);
  };

  const handleSearchPress = (productName) => {
    console.log(`Search icon of ${productName} pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SUGOI</Text>
        <View style={styles.iconContainer}>
          <Pressable onPress={() => handleSearchPress('banner')}>
            <AntDesign name="search1" size={24} color="white" />
          </Pressable>
          <Pressable onPress={() => handlePressHeart('banner')}>
            <AntDesign name="hearto" size={24} color="white" />
          </Pressable>
          <Pressable onPress={() => handlePressCart('banner')}>
            <Ionicons name="cart-outline" size={25} color="white" />
          </Pressable>
        </View>
      </View>
      <View style={{ paddingHorizontal: 30, paddingTop: 27 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Giorgio Amani</Text>
        <Text>{scentData.length} products</Text>
      </View>
      <ScrollView>
        {/* Additional images section */}
        <View style={styles.additionalImagesContainer}>
          {scentData.reduce((rows, scentproduct, index) => {
            if (index % 2 === 0) {
              rows.push([scentproduct]);
            } else {
              rows[rows.length - 1].push(scentproduct);
            }
            return rows;
          }, []).map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((scentproduct, columnIndex) => (
                <View key={columnIndex} style={styles.column}>
                  <View style={styles.additionalImageWrapper}>
                    <Pressable onPress={() => handlePressImage(scentproduct.name)}>
                      <Image source={scentproduct.image} style={styles.additionalImage} />
                      <Text numberOfLines={2} style={styles.additionalImageText}>{scentproduct.name}</Text>
                      <Text style={styles.amounttext}>$ {scentproduct.price.toFixed(0)} <Text style={styles.offertext}>  5% Off</Text></Text>
                     
                    </Pressable>
                    <View style={styles.addButtonContainer}>
                      <Pressable onPress={() => handleLikePress(product.name)}>
                        <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                      </Pressable>
                      <Pressable style={styles.addButton} onPress={() => handleAddToCart(scentproduct.id)}>
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
    fontStyle: 'italic',
    color: 'white',
    paddingLeft: 20,
    paddingVertical: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingRight: 10,
    gap: 15,
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
  },
  additionalImageWrapper: {
    paddingHorizontal: 10,
  },
  amounttext: {
    fontWeight: '600',
    paddingVertical: 8,
    fontSize: 18,
    color: 'green'
  },
  offertext: {
    color: 'black',
    fontWeight: '800',
    fontSize: 15,
    fontWeight:'500'
  },
  additionalImage: {
    width: 160,
    height: 170,
    borderRadius: 10,
    marginBottom: 5,
  },
  additionalImageText: {
    color: 'black',
    fontWeight: '400',
    marginTop: 5,
    textAlign: 'left',
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

export default connect()(Scent);
