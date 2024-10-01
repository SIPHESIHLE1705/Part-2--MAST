import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SummaryScreenNavigationProp, SummaryScreenRouteProp } from '../navigationTypes';

const SummaryScreen = () => {   
  const route = useRoute<SummaryScreenRouteProp>();
  const navigation = useNavigation<SummaryScreenNavigationProp>();

  const { dishName, description, course, cost } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dish Name: <Text style={styles.value}>{dishName}</Text></Text>
      <Text style={styles.label}>Description: <Text style={styles.value}>{description}</Text></Text>
      <Text style={styles.label}>Course Selected: <Text style={styles.value}>{course}</Text></Text>
      <Text style={styles.label}>Total Cost: <Text style={styles.value}>R {cost.toFixed(2)}</Text></Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('MenuList')}
      >
        <Text style={styles.buttonText}>Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDAB9', // Peach background color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  value: {
    fontWeight: 'bold', // Makes the dish name, description, course, and cost stand out
    fontSize: 20,
    color: 'black',
  },
  button: {
    backgroundColor: '#FFA07A', // Light salmon background color
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    width: '80%', // Make the button take 80% of the width
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white', // White text color for contrast
    fontWeight: 'bold',
  },
});

export default SummaryScreen;