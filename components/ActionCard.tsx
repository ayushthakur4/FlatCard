import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Action Card</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => openWebsite('https://reactnative.dev')}
      >
        <Text style={styles.buttonText}>Open Website</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
