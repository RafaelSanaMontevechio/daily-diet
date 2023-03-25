import { TouchableOpacityProps } from 'react-native';

import { ButtonText, Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  icon?: React.ReactNode;
  type?: 'PRIMARY' | 'GHOST';
  top?: number;
}

export function Button({
  text,
  icon,
  type = 'PRIMARY',
  top = 0,
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} top={top} {...rest}>
      {icon && icon}
      <ButtonText type={type}>{text}</ButtonText>
    </Container>
  );
}
