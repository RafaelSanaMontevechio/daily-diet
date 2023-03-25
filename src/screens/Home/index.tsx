import { useCallback, useState } from 'react';

import { FlatList } from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { MealCard } from '../../components/MealCard';

import { Meal, Meals } from '../../storage/Meal';
import { getAllMeals } from '../../storage/meal.read-all';

import {
  Icon,
  Percent,
  NewMeal,
  MealText,
  DateText,
  MealInner,
  Container,
  MealsContainer,
} from './styles';

export function Home() {
  const [meals, setMeals] = useState<Meals[]>([]);

  const navigation = useNavigation();

  const handleOpenStatistics = () => {
    navigation.navigate('statistics');
  };

  const handleGoToTheNewMeal = () => {
    navigation.navigate('newMeal', {});
  };

  const handleMealDetails = (mealsGroupId: string, mealId: string) => {
    navigation.navigate('mealDetails', { mealsGroupId, mealId });
  };

  const renderItem = ({ item }: { item: Meals }) => (
    <MealInner>
      <DateText>{item.date}</DateText>
      {item.meals.map((meal: Meal) => (
        <MealCard
          key={meal.id}
          meal={meal}
          onPress={() => {
            handleMealDetails(item.id, meal.id);
          }}
        />
      ))}
    </MealInner>
  );

  useFocusEffect(
    useCallback(() => {
      const fetchMeals = async () => {
        try {
          const res = await getAllMeals();
          setMeals(res);
        } catch (e) {
          console.error(e);
        }
      };

      fetchMeals();
    }, []),
  );

  return (
    <Container>
      <Header />

      <Percent>
        <Card
          type="SUCCESS"
          percent="99%"
          info="Lorem ipsum dolor sit amet!"
          onOpen={handleOpenStatistics}
        />
      </Percent>

      <NewMeal>
        <MealText>Refeições</MealText>
        <Button
          icon={<Icon />}
          text="Nova refeição"
          onPress={handleGoToTheNewMeal}
        />
      </NewMeal>

      <MealsContainer>
        <FlatList
          data={meals}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </MealsContainer>
    </Container>
  );
}
