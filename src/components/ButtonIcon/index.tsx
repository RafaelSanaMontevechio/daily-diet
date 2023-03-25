import { TouchableOpacityProps } from 'react-native';

import { Container } from './styles';

interface ButtonIconProps extends TouchableOpacityProps {
  icon: React.ReactNode;
}

export function ButtonIcon({ icon, ...rest }: ButtonIconProps) {
  return <Container {...rest}>{icon}</Container>;
}
