import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

// Sample menu items (this could also be imported from a separate file)
const menuItems = [
  { id: '1', dishName: 'Grilled Chicken', description: 'Juicy grilled chicken with herbs and spices.', cost: 120.50 },
  { id: '2', dishName: 'Vegetable Pasta', description: 'Delicious pasta with fresh vegetables.', cost: 85.00 },
  { id: '3', dishName: 'Chocolate Cake', description: 'Rich and moist chocolate cake.', cost: 50.00 },
];

const HomeScreen = ({ navigation }) => {
  const totalMenuItems = menuItems.length; // Count the number of menu items

  // Function to render each menu item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('CourseSelection', {
        dishName: item.dishName,
        description: item.description,
        cost: item.cost,
        course: 'Main', // Set default course or use a selection mechanism
      })}
    >
      <Text style={styles.itemText}>{item.dishName}</Text>
      <Text style={styles.itemSubText}>R {item.cost.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome To Christoffel’s Palate’s Perfection Dining</Text>
      <Text style={styles.countText}>Total Menu Items: {totalMenuItems}</Text>

      {/* Render the menu items using FlatList */}
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity 
        style={styles.fullMenuButton} 
        onPress={() => navigation.navigate('MenuList')}
      >
        <Text style={styles.fullMenuButtonText}>View Full Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDAB9', // Peach background color
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  countText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  itemContainer: {
    padding: 15,
    backgroundColor: 'gold',
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 20,
    color: 'black',
  },
  itemSubText: {
    fontSize: 20,
    color: 'black',
    marginTop: 5,
  },
  fullMenuButton: {
    backgroundColor: '#FFA07A', // Light salmon background color
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    width: '80%', // Make the button take 80% of the width
    alignItems: 'center',
  },
  fullMenuButtonText: {
    fontSize: 18,
    color: 'white', // White text color for contrast
    fontWeight: 'bold',
  },
});

export default HomeScreen;
