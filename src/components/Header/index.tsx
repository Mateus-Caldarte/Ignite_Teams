import { Logo, Container, BackIcon, BackButton } from "./styles";
import { useNavigation } from '@react-navigation/native'
import logoImg from "../../assets/logo.png";

interface Props {
  showBackButton?: boolean;
}

export function Header({ showBackButton }: Props) {

  const navigation = useNavigation();

  const handleGroups = () => {
      navigation.navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGroups}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
