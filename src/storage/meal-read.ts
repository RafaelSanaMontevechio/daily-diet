import AsyncStorage from '@react-native-async-storage/async-storage';

import { Meals } from './Meal';

import { MEAL_COLLECTION } from './storageConfig';

export async function getMeal(groupMealId: string, mealId: string) {
  try {
    if (!groupMealId || !mealId) return;

    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: Meals[] = storedMeals ? JSON.parse(storedMeals) : [];

    const groupMeal = meals.find((item) => item.id === groupMealId);

    const result = groupMeal?.meals.find((meal) => meal.id === mealId);

    return result;
  } catch (error) {
    throw error;
  }
}
