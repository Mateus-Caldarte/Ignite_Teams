import { Logo, Container, BackIcon, BackButton } from "./styles";
import logoImg from "../../assets/logo.png";

interface Props {
  showBackButton?: boolean;
}

export function Header({ showBackButton }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
