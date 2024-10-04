import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const products = [
  { id: '1', title: 'Product 1' },
  { id: '2', title: 'Product 2' },
  { id: '3', title: 'Product 3' },
  { id: '4', title: 'Product 4' },
  { id: '5', title: 'Product 5' },
  { id: '6', title: 'Product 6' },
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2} // Use numColumns for a grid layout
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#f9c2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
