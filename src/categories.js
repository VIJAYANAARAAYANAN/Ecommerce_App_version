import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Category = ({navigation}) => {
 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sugoi</Text>
        <View style={styles.iconContainer}>
          <Pressable style={styles.icon}>
          <Feather name="bell" size={24} color="white" />
          </Pressable>
          <Pressable style={styles.icon}>
          <AntDesign name="hearto" size={24} color="white" />
          </Pressable>
          <Pressable style={styles.icon}>
          <Ionicons name="cart-outline" size={24} color="white" />
          </Pressable>
        </View>
      </View>
      <View style={styles.searchArea}>
        <FontAwesome name="search" size={20} color="white" style={styles.searchIcon} />
        <TextInput
          placeholder="Search on SUGOI"
          placeholderTextColor='#778899'
          style={styles.input}
          autoFocus={false} 
        />
      </View>
      <ScrollView>
      <View style={styles.maincategory}>
      <Text style={{fontSize:20,textAlign:'center',color:'rgb(9, 72, 95)',paddingTop:20,fontWeight:'500'}}>Grooming</Text>
      <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>SkinCare</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Fragrnace</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Hair</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Personal Care</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Wellness</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Luxe</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <Text style={{fontSize:20,textAlign:'center',color:'rgb(9, 72, 95)',paddingTop:20,paddingBottom:10,fontWeight:'500'}}>Lifestyle and Fashion</Text>
      <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Footwear</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Watch</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Fashion</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Sports and fitness</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <Text style={{fontSize:20,textAlign:'center',color:'rgb(9, 72, 95)',paddingTop:20,paddingBottom:10,fontWeight:'500'}}>Gadgets and Tech</Text>
      <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Headphones</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>
       
      <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Smart Watches</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Power Bank</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity><TouchableOpacity>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Accessories</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
        </TouchableOpacity>
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
    paddingBottom:70,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    marginTop: 35,
    alignItems: 'center',
    backgroundColor: 'rgb(9, 72, 95)',
  },
  searchArea: {
    
    backgroundColor: 'white',
    backgroundColor: 'rgb(9, 72, 95)',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    color: 'white',
    marginBottom:10,
  },
  searchIcon: {
    marginRight: 0,
    padding: 14,
  },
  input:{
    flex: 1,
    fontSize: 16,
    color: 'white',
    paddingLeft: 5,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    paddingLeft: 20,
    paddingVertical:20,
    textShadowColor:'white',
    textShadowOffset:{width: 1, height: 2},
    textShadowRadius:2,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingRight: 10,
    gap: 15,
  },
  icon: {
    marginLeft: 10,
  },
  maincategory: {
    flex: 1,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgb(9, 72, 95)',
    borderRadius: 10, 
    marginVertical: 5, 
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    paddingTop:5,
    color:'rgb(9, 72, 95)',
    fontWeight:'bold',
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

export default Category;
