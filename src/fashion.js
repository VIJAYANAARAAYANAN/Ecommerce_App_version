import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import fashionData from './data/fashiondata'; // Adjust the path as needed
import { connect } from 'react-redux';
import { AntDesign , FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { addToCart } from './actions/cartActions';

const Fashion = ({ navigation , dispatch }) => {
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

  const handlePressCart =() => {
    navigation.navigate('cartpro')
  }

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
          <Pressable onPress={() => handlePressCart()}>
            <Ionicons name="cart-outline" size={25} color="white" />
          </Pressable>
        </View>
      </View>
      <View style={{ paddingHorizontal: 30, paddingTop: 27 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Giorgio Amani</Text>
        <Text>{fashionData.length} products</Text>
      </View>
      <ScrollView>
        {/* Additional images section */}
        <View style={styles.additionalImagesContainer}>
          {fashionData.reduce((rows, fashionproduct, index) => {
            if (index % 2 === 0) {
              rows.push([fashionproduct]);
            } else {
              rows[rows.length - 1].push(fashionproduct);
            }
            return rows;
          }, []).map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((fashionproduct, columnIndex) => (
                <View key={columnIndex} style={styles.column}>
                  <View style={styles.additionalImageWrapper}>
                    <Pressable onPress={() => handlePressImage(fashionproduct.name)}>
                      <Image source={fashionproduct.image} style={styles.additionalImage} />
                      <Text numberOfLines={2} style={styles.additionalImageText}>{fashionproduct.name}</Text>
                      <Text style={styles.amounttext}>${fashionproduct.price.toFixed(0)} <Text style={styles.offertext}>  5% Off</Text></Text>
                     
                    </Pressable>
                    <View style={styles.addButtonContainer}>
                      <Pressable onPress={() => handleLikePress(fashionproduct.name)}>
                        <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                      </Pressable>
                      <Pressable style={styles.addButton} onPress={() => handleAddToCart(fashionproduct.id)}>
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
      <View style={styles.bottomNavigation}>
          <TouchableOpacity style={styles.bottomNavItem} onPress={()=> navigation.navigate('home')}>
            <Ionicons name="home" size={24} color="white" />
            <Text style={styles.bottomNavText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem} onPress={()=> navigation.navigate('offer')}>
            <AntDesign name="tagso" size={24} color="white" />
            <Text style={styles.bottomNavText}>Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem} onPress={()=> navigation.navigate('categories')}>
            <FontAwesome name="list-alt" size={24} color="white" />
            <Text style={styles.bottomNavText}>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem} onPress={()=> navigation.navigate('account')}>
            <FontAwesome name="user" size={24} color="white" />
            <Text style={styles.bottomNavText}>Account</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:40
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
    fontWeight: '500',
    color:'green',
    fontSize:16,
    paddingVertical:0,
  },
  offertext:{
    color:'black',
    fontWeight:'500',
    fontSize:13,
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
    marginTop: 5,
    textAlign: 'left',
    paddingBottom:5,
    
  },
  addButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
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
    fontSize:13,
  },
  bottomNavigation: {
    position:'absolute',
    bottom:0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgb(9, 72, 95)',
    paddingVertical: 5,
    borderRadius: 100,
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavText: {
    color: 'white',
    marginTop: 5,
  },
});

export default connect()(Fashion);
