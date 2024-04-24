import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView ,TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


const Account = ({ navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headtext}>Hey,</Text>
          <Text style={styles.headname}>Vijay</Text>
          <Text style={styles.mail}>Logged in via vijaybalaram05@gmail.com</Text>
        </View>
        <ScrollView>
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
            <Entypo name="ticket" size={24} color="black" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Wishlist</Text>
            <Text style={styles.descrip}>Buy from items saved in wishlist</Text>
            </View>
            <AntDesign name="hearto" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Help & Customer Support</Text>
            <Text style={styles.descrip}>Get help for your orders</Text>
            </View>
            <Entypo name="help" size={23} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Addresses</Text>
            <Text style={styles.descrip}>Manage your saved address</Text>
            </View>
            <FontAwesome name="address-book-o" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Payment Methods</Text>
            <Text style={styles.descrip}>Manage your saved payment methods</Text>
            </View>
            <MaterialIcons name="payment" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.descrip}>Manage your profile information</Text>
            </View>
            <AntDesign name="user" size={24} color="black" />
        </View>
        </TouchableOpacity>
        
        </View>
        <View style={styles.endview}>
        <View>
          <Text style={styles.logoText}>Sugoi</Text>
          <Text style={{textAlign:'center',fontSize:11,color:'darkgrey'}}>Version 1.0</Text>
        </View>
        <View style={{display:'flex',justifyContent:'center'}}>
        <TouchableOpacity style={styles.logoutButton} onPress={()=> navigation.navigate('login')}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
        </View>
      </View>

        </ScrollView>

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
    fontSize: 16,
    marginBottom: 5,
    paddingTop:5,
  },
  descrip: {
    fontSize: 12,
    color: 'gray',
    paddingBottom:5,
  },
  endview: {
    display:"flex",
    borderTopWidth: 1,
    borderTopColor: 'white',
    backgroundColor:'#36454F',
    paddingVertical: 20,
    alignContent:'center',
    textAlign:'center',
    height:250,
  },
  logoText: {
    paddingTop:15,
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: 'white',
    width: '90%',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:20,
    marginTop: 20,
  },
  logoutButtonText: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white',
    fontSize: 18,
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
  