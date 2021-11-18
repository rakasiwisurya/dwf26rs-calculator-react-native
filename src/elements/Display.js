import React from "react";
import { Box, Text } from "native-base";
import { TouchableOpacity } from "react-native";

export default function Display({ result, setResult }) {
  return (
    <Box
      justifyContent="flex-end"
      alignItems="flex-end"
      bg="white"
      height={120}
      rounded="lg"
      px={5}
      py={2}
    >
      <Text
        style={{ color: "#930707" }}
        fontSize="5xl"
        fontFamily="body"
        fontWeight="700"
        pb={1}
      >
        {result}
      </Text>
      <TouchableOpacity onPress={() => setResult(0)}>
        <Text style={{ color: "#930707" }} fontSize="xl" fontFamily="body">
          Clear
        </Text>
      </TouchableOpacity>
    </Box>
  );
}
