import { TouchableOpacityProps } from 'react-native';

import { FilterStyleProps, Container, Title, Status } from './styles';

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function DietType({
  title,
  type,
  isActive = false,
  ...rest
}: FilterProps) {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Status type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
