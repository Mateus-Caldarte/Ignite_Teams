import { Container, FilterButtonProps, Title } from "./styles";

type Props = FilterButtonProps & {
  title: string;
};

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  );
}
