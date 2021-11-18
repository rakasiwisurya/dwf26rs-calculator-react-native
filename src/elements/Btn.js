import React from "react";
import { Button, Text } from "native-base";

export default function Btn(props) {
  const { value, colorScheme, onPress } = props;

  return (
    <Button
      colorScheme={colorScheme}
      onPress={() => {
        onPress(value);
      }}
      flex={4}
    >
      <Text color="white" fontSize="2xl" fontFamily="body" fontWeight="700">
        {value}
      </Text>
    </Button>
  );
}
