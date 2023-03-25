import { TouchableOpacity } from 'react-native';

import styled, { css } from 'styled-components/native';

type ButtonTypes = 'PRIMARY' | 'GHOST';

export const Container = styled(TouchableOpacity)<{
  type: ButtonTypes;
  top: number;
}>`
  flex: 1;
  flex-direction: row;

  min-height: 56px;
  max-height: 56px;

  align-items: center;
  justify-content: center;

  padding: 16px 24px;

  border-radius: 6px;

  margin-top: ${({ top }) => `${top}px`}

  background-color: ${({ type }) =>
    type === 'PRIMARY' ? '#333638' : 'transparent'};

  border: ${({ type }) => (type === 'PRIMARY' ? '' : '1px solid #333638')};
`;

export const ButtonText = styled.Text<{ type: ButtonTypes }>`
  font-weight: 700;
  font-size: 14px;

  align-items: center;
  color: ${({ type }) => (type === 'PRIMARY' ? '#fff' : '#333638')};
`;
