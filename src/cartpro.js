import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView , Pressable } from 'react-native';
import { connect } from 'react-redux';
import { removeFromCart } from './actions/cartActions';
const CartPro = ({ cartItems , dispatch }) => {
 
  
const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId)); 
};

console.log('cartItems:', cartItems); 
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
      <ScrollView>
        {cartItems.map(item => (
          <View key={item.id} style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text numberOfLines={2} style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
              <View style={styles.rembutton}>
              <Pressable onPress={() => handleRemoveFromCart(item.id)}>
                  <Text style={styles.remove}>Remove</Text>
              </Pressable>
              </View>
              </View>
          </View>
        ))}
      </ScrollView>

    </View>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize:27,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop:30,
    width:"100%",
    paddingHorizontal:9
  },
  item: {
    backgroundColor:'white',
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius:5,
    
  },
  image: {
    marginTop:10,
    width: 130,
    height: 130,
    borderRadius: 10,
    marginRight: 10,
    marginBottom:23,
    bottom:-5,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
    marginTop:15,
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
    color:'green',
    fontWeight:'bold',
  },
  quantity: {
    fontSize: 16,
    color: 'gray',
    paddingBottom:10,
  },

  rembutton:{
    backgroundColor:'green',
    width:85,
    position:'relative',
    right:-110,
    borderRadius:10,
  },

  remove:{
    color:'white',
    fontSize:17,
    paddingHorizontal:10,
    paddingVertical:5,
    fontWeight:"700"
  }
});

export default connect(mapStateToProps)(CartPro);
