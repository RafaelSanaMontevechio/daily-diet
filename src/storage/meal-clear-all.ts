import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from './storageConfig';

export async function clearAllMeals() {
  try {
    await AsyncStorage.removeItem(MEAL_COLLECTION);
  } catch (error) {
    throw error;
  }
}
