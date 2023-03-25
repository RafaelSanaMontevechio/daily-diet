import AsyncStorage from '@react-native-async-storage/async-storage';

import uuid from 'react-native-uuid';

import { Meal } from './Meal';

import { getAllMeals } from './meal.read-all';

import { MEAL_COLLECTION } from './storageConfig';

export async function createNewMeal(meal: Meal) {
  try {
    const storedMeals = await getAllMeals();

    const mealIndex = storedMeals.findIndex(
      (storedMeal) => storedMeal.date === meal.date,
    );

    if (mealIndex === -1) {
      const newMeal = {
        id: uuid.v4().toString(),
        date: meal.date,
        meals: [meal],
      };

      storedMeals.push(newMeal);
    }

    if (mealIndex > -1) {
      storedMeals[mealIndex].meals.push(meal);
    }

    const storage = JSON.stringify(storedMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
