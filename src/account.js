import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView ,TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Account = ({ navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headtext}>Hey,</Text>
          <Text style={styles.headname}>Vijay</Text>
          <Text style={styles.mail}>Logged in via vijaybalaram05@gmail.com</Text>
        </View>
        {/* Your content */}
        <View style={styles.list}>

        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Order</Text>
            <Text style={styles.descrip}>Check your order status (track, return, etc..)</Text>
            </View>
            <MaterialIcons name="delivery-dining" size={29} color="black" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Wallet</Text>
            <Text style={styles.descrip}>Check your sugoi wallet balance</Text>
            </View>
            <AntDesign name="wallet" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Coupons</Text>
            <Text style={styles.descrip}>Browse coupoun to get discounts</Text>
            </View>
            <MaterialIcons name="delivery-dining" size={29} color="black" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Wishlist</Text>
            <Text style={styles.descrip}>Buy from items saved in wishlist</Text>
            </View>
            <MaterialIcons name="delivery-dining" size={29} color="black" />
        </View>
        </TouchableOpacity>

        </View>
        {/* Bottom navigation */}
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
       
    },
    head: {
      padding:30,
      paddingTop:50,  
    },    
    headtext: {
      fontSize: 29,
    },
    mail:{
        fontSize:13,
        color:'grey'
    },
    headname: {
      color: 'rgb(9, 72, 95)',
      fontSize: 35,
      fontWeight: 'bold',
      paddingBottom:8,
    },
    list:{
        paddingLeft:10,
        paddingRight:10,
    },
    
    rowContainer:
    {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: 'lightgray',
    
   
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
    paddingTop:5,
  },
  descrip: {
    fontSize: 12,
    color: 'gray',
    paddingBottom:5,
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
  
  export default Account;
  