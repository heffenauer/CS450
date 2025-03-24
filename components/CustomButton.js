import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ onPress, text = 'Click Me' }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: '#FF6B6B', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10, marginTop: 20 },
  buttonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
});
