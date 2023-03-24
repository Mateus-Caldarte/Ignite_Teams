import { useState } from "react";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { GroupCard } from "../../components/GroupCards";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={
          <ListEmpty message="Que tal adicionar a primeira turma?" />
        }
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Button title="Cadastrar turma" onPress={handleNewGroup} />
    </Container>
  );
}
