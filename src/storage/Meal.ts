export interface Meal {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  insideDiet: string;
}

export interface Meals {
  id: string;
  date: string;
  meals: Meal[];
}
