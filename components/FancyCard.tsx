import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Fancy Card</Text>

      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/29570368/pexels-photo-29570368.jpeg',
          }}
          style={styles.image}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Beautiful Nature</Text>
          <Text style={styles.cardDescription}>
            This is a fancy card with an image and some text. Looks clean and
            modern.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',

    // Android shadow
    elevation: 5,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  image: {
    width: '100%',
    height: 180,
  },

  cardBody: {
    padding: 10,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#000',
  },

  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});
