import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

import { Plus } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const Percent = styled.View`
  margin: 25px 0 25px;
`;

export const NewMeal = styled.View`
  margin-bottom: 20px;
`;

export const MealText = styled.Text`
  font-weight: 400;
  font-size: 16px;

  color: #1b1d1e;

  margin-bottom: 10px;
`;

export const Icon = styled(Plus).attrs(() => ({
  size: 18,
  color: '#fff',
}))`
  margin-right: 10px;
`;

export const MealsContainer = styled.View`
  flex: 1;
  margin-top: 60px;
`;

export const MealInner = styled.View``;

export const DateText = styled.Text`
  font-weight: 700;
  font-size: 16px;

  color: #1b1d1e;

  margin: 15px 0 1px 0;
`;
