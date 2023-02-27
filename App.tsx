import { ActivityIndicator, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { Groups } from "./src/screens/Groups";
import theme from "./src/theme/";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontLoaded ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
