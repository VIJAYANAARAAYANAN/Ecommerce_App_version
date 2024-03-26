import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import minimilistbanner from '../assets/minimilistbanner.png';
import productImage1 from '../assets/scent1.png';
import productImage2 from '../assets/scent2.png';
import productImage3 from '../assets/scent3.png';
import productImage4 from '../assets/scent4.png';
import productImage5 from '../assets/scent5.png';
import productImage6 from '../assets/scent6.png';

const Scent = ({ navigation}) => {
  const handleAddToCart = (productName) => {
    console.log(`Added ${productName} to cart`);
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
  const handleSearchPress =(productName)=>{
    console.log(`Search icon of ${productName} pressed`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SUGOI</Text>
        <View style={styles.iconContainer}>
          <Pressable onPress={()=> handleSearchPress('banner')}>
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
        <View style={{paddingHorizontal:30,paddingTop:27}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Giorgio Amani</Text>
            <Text>6 products</Text>
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
                <Text style={styles.additionalImageText}>Giorgio Armani<Text style={{fontSize:12,fontWeight:'normal'}}>Acqua Di Gio Eau De Toilette</Text></Text>
                <Text style={styles.amounttext}>$450  <Text style={styles.offertext}>5% Off</Text></Text>
                
                </Pressable>
                </View>
                <View style={styles.addButtonContainer}>
                <Pressable onPress={()=> handleLikePress('Product 1')}>
                  <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                  </Pressable>
                  <Pressable style={styles.addButton} onPress={() => handleAddToCart('Product 1')}>
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
                <Text style={styles.additionalImageText}>Giorgio Armani  <Text style={{fontSize:12,fontWeight:'normal'}}>Acqua Di Gio Eau De Toilette</Text></Text>
                <Text style={styles.amounttext}>$230  <Text style={styles.offertext}>5% Off</Text></Text>
                </Pressable>               
                </View>
                <View style={styles.addButtonContainer}>
                <Pressable onPress={()=> handleLikePress('Product 2')}>
                  <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                  </Pressable>
                  <Pressable style={styles.addButton} onPress={() => handleAddToCart('Product 2')}>
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
                <Text style={styles.additionalImageText}>Giorgio Armani  <Text style={{fontSize:12,fontWeight:'normal'}}>Acqua Di Gio Eau De Toilette</Text></Text>
                <Text style={styles.amounttext}>$197  <Text style={styles.offertext}>5% Off</Text></Text>
                </Pressable>
                </View>
                <View style={styles.addButtonContainer}>
                <Pressable onPress={()=> handleLikePress('Product 3')}>
                  <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                  </Pressable>
                  <Pressable style={styles.addButton} onPress={() => handleAddToCart('Product 3')}>
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
                <Text style={styles.additionalImageText}>Giorgio Armani  <Text style={{fontSize:12,fontWeight:'normal'}}>Acqua Di Gio Eau De Toilette</Text></Text>
                <Text style={styles.amounttext}>$320  <Text style={styles.offertext}>5% Off</Text></Text>
                </Pressable>
                </View>
                <View style={styles.addButtonContainer}>
                <Pressable onPress={()=> handleLikePress('Product 4')}>
                  <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                  </Pressable>
                  <Pressable style={styles.addButton} onPress={() => handleAddToCart('Product 4')}>
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
              <Pressable onPress={() => handlePressImage('Product 5')}>
                <Image source={productImage5} style={styles.additionalImage} />
                <Text style={styles.additionalImageText}>Giorgio Armani  <Text style={{fontSize:12,fontWeight:'normal'}}>Acqua Di Gio Eau De Toilette</Text></Text>
                <Text style={styles.amounttext}>$90  <Text style={styles.offertext}>5% Off</Text></Text>
                </Pressable>
                </View>
                <View style={styles.addButtonContainer}>
                <Pressable onPress={()=> handleLikePress('Product 5')}>
                  <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                  </Pressable>
                  <Pressable style={styles.addButton} onPress={() => handleAddToCart('Product 5')}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                  </Pressable>
                </View>
              </View>
         
          </View>
          <View style={styles.column}>
           
              <View style={styles.additionalImageWrapper}>
              <View>
              <Pressable onPress={() => handlePressImage('Product 6')}>
                <Image source={productImage6} style={styles.additionalImage} />
                <Text style={styles.additionalImageText}>Giorgio Armani  <Text style={{fontSize:12,fontWeight:'normal'}}>Acqua Di Gio Eau De Toilette</Text></Text>
                <Text style={styles.amounttext}>$300  <Text style={styles.offertext}>5% Off</Text></Text>
                </Pressable>
                </View>
                <View style={styles.addButtonContainer}>
                <Pressable onPress={()=> handleLikePress('Product 6')}>
                  <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                  </Pressable>
                  <Pressable style={styles.addButton} onPress={() => handleAddToCart('Product 6')}>
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
    fontStyle:'italic',
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
    fontSize:18,
    color:'green'
  },
  offertext:{
    color:'green',
    fontWeight:'normal',
    fontSize:12,
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

export default Scent;
