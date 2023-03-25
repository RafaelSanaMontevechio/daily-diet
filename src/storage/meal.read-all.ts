import AsyncStorage from '@react-native-async-storage/async-storage';

import { Meals } from './Meal';

import { MEAL_COLLECTION } from './storageConfig';

export async function getAllMeals() {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: Meals[] = storedMeals ? JSON.parse(storedMeals) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
