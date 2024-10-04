import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.pager} initialPage={0}>
        <View key="1" style={styles.page}>
          <Text>Slide 1</Text>
        </View>
        <View key="2" style={styles.page}>
          <Text>Slide 2</Text>
        </View>
        <View key="3" style={styles.page}>
          <Text>Slide 3</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
