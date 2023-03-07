import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { Players } from "./src/screens/Players";
import theme from "./src/theme/";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loaded } from "./src/components/Loaded";

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontLoaded ? <Players /> : <Loaded />}
    </ThemeProvider>
  );
}
