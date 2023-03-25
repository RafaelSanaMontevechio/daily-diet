import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { NewMeal } from '../screens/NewMeal';
import { MealDetails } from '../screens/MealDetails';
import { Statistics } from '../screens/Statistics';
import { CreateMealFeedback } from '../screens/CreateMealFeedback';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="mealDetails" component={MealDetails} />
      <Screen name="createMealFeedback" component={CreateMealFeedback} />
    </Navigator>
  );
}
