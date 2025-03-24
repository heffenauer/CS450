import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, Pressable } from 'react-native';

export default function EmployeeDetails({ employeeId, closeModal }) {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.saray.net/api/people/${employeeId}`)
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching employee details:', error);
        setLoading(false);
      });
  }, [employeeId]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF6B6B" />
      </View>
    );
  }

  return (
    <View style={styles.modalBackground}>
      <View style={styles.modalContainer}>
        <Image source={{ uri: `https://api.saray.net/images/${employee.avatar}.jpg` }} style={styles.avatar} />
        <Text style={styles.name}>{employee.firstName} {employee.lastName}</Text>
        <Text style={styles.detail}>Gender: {employee.gender}</Text>
        <Text style={styles.detail}>Birthday: {employee.birthday}</Text>
        <Text style={styles.detail}>Email: {employee.email}</Text>
        <Text style={styles.detail}>Phone: {employee.phone}</Text>
        <Text style={styles.detail}>Team: {employee.team.name}</Text>
        <Text style={styles.detail}>Interests: {employee.interests}</Text>
        <Text style={styles.detail}>Country: {employee.address.country}</Text>
        <Text style={styles.detail}>City: {employee.address.city}</Text>

        <Pressable style={styles.closeButton} onPress={closeModal}>
          <Text style={styles.closeText}>Close</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackground: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    paddingHorizontal: 20,
  },
  modalContainer: { 
    backgroundColor: '#222', 
    padding: 20, 
    borderRadius: 10, 
    width: '90%',  // Adjust width for smaller screen sizes
    maxHeight: '80%', // Ensures the modal content fits within screen height
    overflow: 'scroll', // Enables scrolling if the content is too large
  },
  avatar: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    alignSelf: 'center', 
    marginBottom: 10 
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#FFF', 
    textAlign: 'center' 
  },
  detail: { 
    fontSize: 16, 
    color: '#CCC', 
    textAlign: 'center', 
    marginBottom: 5 
  },
  closeButton: { 
    backgroundColor: '#FF6B6B', 
    padding: 10, 
    borderRadius: 5, 
    alignSelf: 'center',
    marginTop: 10
  },
  closeText: { 
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
});
