import { TouchableOpacityProps } from "react-native";
import { ButtonIcon } from "../ButtonIcon";
import { Container, Title, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function PlayerCards({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name="person" />
      <Title>{title}</Title>
      <ButtonIcon icon="close" type="SECUNDARY" />
    </Container>
  );
}
