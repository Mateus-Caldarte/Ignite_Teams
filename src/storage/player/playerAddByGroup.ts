import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";
import { PLAYER_COLLECTION } from "../configStorage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./plyersGetByGroup";

export async function PlayerAddGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayer = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayer.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já está adicionada em um time aqui");
    } else {
      const storage = JSON.stringify([...storedPlayer, newPlayer]);
      await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
    }
  } catch (error) {
    throw error;
  }
}
