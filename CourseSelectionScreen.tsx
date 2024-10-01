import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const CourseSelectionScreen = ({ route, navigation }) => {
  const { dishName, description, cost } = route.params; // Get details from navigation params

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select a Course for {dishName}</Text>
      <Text style={styles.descriptionText}>{description}</Text>

      {/* Example of course options with clear labels */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Summary', {
          dishName,
          description,
          course: 'Starter',
          cost,
        })}
      >
        <Text style={styles.buttonText}>Select Starter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Summary', {
          dishName,
          description,
          course: 'Main Course',
          cost,
        })}
      >
        <Text style={styles.buttonText}>Select Main Course</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Summary', {
          dishName,
          description,
          course: 'Dessert',
          cost,
        })}
      >
        <Text style={styles.buttonText}>Select Dessert</Text>
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
    padding: 15,
  },
  headerText: {
    fontSize: 24,
    color: 'black',
    marginBottom: 30,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'gold',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%', // Makes buttons wider
    alignItems: 'center',
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Shadow properties for iOS
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    color: 'black', // Button text color
  },
});

export default CourseSelectionScreen;