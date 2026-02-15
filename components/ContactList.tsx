import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: '1',
      name: 'Rahul Sharma',
      status: 'Online',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      uid: '2',
      name: 'Ananya Verma',
      status: 'Busy',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      uid: '3',
      name: 'Aman Singh',
      status: 'Offline',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      uid: '4',
      name: 'Pooja Patel',
      status: 'At work',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>

      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.contactCard}>
            <Image source={{ uri: imageUrl }} style={styles.avatar} />

            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  container: {
    paddingHorizontal: 10,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#F3F4F6',
    padding: 10,
    borderRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  status: {
    fontSize: 13,
    color: '#6B7280',
  },
});
