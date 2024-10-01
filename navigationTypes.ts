// navigationTypes.ts

import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the parameter list for your stack
export type RootStackParamList = {
  Home: undefined; // No parameters
  MenuList: undefined; // No parameters
  CourseSelection: {
    dishName: string;
    description: string;
    cost: number;
    course: string; // Example of a parameter
  };
  Summary: {
    dishName: string;
    description: string;
    course: string;
    cost: number;
  };
};

// Define types for navigation props
export type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

export type MenuListScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'MenuList'>,
  StackNavigationProp<RootStackParamList>
>;

export type CourseSelectionScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'CourseSelection'>,
  StackNavigationProp<RootStackParamList>
>;

export type SummaryScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Summary'>,
  StackNavigationProp<RootStackParamList>
>;

// Define route props
export type CourseSelectionScreenRouteProp = RouteProp<RootStackParamList, 'CourseSelection'>;
export type SummaryScreenRouteProp = RouteProp<RootStackParamList, 'Summary'>;
