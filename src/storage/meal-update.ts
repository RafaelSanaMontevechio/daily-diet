import AsyncStorage from '@react-native-async-storage/async-storage';

import { Meal, Meals } from './Meal';

import { MEAL_COLLECTION } from './storageConfig';

export async function updateMeal(groupMealId: string, meal: Meal) {
  try {
    if (!groupMealId || !meal) return;

    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: Meals[] = storedMeals ? JSON.parse(storedMeals) : [];

    const groupMeal = meals.find((item) => item.id === groupMealId);
    const groupMealIndex = meals.findIndex((item) => item.id === groupMealId);

    if (groupMeal) {
      const mealIndex = groupMeal.meals.findIndex((m) => m.id === meal.id);

      if (mealIndex > -1) {
        groupMeal.meals.splice(mealIndex, 1, meal);
      }

      if (groupMealIndex && groupMealIndex > -1) {
        meals.splice(groupMealIndex, 1, groupMeal);
      }
    }

    const storage = JSON.stringify(meals);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
