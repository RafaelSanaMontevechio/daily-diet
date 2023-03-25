import { Container, Avatar, Logo } from './styles';

import DailyDietLogo from '../../assets/daily-diet-logo.png';

export function Header() {
  return (
    <Container>
      <Logo source={DailyDietLogo} />
      <Avatar
        source={{
          uri: 'https://github.com/RafaelSanaMontevechio.png',
        }}
      />
    </Container>
  );
}
