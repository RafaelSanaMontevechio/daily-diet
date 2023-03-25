import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  justify-content: center;
`;

export const Title = styled.Text<{ inDiet: boolean }>`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;

  text-align: center;
  color: ${({ inDiet }) => (inDiet ? '#639339' : '#BF3B44')};
`;

export const Message = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  text-align: center;

  color: #1b1d1e;

  margin-top: 10px;
`;

export const InnerContainer = styled.View`
  align-items: center;
  margin: 60px;
`;

export const FeedBackImage = styled.Image`
  width: 225px;
  height: 300px;
  margin-bottom: 30px;
`;
