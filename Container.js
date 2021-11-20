import React from "react";
import { Box } from "native-base";
import Calculator from "./src/screens/Calculator";

export default function Container() {
  return (
    <Box safeArea flex={1} bg="lightPink.500">
      <Calculator />
    </Box>
  );
}
