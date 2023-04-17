import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { Input } from "../../components/Input";
import { Container, Icon, Content } from "./styles";
import { Keyboard } from "react-native";
import {  useNavigation } from '@react-navigation/native'

export function NewGroup() {

  const navigation = useNavigation();
  const[group, setGroup] = useState('')

  const handleNewTeams = () => {
      navigation.navigate('players', {group})
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

          <Button title="Criar" onPress={handleNewTeams}/>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
