import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding-top: 60px;
  background-color: #e5f0db;
`;

export const GeneralStatistics = styled.View`
  flex: 1;
  top: 40px;

  padding: 24px;

  background-color: #fafafa;
  border-radius: 20px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
`;

export const GeneralStatisticsText = styled.Text`
  font-weight: 700;
  font-size: 14px;

  align-items: center;
  text-align: center;

  color: #1b1d1e;

  margin: 10px 0 30px 0;
`;

export const DietContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;
`;
