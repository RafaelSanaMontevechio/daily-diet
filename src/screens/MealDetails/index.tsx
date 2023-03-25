import { useCallback, useEffect, useState } from 'react';

import { Alert } from 'react-native';

import {
  Route,
  useRoute,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';

import { Meal } from '../../storage/Meal';
import { getMeal } from '../../storage/meal-read';

import { Button } from '../../components/Button';
import { DietType } from '../../components/DietType';
import { NavHeader } from '../../components/NavHeader';

import {
  Custom,
  EditIcon,
  MealName,
  Container,
  DeleteIcon,
  MealDateTime,
  InnerContainer,
  ButtonContainer,
  MealDescription,
  MealDateTimeText,
  MealDateTimeWrapper,
} from './styles';
import { deleteMeal } from '../../storage/meal-delete';

type RouteParams = {
  mealsGroupId: string;
  mealId: string;
};

export function MealDetails() {
  const [meal, setMeal] = useState<Meal>();

  const route = useRoute<Route<'MealDetails', RouteParams>>();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoMealDetails = () => {
    if (route.params.mealId)
      navigation.navigate('newMeal', {
        mealsGroupId: route.params.mealsGroupId,
        mealId: route.params.mealId,
      });
  };

  const handleDeleteMealAlert = () => {
    Alert.alert('', 'Deseja realmente excluir o registro da refeição', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          deleteMeal(route.params.mealsGroupId, route.params.mealId);
          navigation.navigate('home');
        },
      },
    ]);
  };

  useFocusEffect(
    useCallback(() => {
      const fetchMeal = async () => {
        try {
          const res = await getMeal(
            route.params.mealsGroupId,
            route.params.mealId,
          );
          setMeal(res);
        } catch (e) {
          console.error(e);
        }
      };

      if (route) {
        fetchMeal();
      }
    }, []),
  );

  return (
    <Container>
      <NavHeader title="Editar Refeição" goBack={handleGoBack} />
      <InnerContainer>
        <MealName>{meal?.name}</MealName>
        <MealDescription>{meal?.description}</MealDescription>
        <MealDateTime>Data e hora</MealDateTime>
        <MealDateTimeWrapper>
          <MealDateTimeText>
            {meal?.date} às {meal?.hour}
          </MealDateTimeText>
        </MealDateTimeWrapper>

        <DietType
          title="Dentro da dieta"
          type="YES"
          isActive
          onPress={() => {}}
          style={Custom}
        />

        <ButtonContainer>
          <Button
            text="Editar refeição"
            icon={<EditIcon />}
            onPress={handleGoMealDetails}
          />
          <Button
            text="Excluir refeição"
            type="GHOST"
            top={10}
            icon={<DeleteIcon />}
            onPress={handleDeleteMealAlert}
          />
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
}
