import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import banner from '../assets/bann.png';
import image1 from '../assets/Luxe.png';
import image2 from '../assets/Health.png';
import image3 from '../assets/Haircare.png';
import image4 from '../assets/skincare.png';
import image5 from '../assets/gadgets.png';
import image6 from '../assets/Perfume.png';
import image7 from '../assets/grooming.png';
import image8 from '../assets/bodyandsoap.png';

import productimage1 from '../assets/productbanner1.png'
import productimage2 from '../assets/productbanner2.png'
import productimage3 from '../assets/productbanner3.png'
import productimage4 from '../assets/productbanner4.png'
import productimage5 from '../assets/productbanner5.png'
import productimage6 from '../assets/productbanner6.png'
// Import the SecondBannerSlider component
import SecondBannerSlider from './secondbannerslider';

const Home = ({navigation}) => {
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
        <FontAwesome name="search" size={20} color="black" style={styles.searchIcon} />
        <TextInput
          placeholder="Search on SUGOI"
          placeholderTextColor="black"
          style={styles.input}
          autoFocus={false} 
        />
      </View>
      <ScrollView>
      <View style={styles.backgroundImageContainer}>
        <Image source={banner} style={styles.backgroundImage} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageContainer}>
        <Pressable style={styles.imageWrapper}>
          <Image source={image1} style={styles.image} />
          <Text style={styles.imageText}>Luxe</Text>
        </Pressable>
        <Pressable style={styles.imageWrapper}>
          <Image source={image2} style={styles.image} />
          <Text style={styles.imageText}>Health</Text>
        </Pressable>
        <Pressable style={styles.imageWrapper}>
          <Image source={image3} style={styles.image} />
          <Text style={styles.imageText}>Hair Care</Text>
        </Pressable>
        <Pressable style={styles.imageWrapper}>
          <Image source={image4} style={styles.image} />
          <Text style={styles.imageText}>Shoes</Text>
        </Pressable>
        <Pressable style={styles.imageWrapper}>
          <Image source={image5} style={styles.image} />
          <Text style={styles.imageText}>Gadgets</Text>
        </Pressable>
        <Pressable style={styles.imageWrapper}>
          <Image source={image6} style={styles.image} />
          <Text style={styles.imageText}>Perfumes &</Text>
          <Text style={styles.imageText}>Deos</Text>
        </Pressable>
        <Pressable style={styles.imageWrapper}>
          <Image source={image7} style={styles.image} />
          <Text style={styles.imageText}>Grooming</Text>
        </Pressable>
        <Pressable style={styles.imageWrapper}>
          <Image source={image8} style={styles.image} />
          <Text style={styles.imageText}>Bath & Body</Text>
        </Pressable>
      </ScrollView>

      {/* Second banner */}
      <SecondBannerSlider />
      <View style={styles.additionalImagesContainer}>
          <View style={styles.row}>
            <Pressable style={styles.additionalImageWrapper} onPress={() => navigation.navigate("minimilisthome")}>
              <Image source={productimage3} style={styles.additionalImage} />
              <Text style={styles.additionalImageText}>Buy 2 Get 1 Free</Text>
              <Text style={{color:"#fff"}}>On Shampoo Mini</Text>
            </Pressable>
            <Pressable style={styles.additionalImageWrapper} onPress={() => navigation.navigate("scent")}>
              <Image source={productimage2} style={styles.additionalImage} />
              <Text style={styles.additionalImageText}>Powerful & Sophisticated</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable style={styles.additionalImageWrapper} onPress={()=> navigation.navigate("fashion")}>
              <Image source={productimage1} style={styles.additionalImage} />
              <Text style={styles.additionalImageText}>Fashion</Text>
              <Text style={{color:'white'}}>Upto 60% off</Text>
            </Pressable>
            <Pressable style={styles.additionalImageWrapper} onPress={()=> navigation.navigate("beard")}>
              <Image source={productimage4} style={styles.additionalImage} />
              <Text style={styles.additionalImageText}>Beard Products</Text>
              <Text style={{color:'white'}}>Upto 30% off</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable style={styles.additionalImageWrapper}  onPress={()=> navigation.navigate("beard")}>
              <Image source={productimage5} style={styles.additionalImage} />
              <Text style={styles.additionalImageText}>Upto 40% off</Text>
              <Text style={{color:'white'}}>On Best Seller</Text>
            </Pressable>
            <Pressable style={styles.additionalImageWrapper}>
              <Image source={productimage6} style={styles.additionalImage} />
              <Text style={styles.additionalImageText}>Protein</Text>
              <Text style={{color:'white'}}>Upto 20% off</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.dealTextContainer}>
        <Text style={styles.dealText}>Don't Miss These</Text>
        <Text style={styles.dealText}>Incredible Deals!</Text>
        <TouchableOpacity style={styles.shopNowButton} onPress={() => alert('Shop Now!')}>
         <Text style={styles.shopNowText}>SHOP NOW</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(9, 72, 95)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    marginTop: 35,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingRight: 10,
    gap: 15,
  },
  icon: {
    marginLeft: 10,
  },
  searchArea: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    color: 'black',
    marginBottom:10,
  },
  searchIcon: {
    marginRight: 0,
    padding: 14,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    paddingLeft: 5,
  },
  backgroundImageContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: 400,
    height: 180,
    resizeMode: 'cover', 
  },
  imageContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    width:'100%',
    marginRight:30,
  },
  imageWrapper: {
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  imageText: {
    color: 'white',
    fontWeight:'bold'
  },
  additionalImagesContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap:10,
  },
  additionalImageWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  additionalImage: {
    width: '100%',
    padding:10,
    height: 250, // Adjust as needed
    borderRadius: 10,
    marginBottom: 2,
  },
  additionalImageText: {
    color: 'white',
    fontSize:18,
    fontWeight: 'bold',
    marginTop: 5, // Add some space between image and text
    textAlign: 'center', // Center the text
  },
  dealTextContainer: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom:20,
  },
  dealText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
   
  },
  shopNowButton: {
    backgroundColor: '#01cab9',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  shopNowText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
