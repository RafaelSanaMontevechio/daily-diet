import { TouchableOpacity } from 'react-native';

import styled, { css } from 'styled-components/native';

export interface FilterStyleProps {
  isActive: boolean;
  type: 'YES' | 'NO';
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  width: 100%;
  height: 56px;

  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ isActive, type }) =>
    css`
      background-color: ${isActive && type === 'YES'
        ? '#E5F0DB'
        : isActive && type === 'NO'
        ? '#F4E6E7'
        : '#EFF0F0'};

      border: ${isActive && type === 'YES'
        ? '#639339'
        : isActive && type === 'NO'
        ? '#BF3B44'
        : '0'};
    `}
`;

export const Title = styled.Text``;

export const Status = styled.View<{ type: 'YES' | 'NO' }>`
  width: 8px;
  height: 8px;
  border-radius: 50px;

  margin-right: 8px;

  background-color: ${({ type }) => (type === 'YES' ? '#639339' : '#BF3B44')};
`;
