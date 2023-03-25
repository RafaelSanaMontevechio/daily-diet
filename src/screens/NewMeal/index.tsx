import { useCallback, useReducer, useState } from 'react';

import {
  Route,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import uuid from 'react-native-uuid';

import { Meal } from '../../storage/Meal';
import { getMeal } from '../../storage/meal-read';
import { createNewMeal } from '../../storage/meal.create';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { DietType } from '../../components/DietType';
import { NavHeader } from '../../components/NavHeader';

import {
  Form,
  Label,
  Fields,
  Container,
  FieldContainer,
  ButtonContainer,
  DietTypeContainer,
} from './styles';
import { updateMeal } from '../../storage/meal-update';

let dataAtual = new Date();
let dia = dataAtual.getDate().toString().padStart(2, '0');
let mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
let ano = dataAtual.getFullYear();
let dataFormatada = `${dia}/${mes}/${ano}`;

let horas = dataAtual.getHours().toString().padStart(2, '0');
let minutos = dataAtual.getMinutes().toString().padStart(2, '0');
let horaFormatada = `${horas}:${minutos}`;

type Form = Omit<Meal, 'id'>;

type RouteParams = {
  mealsGroupId: string;
  mealId: string;
};

export function NewMeal() {
  const [confirmButtonText, setConfirmButtonText] =
    useState('Cadastrar refeição');
  const [toEdit, setToEdit] = useState(false);
  const [event, updateEvent] = useReducer(
    (state: Form, newState: Partial<Form>) => ({
      ...state,
      ...newState,
    }),
    {
      name: '',
      description: '',
      date: dataFormatada,
      hour: horaFormatada,
      insideDiet: '',
    },
  );

  const route = useRoute<Route<'newMeal', RouteParams>>();

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSetInsideTheDiet = (value: string) => {
    updateEvent({
      insideDiet: value,
    });
  };

  const handleAddNewMeal = () => {
    if (toEdit) {
      updateMeal(route.params.mealsGroupId, {
        id: route.params.mealId,
        ...event,
      });

      setToEdit(false);
      navigation.navigate('createMealFeedback', {
        inDiet: !!event.insideDiet,
      });

      return;
    }

    createNewMeal({ id: uuid.v4().toString(), ...event });
    navigation.navigate('createMealFeedback', { inDiet: !!event.insideDiet });
  };

  useFocusEffect(
    useCallback(() => {
      const fetchMeal = async () => {
        try {
          if (route.params.mealsGroupId && route.params.mealId) {
            setToEdit(true);

            const res = await getMeal(
              route.params.mealsGroupId,
              route.params.mealId,
            );

            if (res) {
              setConfirmButtonText('Salvar alterações');
              updateEvent({
                name: res.name,
                description: res.description,
                date: res.date,
                hour: res.hour,
                insideDiet: res.insideDiet,
              });
            }
          }
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
      <NavHeader title="Nova Refeição" goBack={handleGoBack} />
      <Form>
        <Fields>
          <FieldContainer>
            <Label>Nome</Label>
            <Input
              placeholder="Nome"
              value={event.name}
              onChangeText={(e) => updateEvent({ name: e })}
            />
          </FieldContainer>

          <FieldContainer>
            <Label>Descrição</Label>
            <Input
              multiline
              numberOfLines={10}
              value={event.description}
              onChangeText={(e) => updateEvent({ description: e })}
              style={{ height: 120, textAlignVertical: 'top' }}
            />
          </FieldContainer>

          <FieldContainer direction="row">
            <FieldContainer style={{ width: '49%' }}>
              <Label>Data</Label>
              <Input
                placeholder="xx/xx/xx"
                value={event.date}
                onChangeText={(e) => updateEvent({ date: e })}
              />
            </FieldContainer>
            <FieldContainer style={{ width: '49%' }}>
              <Label>Hora</Label>
              <Input
                placeholder="00:00"
                value={event.hour}
                onChangeText={(e) => updateEvent({ hour: e })}
              />
            </FieldContainer>
          </FieldContainer>

          <FieldContainer style={{ top: 10 }}>
            <Label>Esta dentro da dieta?</Label>
            <DietTypeContainer>
              <FieldContainer style={{ width: '49%' }}>
                <DietType
                  title="Sim"
                  type="YES"
                  isActive={event.insideDiet === 'true'}
                  onPress={() => handleSetInsideTheDiet('true')}
                />
              </FieldContainer>
              <FieldContainer style={{ width: '49%' }}>
                <DietType
                  title="Não"
                  type="NO"
                  isActive={event.insideDiet === 'false'}
                  onPress={() => handleSetInsideTheDiet('false')}
                />
              </FieldContainer>
            </DietTypeContainer>
          </FieldContainer>
        </Fields>

        <ButtonContainer>
          <Button text={confirmButtonText} onPress={handleAddNewMeal} />
        </ButtonContainer>
      </Form>
    </Container>
  );
}
