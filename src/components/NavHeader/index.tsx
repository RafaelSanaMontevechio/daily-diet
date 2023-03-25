import { ViewProps } from 'react-native';

import { ButtonIcon } from '../ButtonIcon';

import { BackIcon, Container, Section, Title } from './styles';

interface NavHeaderProps extends ViewProps {
  title: string;
  goBack?: () => void;
  secondaryAction?: () => void;
}

export function NavHeader({ title, goBack, secondaryAction }: NavHeaderProps) {
  return (
    <Container>
      <Section width="15%">
        {goBack && <ButtonIcon icon={<BackIcon />} onPress={goBack} />}
      </Section>

      <Section width="70%">
        <Title>{title}</Title>
      </Section>

      <Section width="15%">
        {secondaryAction && (
          <ButtonIcon icon={<BackIcon />} onPress={secondaryAction} />
        )}
      </Section>
    </Container>
  );
}
