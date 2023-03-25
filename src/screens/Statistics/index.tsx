import { useNavigation } from '@react-navigation/native';

import { Card } from '../../components/Card';

import {
  Container,
  GeneralStatistics,
  GeneralStatisticsText,
  DietContainer,
} from './styles';

export function Statistics() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <Card
        type="SUCCESS"
        percent="90,69"
        info="Lorem ipsum dolor sit amet!"
        goBack={handleGoBack}
      />

      <GeneralStatistics>
        <GeneralStatisticsText>Estatísticas gerais</GeneralStatisticsText>

        <Card percent="22" info="Lorem ipsum dolor sit amet!" />
        <Card
          percent="109"
          info="Lorem ipsum dolor sit amet!"
          style={{ top: 15 }}
        />

        <DietContainer>
          <Card
            type="SUCCESS"
            percent="22"
            info="Lorem ipsum dolor sit amet!"
            style={{ width: '48%' }}
          />
          <Card
            type="FAILURE"
            percent="109"
            info="Lorem ipsum dolor sit amet!"
            style={{ width: '48%' }}
          />
        </DietContainer>
      </GeneralStatistics>
    </Container>
  );
}
