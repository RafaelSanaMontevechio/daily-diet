import { TouchableOpacityProps } from 'react-native';

import { Meal } from '../../storage/Meal';
import { Container, Section, Divider, Hour, MealName, Status } from './styles';

interface MealCardProps extends TouchableOpacityProps {
  meal: Meal;
}

export function MealCard({ meal, ...rest }: MealCardProps) {
  return (
    <Container {...rest}>
      <Section>
        <Hour>{meal.hour}</Hour>
        <Divider />
        <MealName>{meal.name}</MealName>
      </Section>
      <Status inside={!!meal.insideDiet} />
    </Container>
  );
}
