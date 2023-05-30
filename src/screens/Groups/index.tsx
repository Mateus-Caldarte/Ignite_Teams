import { useCallback, useState } from "react";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { GroupCard } from "../../components/GroupCards";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { FlatList, View } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { GroupGetAll } from "../../storage/group/groupGetAll";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  async function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroup() {
    try {
      const data = await GroupGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroup();
    }, [])
  );

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        ListEmptyComponent={
          <ListEmpty message="Que tal adicionar a primeira turma?" />
        }
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Button title="Cadastrar turma" onPress={handleNewGroup} />
    </Container>
  );
}
