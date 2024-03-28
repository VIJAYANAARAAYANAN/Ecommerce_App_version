import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');
const itemWidth = (width - 40) / 2 - 10; // Calculate item width for two items per row

const LikePro = ({ likeItems }) => {
  const renderLikeItems = () => {
    if (likeItems.length > 0) {
      return (
        <FlatList
          key="likeItems"
          data={likeItems}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Display two items per row
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
          )}
        />
      );
    } else {
      return <Text style={styles.emptyMessage}>No liked products yet.</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Liked Products</Text>
      {renderLikeItems()}
    </View>
  );
};

const mapStateToProps = (state) => ({
  likeItems: state.like.likeItems,
});

export default connect(mapStateToProps)(LikePro);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    paddingHorizontal:5,
    paddingVertical:30,
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 5,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemContainer: {
    width: itemWidth,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginTop: 3,
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
