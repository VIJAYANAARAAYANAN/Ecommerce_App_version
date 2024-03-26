import React from 'react';
import { View, Text, Image,StyleSheet,Pressable,ScrollView } from 'react-native';
import productData from './data/minidata'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

const ProductDetailScreen = ({ route,dispatch,navigation }) => {
  const { productId } = route.params; 
  const product = productData.find(item => item.id === productId);

  if (!product) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Product not found!</Text>
      </View>
    );
  }
  const handlePressCart = () => {
    navigation.navigate('cartpro')
  };

  const handlePressHeart = () => {
    console.log('Banner like icon pressed');
  }

  const handleSearchPress = () => {
    console.log('Search icon pressed');
  };

  const handleAddToCart = (product) => {
    console.log(product)
    dispatch(addToCart(product));
  };

  const handleLikePress = (productName) => {
    console.log(`Like icon of ${productName} pressed`);
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
  <ScrollView>
    <View style={{ flex: 1, alignItems: 'flex-start'}}>
    <View style={styles.name}>
    <Text style={styles.heading}>{product.name}</Text>
    </View>
      
      <View style={styles.containerimg}>
      <Image source={product.image} style={styles.image} />
      </View>
      <Text style={styles.price}>${product.price.toFixed(2)}   |   <Text style={{fontSize:17,color:'#EC5800'}}> 5% Off</Text></Text>
      <Text style={styles.desheading}>Description</Text>
      <Text style={styles.descrip}>{product.description}</Text>
    </View>
    <View style={{justifyContent:'center',alignContent:"center"}}>
    <View style={styles.bottomDiv}>
        {/* Left part with heart icon */}
        <View style={styles.leftPart}>
          <Pressable onPress={handleLikePress}>
            <AntDesign name="hearto" size={24} color="black" />
          </Pressable>
        </View>

        {/* Right part with cart icon and text */}
        <View style={styles.rightPart}>
          <Pressable style={styles.cartButton} onPress={handleAddToCart(product.id)}>
            <AntDesign name="shoppingcart" size={20} color="white" />
            <Text style={styles.cartButtonText}>Add to Cart</Text>
          </Pressable>
        </View>
      </View>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1
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
 
    containerimg:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        paddingHorizontal:25,
        padding:30,
        backgroundColor:'#D3D3D3'
        },

    name:{
        marginTop:5,
        marginBottom:10
    },
    heading:{
        marginTop:30,
        paddingHorizontal:30,
        fontSize:20
    },
    image:{
        width:340,
        height:350,   
    },
    price:{
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize:20,
    },
    desheading:{
        fontSize:25,
        paddingHorizontal:20,
        color:'green',
    },
    descrip:{
        paddingTop:20,
        paddingBottom:20,
        textAlign:'justify',
        fontSize:17,
        lineHeight:25,
        paddingHorizontal:25,
    },
    bottomDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '95%',
        right:-10,
        paddingBottom:20,
      },
      leftPart: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white', 
      },
      rightPart: {
        flex: 6, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(9, 72, 95)', 
      },
      cartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
      },
      cartButtonText: {
        color: 'white',
        marginLeft: 8,
        fontSize:18,
      }
        // Additional styles as needed
})
export default connect()(ProductDetailScreen);
