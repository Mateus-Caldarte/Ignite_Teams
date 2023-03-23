import {
  Container,
  Form,
  ContainerButton,
  HeaderList,
  NumberOfPlayers,
} from "./styled";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Filter } from "../../components/Filter";
import { useState } from "react";
import { FlatList } from "react-native";
import { PlayerCards } from "../../components/PlayerCard";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [player, setPlayer] = useState(["Mateus", "Letícia", "Rodrigo"]);

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

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{player.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={player}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayerCards title={item} />}
      />

      <ContainerButton>
        <Button title="Remover turma" type="SECUNDARY" />
      </ContainerButton>
    </Container>
  );
}
