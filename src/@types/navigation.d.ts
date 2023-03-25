export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newMeal: { mealsGroupId?: string; mealId?: string };
      createMealFeedback: { inDiet: boolean };
      mealDetails: { mealsGroupId: string; mealId: string };
    }
  }
}
