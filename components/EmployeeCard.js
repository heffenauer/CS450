import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function EmployeeCard({ employee }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: `https://api.saray.net/images/${employee.avatar}.jpg` }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{employee.firstName} {employee.lastName}</Text>
        <Text style={styles.position}>{employee.position}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#333', padding: 15, borderRadius: 10, marginBottom: 10 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  info: { flex: 1 },
  name: { fontSize: 18, color: '#FFFFFF', fontWeight: 'bold' },
  position: { fontSize: 14, color: '#CCCCCC', textAlign: 'right' },
});
