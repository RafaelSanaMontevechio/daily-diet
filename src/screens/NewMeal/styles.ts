import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 60px;

  background-color: #dddedf;
`;

export const Form = styled.View`
  flex: 1;

  top: 20px;

  flex-direction: column;
  justify-content: space-between;

  background-color: #fff;
  border-radius: 20px;

  padding: 24px;
`;

export const Fields = styled.View``;

export const DietTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FieldContainer = styled.View<{ direction?: string }>`
  margin-top: 10px;
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-weight: 700;
  font-size: 14px;

  color: #333638;

  margin-bottom: 8px;
`;

export const ButtonContainer = styled.View`
  margin-bottom: 100px;
`;
