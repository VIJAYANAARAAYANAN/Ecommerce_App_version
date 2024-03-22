import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import minimilistbanner from '../assets/minimilistbanner.png';
import productImage1 from '../assets/minipro1.png';
import productImage2 from '../assets/minipro2.png';
import productImage3 from '../assets/minipro3.png';
import productImage4 from '../assets/minipro4.png';

const Minimilisthome = () => {
  const handleAddToCart = (productName) => {
    console.log(`Added ${productName} to cart`);
  };

  const handleLikePress = (productName) => {
    console.log(`Like icon of ${productName} pressed`);
  };

  //banner functions
  const handlePressImage = (productName) => {
    console.log(`Image of ${productName} pressed`);
  };

  const handlePressCart = (productName) => {
    console.log('Banner Cart icon pressed');
  };

  const handlePressHeart =(productName)=>{
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
          <Pressable onPress={()=> handleSearchPress()}>
          <AntDesign name="search1" size={24} color="white" />
          </Pressable>
          <Pressable onPress={() => handlePressHeart()}>
          <AntDesign name="hearto" size={24} color="white" />
          </Pressable>
          <Pressable onPress={() => handlePressCart()}>
            <Ionicons name="cart-outline" size={24} color="white" />
          </Pressable>
        </View>
      </View>
      <View style={styles.backgroundImageContainer}>
        <Image source={minimilistbanner} style={styles.backgroundImage} />
      </View>
      <View style={{paddingHorizontal:30,paddingTop:27}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Minimalist</Text>
            <Text>4 products</Text>
        </View>
      <ScrollView>
      {/* Additional images section */}
      <View style={styles.additionalImagesContainer}>
        <View style={styles.row}>
          <View style={styles.column}>
            
              <View style={styles.additionalImageWrapper}>
              <View>
              <Pressable onPress={() => handlePressImage('Product 1')}>
                <Image source={productImage1} style={styles.additionalImage} />
                <Text style={styles.additionalImageText}>Minimilist <Text style={{fontSize:12,fontWeight:'normal'}}>skin care routine for oily and acne face</Text></Text>
                <Text style={styles.amounttext}>$120.30  <Text style={styles.offertext}>5% Off</Text></Text>
                <Text style={{color:'green',paddingVertical:3}}>Enjou free gifts!</Text>
                </Pressable>
                </View>
                <View style={styles.addButtonContainer}>
                <Pressable onPress={()=> handleLikePress}>
                  <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                  </Pressable>
                  <Pressable style={styles.addButton} onPress={() => handleAddToCart}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                  </Pressable>
                </View>
              </View>
           
          </View>
          <View style={styles.column}>
           
              <View style={styles.additionalImageWrapper}>
                <View>
                <Pressable onPress={() => handlePressImage('Product 2')}>
                <Image source={productImage2} style={styles.additionalImage} />
                <Text style={styles.additionalImageText}>Minimilist <Text style={{fontSize:12,fontWeight:'normal'}}>skin care routine for oily and acne face</Text></Text>
                <Text style={styles.amounttext}>$90.30  <Text style={styles.offertext}>10% Off</Text></Text>
                <Text style={{color:'green',paddingVertical:3}}>Enjou free gifts!</Text>
                </Pressable>
                </View>
                <View style={styles.addButtonContainer}>
                <Pressable onPress={()=> handleLikePress}>
                  <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                  </Pressable>
                  <Pressable style={styles.addButton} onPress={() => handleAddToCart}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                  </Pressable>
                </View>
              </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
           
              <View style={styles.additionalImageWrapper}>
                <View>
                <Pressable onPress={() => handlePressImage('Product 3')}>
               
                <Image source={productImage3} style={styles.additionalImage} />
                <Text style={styles.additionalImageText}>Minimilist <Text style={{fontSize:12,fontWeight:'normal'}}>skin care serum for oily face</Text></Text>
                <Text style={styles.amounttext}>$120.30  <Text style={styles.offertext}>5% Off</Text></Text>
                <Text style={{color:'green',paddingVertical:3}}>Enjou free gifts!</Text>
                </Pressable>
                </View>
                <View style={styles.addButtonContainer}>
                <Pressable onPress={()=> handleLikePress}>
                  <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                  </Pressable>
                  <Pressable style={styles.addButton} onPress={() => handleAddToCart}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                  </Pressable>
                </View>
              </View>
          </View>
          <View style={styles.column}>
           
              <View style={styles.additionalImageWrapper}>
                <View>
                <Pressable onPress={() => handlePressImage('Product 4')}>
                <Image source={productImage4} style={styles.additionalImage} />
                <Text style={styles.additionalImageText}>Minimilist <Text style={{fontSize:12,fontWeight:'normal'}}>skin care normal routine </Text></Text>
                <Text style={styles.amounttext}>$185.20  <Text style={styles.offertext}>25% Off</Text></Text>
                <Text style={{color:'green',paddingVertical:3}}>Enjou free gifts!</Text>
                </Pressable>
                </View>
                <View style={styles.addButtonContainer}>
                <Pressable onPress={()=> handleLikePress}>
                  <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                  </Pressable>
                  <Pressable style={styles.addButton} onPress={() => handleAddToCart}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                  </Pressable>
                </View>
              </View>
          </View>
        </View>
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
  },
  additionalImageWrapper: {
    paddingHorizontal: 10,
  },

  amounttext:{
    fontWeight:'bold',
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

export default Minimilisthome;
