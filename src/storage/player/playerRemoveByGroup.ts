import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../configStorage";
import { playersGetByGroup } from "./plyersGetByGroup";

export async function playerRemovByGroup(playerName: string, group: string) {
  try {
    const storage = await playersGetByGroup(group);

    const filtered = storage.filter((player) => player.name !== playerName);

    const players = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
  } catch (error) {
    throw error;
  }
}
