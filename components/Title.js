import { Text, StyleSheet } from 'react-native';

export default function Title() {
  return <Text style={styles.title}>Welcome to InspireMe!</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
});
