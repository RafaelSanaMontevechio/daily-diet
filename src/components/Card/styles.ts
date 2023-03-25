import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native';
import styled from 'styled-components/native';

export type CardTypes = 'DEFAULT' | 'SUCCESS' | 'FAILURE';

interface ContainerProps {
  customHeight?: number;
  type: CardTypes;
}

interface ActionsProps {
  justify?: 'space-between' | 'flex-start' | 'flex-end';
}

const CardBackground = {
  DEFAULT: '#EFF0F0',
  SUCCESS: '#e5f0db',
  FAILURE: '#F4E6E7',
};

export const Container = styled.View<ContainerProps>`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;

  background-color: ${({ type }) => CardBackground[type]};
  border-radius: 8px;

  height: ${({ customHeight }) =>
    customHeight ? `${customHeight}px` : '102px'};
`;

export const Actions = styled.View<ActionsProps>`
  width: 100%;
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
`;

export const Percent = styled.Text`
  font-weight: 700;
  font-size: 32px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #1b1d1e;
`;

export const Info = styled.Text`
  font-weight: 400;
  font-size: 14px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #333638;

  word-break: break-word;
`;

export const BackIcon = styled(ArrowLeft).attrs(() => ({
  size: 20,
  color: '#639339',
}))`
  margin-right: 10px;
`;

export const GoIcon = styled(ArrowUpRight).attrs(() => ({
  size: 20,
  color: '#639339',
}))`
  margin-right: 10px;
`;
