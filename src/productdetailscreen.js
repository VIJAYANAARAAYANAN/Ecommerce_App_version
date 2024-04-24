import React from 'react';
import { View, Text, Image,StyleSheet,Pressable,ScrollView, TouchableOpacity,Span } from 'react-native';
import productData from './data/minidata'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
import { useState } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { removeFromWishlist, addToWishlist } from './actions/likeActions'; 


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
  const [isLiked, setIsLiked] = useState({}); 

  const handlePressCart = () => {
    navigation.navigate('cartpro')
  };

  const handlePressHeart = () => {
    navigation.navigate('likepro');
  }

  const handleSearchPress = () => {
    console.log('Search icon pressed');
  };

  const handleAddToCart = (product) => {
    console.log(product)
    dispatch(addToCart(product));
  };

  const handleLikePress = (productId) => {
    setIsLiked(prevState => ({
      ...prevState,
      [productId]: !prevState[productId], 
    }));

    if (isLiked[productId]) {
      dispatch(removeFromWishlist(productId));
    } else {
      dispatch(addToWishlist(productId));
      navigation.navigate('likepro')
    }
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
      <View style={{display:'flex',width:'100%',flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}>
      <View>
      <Text style={styles.price}>${product.price.toFixed(2)}  |  <Text style={{fontSize:14,color:'#EC5800'}}> 5% Off</Text></Text>
      <Text style={{paddingLeft:20,fontSize:11,color:'grey',paddingBottom:20,}}>Includes all taxes..</Text>
      </View>
      <View style={{ flexDirection: 'row', marginRight: 30, paddingTop:6 }}>
          <TouchableOpacity
            style={{
              borderColor: 'rgb(9, 72, 95)',
              borderWidth: 2,
              borderRadius: 40,
              height: 42,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 13, paddingRight: 5 ,paddingVertical:8}}>View more</Text>
              <MaterialIcons name="view-headline" size={24} color="black" />
            </View>
          </TouchableOpacity>
</View>

      </View>
      <View style={{ borderColor: 'rgb(9, 72, 95)',borderRadius: 10,paddingBottom:5, borderBottomWidth: 1, width:'100%',borderBottomColor: 'lightgray',}}>
      
      <Text style={{paddingLeft:20,paddingVertical:10,fontSize:20,color:'rgb(9,72,95)',fontWeight:500}}>Know your product</Text>
      </View>
     
      <Text style={styles.desheading}>Description</Text>
      <Text style={styles.descrip}>{product.description}</Text>
    </View>
    <View style={{justifyContent:'center',alignContent:"center"}}>
    <View style={styles.bottomDiv}>
        {/* Left part with heart icon */}
        <View style={styles.leftPart}>
        <Pressable onPress={() => handleLikePress(product.id)}>
                        {isLiked[product.id] ? (
                          <Fontisto name="heart" size={18} color="#013220" />
                        ) : (
                          <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                        )}
                      </Pressable>
        </View>

        {/* Right part with cart icon and text */}
        <View style={styles.rightPart}>
          <Pressable style={styles.cartButton} onPress={handleAddToCart(product.id)}>
            <AntDesign name="shoppingcart" size={20} color="white" />
          </Pressable>
      
            <Text style={styles.cartButtonText}>Add to Cart</Text>
    
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
        marginTop:0,
        paddingHorizontal:25,
        padding:20,
        width:'100%',
        },

    name:{
        marginTop:5,
      
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
        paddingVertical:5,
        fontSize:18,
        color:'rgb(9, 72, 95)',
        fontWeight:'bold',
    },
    desheading:{
        paddingTop:15,
        fontSize:20,
        fontWeight:'500',
        paddingHorizontal:20,

    },
    descrip:{
        paddingTop:15,
        paddingBottom:20,
        textAlign:'justify',
        fontSize:15,
        lineHeight:18,
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
        paddingVertical: 2,
        paddingHorizontal: 16,
        borderRadius: 5,
      },
      cartButtonText: {
        color: 'white',
        marginLeft: 8,
        fontSize:15,
      }
        // Additional styles as needed
})
export default connect()(ProductDetailScreen);
