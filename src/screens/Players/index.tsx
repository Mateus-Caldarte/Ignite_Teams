import { Container, Form, ContainerButton } from "./styled";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Filter } from "../../components/Filter";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <HighLight
        title="Nova turma"
        subtitle="Adicione uma nova turma e seus participantes"
      />
      <Form>
        <Input
          placeholder="Nome da pessoa"
          style={{ marginTop: 20 }}
          placeholderTextColor="#FFF"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </Form>

      <Filter title="Time A" isActive />

      <ContainerButton>
        <Button title="Remover turma" type="SECUNDARY" />
      </ContainerButton>
    </Container>
  );
}
