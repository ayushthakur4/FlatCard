import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Flat Cards</Text>

      <View style={styles.row}>
        <View style={[styles.card, { backgroundColor: '#ff4d4d' }]}>
          <Text style={styles.cardText}>Red</Text>
        </View>

        <View style={[styles.card, { backgroundColor: '#4da6ff' }]}>
          <Text style={styles.cardText}>Blue</Text>
        </View>

        <View style={[styles.card, { backgroundColor: '#4dff88' }]}>
          <Text style={styles.cardText}>Green</Text>
        </View>

        <View style={[styles.card, { backgroundColor: '#ffaa00' }]}>
          <Text style={styles.cardText}>Orange</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headingText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Android elevation
    elevation: 5,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FlatCard;
