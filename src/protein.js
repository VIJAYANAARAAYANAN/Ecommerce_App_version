import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import proteinData from './data/proteindata';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

const Protein = ({ navigation,dispatch }) => {
  const handleAddToCart = (proteinproduct) => {
    console.log(proteinproduct)
    dispatch(addToCart(proteinproduct));
    navigation.navigate('cartpro')
  };

  const handlePressImage = (productName) => {
    console.log(`Image of ${productName} pressed`);
  };

  const handlePressHeart = (productName) => {
    console.log(`Heart icon of ${productName} pressed`);
  };
  
  const handleLikePress =(productName) => {
    console.log(`Like icon of ${productName} pressed`);
  }
  const handlePressCart = (productName) => {
    console.log(`Cart icon of ${productName} pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SUGOI</Text>
        <View style={styles.iconContainer}>
          <Pressable onPress={()=> handleSearchPress()}>
          <AntDesign name="search1" size={24} color="white" />
          </Pressable>
          <Pressable onPress={() => handlePressHeart('banner')}>
          <AntDesign name="hearto" size={24} color="white" />
          </Pressable>
          <Pressable onPress={() => handlePressCart('banner')}>
            <Ionicons name="cart-outline" size={24} color="white" />
          </Pressable>
        </View>
      </View>
        <View style={{paddingHorizontal:30,paddingTop:10}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>MuscleBlaze</Text>
            <Text>6 products</Text>
        </View>
        <ScrollView>
        {/* Additional images section */}
        <View style={styles.additionalImagesContainer}>
          {proteinData.reduce((rows, proteinproduct, index) => {
            if (index % 2 === 0) {
              rows.push([proteinproduct]);
            } else {
              rows[rows.length - 1].push(proteinproduct);
            }
            return rows;
          }, []).map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((proteinproduct, columnIndex) => (
                <View key={columnIndex} style={styles.column}>
                  <View style={styles.additionalImageWrapper}>
                    <Pressable onPress={() => handlePressImage(proteinproduct.name)}>
                      <Image source={proteinproduct.image} style={styles.additionalImage} />
                      <Text numberOfLines={2} style={styles.additionalImageText}>{proteinproduct.name}</Text>
                      <Text style={styles.amounttext}>$ {proteinproduct.price.toFixed(0)} <Text style={styles.offertext}>  5% Off</Text></Text>
                     
                    </Pressable>
                    <View style={styles.addButtonContainer}>
                      <Pressable onPress={() => handleLikePress(proteinproduct.name)}>
                        <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                      </Pressable>
                      <Pressable style={styles.addButton} onPress={() => handleAddToCart(proteinproduct.id)}>
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
    backgroundColor: 'rgb(9, 72, 95)',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 2,
    marginTop: 25,
    alignItems: 'center',
   
  },
  headerText: {
    fontStyle:'italic',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 20,
    paddingVertical:20,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingRight: 10,
    gap: 15,
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
  },
  additionalImageWrapper: {
    paddingHorizontal: 10,
  },

  amounttext:{
    fontWeight:'bold',
    paddingVertical:8,
  },
  offertext:{
    color:'green',
    fontWeight:'normal',
  },
  additionalImage: {
    width: 160,
    height: 170,
    borderRadius: 10,
    marginBottom: 5,
  },
  additionalImageText: {
    color: 'black',
    fontWeight: 'bold',
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

export default connect()(Protein);
