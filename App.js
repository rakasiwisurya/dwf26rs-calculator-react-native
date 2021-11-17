import React from "react";
import { extendTheme, NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import Container from "./Container";

export default function App() {
  // Load Font with Expo
  let [fontLoaded] = useFonts({
    Roboto_700Bold,
  });

  // Setup Font
  const fontConfig = {
    Roboto: {
      700: {
        normal: "Roboto_700Bold",
      },
    },
  };

  // Setup Theme
  const customColor = {
    lightPink: {
      100: "#FFA0A0",
      200: "#FFA0A0",
      300: "#FFA0A0",
      400: "#FFA0A0",
      500: "#FFA0A0",
      600: "#FFA0A0",
      700: "#FFA0A0",
      800: "#FFA0A0",
      900: "#FFA0A0",
    },
    regularPink: {
      100: "#FF5757",
      200: "#FF5757",
      300: "#FF5757",
      400: "#FF5757",
      500: "#FF5757",
      600: "#FF5757",
      700: "#FF5757",
      800: "#FF5757",
      900: "#FF5757",
    },
    darkPink: {
      100: "#930707",
      200: "#930707",
      300: "#930707",
      400: "#930707",
      500: "#930707",
      600: "#930707",
      700: "#930707",
      800: "#930707",
      900: "#930707",
    },
  };

  const theme = extendTheme({
    colors: customColor,
    fontConfig: fontConfig,
    fonts: {
      heading: "Roboto",
      body: "Roboto",
      mono: "Roboto",
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "dark",
    },
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="auto" />
      <Container />
    </NativeBaseProvider>
  );
}
