import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Modal, Pressable } from 'react-native';
import EmployeeCard from '../components/EmployeeCard';
import EmployeeDetails from '../components/EmployeeDetails';

export default function EmployeesScreen() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://api.saray.net/api/people')
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const openModal = (employee) => {
    setSelectedEmployee(employee);
    setModalVisible(true);
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF6B6B" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Employees</Text>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => openModal(item)}>
            <EmployeeCard employee={item} />
          </Pressable>
        )}
      />

      {/* Modal for Employee Details */}
      {selectedEmployee && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <EmployeeDetails employeeId={selectedEmployee.id} closeModal={() => setModalVisible(false)} />
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1E1E', padding: 20 },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', marginBottom: 20 },
});
