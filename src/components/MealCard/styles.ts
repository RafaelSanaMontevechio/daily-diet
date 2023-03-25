import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 14px 16px 14px 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 49px;

  border: 1px solid #dddedf;
  border-radius: 6px;
  margin-top: 10px;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  width: 0px;
  height: 14px;

  border: 1px solid #b9bbbc;

  margin-left: 10px;
  margin-right: 10px;
`;

export const Hour = styled.Text`
  font-weight: 700;
  font-size: 12px;

  align-items: center;

  color: #1b1d1e;
`;

export const MealName = styled.Text`
  font-weight: 400;
  font-size: 16px;
  align-items: center;

  color: #333638;
`;

export const Status = styled.View<{ inside: boolean }>`
  width: 14px;
  height: 14px;

  border-radius: 50px;

  background: ${({ inside }) => (inside ? '#CBE4B4' : '#f3babd')};
`;
