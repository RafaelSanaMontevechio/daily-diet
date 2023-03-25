import { Route, useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '../../components/Button';

import InDiet from '../../assets/in-diet.png';
import OutDiet from '../../assets/out-diet.png';

import {
  Title,
  Message,
  Container,
  FeedBackImage,
  InnerContainer,
} from './styles';

type RouteParams = {
  inDiet: boolean;
};

export function CreateMealFeedback() {
  const route = useRoute<Route<'createMealFeedback', RouteParams>>();
  const navigation = useNavigation();

  const handleGoToHome = () => {
    navigation.navigate('home');
  };

  return (
    <Container>
      <Title inDiet={route.params.inDiet}>Continue assim!</Title>
      <Message>
        {route.params.inDiet
          ? 'Você continua dentro da dieta. Muito bem!'
          : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'}
      </Message>

      <InnerContainer>
        <FeedBackImage source={route.params.inDiet ? InDiet : OutDiet} />
        <Button text="Ir para a  página inicial" onPress={handleGoToHome} />
      </InnerContainer>
    </Container>
  );
}
