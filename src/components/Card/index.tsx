import { ViewProps } from 'react-native';
import { ButtonIcon } from '../ButtonIcon';

import {
  Container,
  Actions,
  Percent,
  Info,
  GoIcon,
  BackIcon,
  CardTypes,
} from './styles';

interface CardProps extends ViewProps {
  percent: string;
  info: string;
  type?: CardTypes;
  goBack?: () => void;
  onOpen?: () => void;
}

export function Card({
  percent,
  info,
  type = 'DEFAULT',
  goBack,
  onOpen,
  ...rest
}: CardProps) {
  return (
    <Container type={type} {...rest}>
      {(goBack || onOpen) && (
        <Actions
          justify={
            goBack && onOpen
              ? 'space-between'
              : goBack && !onOpen
              ? 'flex-start'
              : 'flex-end'
          }
        >
          {goBack && <ButtonIcon icon={<BackIcon />} onPress={goBack} />}
          {onOpen && <ButtonIcon icon={<GoIcon />} onPress={onOpen} />}
        </Actions>
      )}

      <Percent>{percent}</Percent>
      <Info>{info}</Info>
    </Container>
  );
}
