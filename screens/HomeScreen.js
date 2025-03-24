import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../components/Title';
import Quote from '../components/Quote';
import CustomButton from '../components/CustomButton';

export default function HomeScreen({ navigation }) {
  const [quote, setQuote] = useState('The only way to do great work is to love what you do. - Steve Jobs'); // Initial quote

  // Function to fetch a new motivational quote from the API
  const getNewQuote = async () => {
    try {
      const response = await fetch('https://qapi.vercel.app/api/random');
      const data = await response.json();
      setQuote(data.quote); // Assuming the response has a 'quote' property
    } catch (error) {
      console.error('Error fetching new quote:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Title />
      <Quote text={quote} />
      
      {/* Primary Button for new motivational quote */}
      <CustomButton onPress={getNewQuote} text="Get New Quote" />

      {/* Secondary Button for navigation */}
      <CustomButton onPress={() => navigation.navigate('Employees')} text="View Employees" style={styles.secondaryButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  secondaryButton: {
    marginTop: 20,  // Added margin for spacing
    backgroundColor: '#4CAF50', // Different color for secondary button
  }
});
