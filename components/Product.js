import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Products = ({navigation}) => {

  const renderProducts = (products) => {
    return products.map((item, index) => {
      return (
        <View key={index} style={{padding: 20}}>
          <Button
            onPress={() => this.props.onPress(item)}
            title={item.name + ' - ' + item.price}
          />
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>{renderProducts(this.props.products)}</View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
