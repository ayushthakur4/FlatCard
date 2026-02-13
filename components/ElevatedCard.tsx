import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>ElevatedCard</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Tap me </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>more</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },

  card: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  cardElevated: {
    elevation: 5, // Android
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  cardText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
