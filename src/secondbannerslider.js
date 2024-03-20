import React from 'react';
import { View, StyleSheet, Image, FlatList, Pressable, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import secondImage1 from '../assets/slde1.png';
import secondImage2 from '../assets/slde2.png';
import secondImage3 from '../assets/slde3.png';
import secondImage4 from '../assets/slde4.png';
import secondImage5 from '../assets/slde5.png';
import secondImage6 from '../assets/slde6.png';

const SecondBannerSlider = () => {
  const images = [secondImage1, secondImage2, secondImage3, secondImage4, secondImage5, secondImage6];

  return (
    <View style={styles.bannerContainer}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <View style={styles.bannerImageWrapper}>
            <Image source={item} style={styles.bannerImage} />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: 20,
    marginBottom: 20,
    bottom:30,
    alignItems: 'center',
    marginHorizontal:10,
  },
  bannerImageWrapper: {
    width: Dimensions.get('window').width - 30, 
    height: 270,
    marginLeft:7,
    justifyContent: 'center', 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  flatListContent: {
    alignItems: 'center', // Center images horizontally
  },
});

export default SecondBannerSlider;
