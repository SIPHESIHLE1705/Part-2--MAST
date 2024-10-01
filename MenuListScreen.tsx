import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Sample menu items (this could also be imported from a separate file)
const menuItems = [
  {
    id: '1',
    dishName: 'Grilled Chicken',
    description: 'Juicy grilled chicken with herbs and spices.',
    cost: 120.50,
  },
  {
    id: '2',
    dishName: 'Vegetable Pasta',
    description: 'Delicious pasta with fresh vegetables.',
    cost: 85.00,
  },
  {
    id: '3',
    dishName: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake.',
    cost: 50.00,
  },
];

const MenuListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('CourseSelection', {
        dishName: item.dishName,
        description: item.description,
        cost: item.cost,
      })}
    >
      <Text style={styles.itemText}>{item.dishName}</Text>
      <Text style={styles.itemSubText}>R {item.cost.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Menu List</Text>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDAB9', // Peach background color
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 15,
    backgroundColor: 'gold',
    borderRadius: 8,
    marginVertical: 10,
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
});

export default MenuListScreen; 