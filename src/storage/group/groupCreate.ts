import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../configStorage";
import { GroupGetAll } from "./groupGetAll";
import { AppError } from "../../utils/AppError";

export async function GroupCreate(newGroup: string){
    try {
       const storedGroups = await GroupGetAll();
       const groupAlreadyExist = storedGroups.includes(newGroup);

       if (groupAlreadyExist) {
         throw new AppError('Grupo já cadastrado');
       }


       const storage = JSON.stringify([...storedGroups, newGroup])


       await AsyncStorage.setItem(GROUP_COLLECTION, storage)
    } catch (error) {
        throw error
    }
}