import { ArrowLeft } from 'phosphor-react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 56px;
  max-height: 56px;

  flex-direction: row;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 18px;
  align-items: center;
  text-align: center;

  color: #1b1d1e;
`;

export const Section = styled.View<{ width: string }>`
  width: ${({ width }) => width};

  min-height: 56px;
  max-height: 56px;

  align-items: center;
  justify-content: center;
`;

export const BackIcon = styled(ArrowLeft).attrs(() => ({
  size: 24,
  color: '#333638',
}))`
  margin-right: 10px;
`;
