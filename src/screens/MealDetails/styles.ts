import { SafeAreaView } from 'react-native-safe-area-context';

import { PencilSimpleLine, Trash } from 'phosphor-react-native';

import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #dddedf;
`;

export const InnerContainer = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  top: 30px;
`;

export const MealName = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  color: #1b1d1e;

  margin-bottom: 10px;
`;

export const MealDescription = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #1b1d1e;

  margin: 10px 0 40px 0;
`;

export const MealDateTime = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  color: #1b1d1e;

  margin-bottom: 10px;
`;

export const MealDateTimeWrapper = styled.View`
  margin: 10px 0 20px 0;
`;

export const MealDateTimeText = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #1b1d1e;

  margin-bottom: 10px;
`;

export const Custom = {
  width: 150,
  borderWidth: 0,
  borderRadius: 100,
  backgroundColor: '#EFF0F0',
};

export const ButtonContainer = styled.View`
  width: 100%;
  position: absolute;

  left: 24px;
  right: 0;
  bottom: 40px;

  justify-content: center;
`;

export const EditIcon = styled(PencilSimpleLine).attrs(() => ({
  size: 18,
  color: '#fff',
}))`
  margin-right: 10px;
`;

export const DeleteIcon = styled(Trash).attrs(() => ({
  size: 18,
  color: '#1b1d1e',
}))`
  margin-right: 10px;
`;
