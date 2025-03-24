import { Text, StyleSheet, ScrollView, View } from 'react-native';

export default function Quote({ text }) {
  return (
    <View style={styles.quoteContainer}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.quote}>
          "{text}"
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  quoteContainer: {
    flex: 0,  // Prevents it from taking too much vertical space
    alignItems: 'center',
  },
  scrollContainer: {
    maxHeight: 150,  // Limit the scrollable area height
    marginBottom: 20, // Add space after the quote
    paddingHorizontal: 10,  // Optional: Adds padding for better readability
  },
  quote: {
    fontSize: 18,
    color: '#CCCCCC',
    textAlign: 'center',
  },
});
