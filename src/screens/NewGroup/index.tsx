import { TouchableWithoutFeedback } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { Input } from "../../components/Input";
import { Container, Icon, Content } from "./styles";
import { Keyboard } from "react-native";

export function NewGroup() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header showBackButton />
        <Content>
          <Icon />

          <HighLight title="Nova turma" subtitle="Crie uma nova turma" />

          <Input
            style={{ paddingTop: 15, marginBottom: 20 }}
            placeholder="Digite o nome da turma"
            placeholderTextColor="white"
          />

          <Button title="Criar" />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
