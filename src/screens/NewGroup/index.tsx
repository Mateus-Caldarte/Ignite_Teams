import { useState } from "react";
import { Alert, TouchableWithoutFeedback } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { Input } from "../../components/Input";
import { Container, Icon, Content } from "./styles";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GroupCreate } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/AppError";

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState("");

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        Alert.alert("Nova turma", "Informe o nome da turma");
        return;
      }

      await GroupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova turma", error.message);
      } else {
        Alert.alert("Nova turma", "Não foi possível cadastrar uma nova turma");

        console.log(error);
      }
    }
  }

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
            onChangeText={setGroup}
          />

          <Button title="Criar" onPress={handleNew} />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
