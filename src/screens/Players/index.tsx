import { useRoute, useNavigation } from "@react-navigation/native";
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
import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { PlayerCards } from "../../components/PlayerCard";
import { ListEmpty } from "../../components/ListEmpty";
import { Alert } from "react-native";
import { AppError } from "../../utils/AppError";
import { PlayerAddGroup } from "../../storage/player/playerAddByGroup";
import { playersGetByGroupTeam } from "../../storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "../../storage/player/PlayerStorageDTO";
import { playerRemovByGroup } from "../../storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "../../storage/group/groupRemoveByName";

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [player, setPlayer] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const route = useRoute();
  const navigation = useNavigation();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Nova pessoa", "Informe o nome");
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await PlayerAddGroup(newPlayer, group);
      setNewPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova pessoa", "Não foi possível adicionar");
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playerByTeam = await playersGetByGroupTeam(group, team);
      setPlayer(playerByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Pessoas",
        "Não foi possível carregar as pessos selecionadas"
      );
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemovByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert("Remover pessoa", "Não foi possível remover");
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigation.navigate("group");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGroupRemove() {
    Alert.alert("Remover", "Deseja remover o grupo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => groupRemove() },
    ]);
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />

      <HighLight
        title="Nova turma"
        subtitle="Adicione uma nova turma e seus participantes"
      />
      <Form>
        <Input
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome da pessoa"
          style={{ marginTop: 20 }}
          placeholderTextColor="#FFF"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCards
            title={item.name}
            onRemove={() => handlePlayerRemove(item.name)}
          />
        )}
        ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 50 },
          player.length === 0 && { flex: 1 },
        ]}
      />

      <ContainerButton>
        <Button
          title="Remover turma"
          type="SECUNDARY"
          onPress={handleGroupRemove}
        />
      </ContainerButton>
    </Container>
  );
}
