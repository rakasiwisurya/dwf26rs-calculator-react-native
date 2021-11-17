import React, { useState } from "react";
import { Box, FormControl, Input, VStack, HStack } from "native-base";
import Btn from "../elements/Btn";

export default function Calculator() {
  const [result, setResult] = useState(0);

  const handlePress = () => {};

  return (
    <Box mx={7} mt={20}>
      <VStack space={5}>
        <FormControl>
          <FormControl.Label
            _text={{
              color: "white",
              fontSize: "lg",
              fontFamily: "body",
              fontWeight: "700",
              marginLeft: "15px",
            }}
          >
            Display
          </FormControl.Label>
          <Input
            style={{
              color: "#930707",
              fontSize: 30,
              fontFamily: "Roboto",
              fontWeight: "700",
              textAlign: "right",
            }}
            value={result}
            bg="white"
            variant="unstyled"
            height={60}
          />
        </FormControl>

        <VStack space={2}>
          <HStack space={2}>
            <Btn
              value={1}
              onPress={() => {
                setResult(value);
                setTotal(value);
              }}
              colorScheme="regularPink"
            />
            <Btn value={2} onPress={handlePress} colorScheme="regularPink" />
            <Btn value="-" onPress={handlePress} colorScheme="darkPink" />
            <Btn value="+" onPress={handlePress} colorScheme="darkPink" />
          </HStack>
          <HStack space={2}>
            <Btn value={3} onPress={handlePress} colorScheme="regularPink" />
            <Btn value={4} onPress={handlePress} colorScheme="regularPink" />
            <Btn value="/" onPress={handlePress} colorScheme="darkPink" />
            <Btn value="x" onPress={handlePress} colorScheme="darkPink" />
          </HStack>
          <HStack space={2}>
            <Btn value={5} onPress={handlePress} colorScheme="regularPink" />
            <Btn value={6} onPress={handlePress} colorScheme="regularPink" />
            <Btn value="%" onPress={handlePress} colorScheme="darkPink" />
            <Btn value="=" onPress={handlePress} colorScheme="darkPink" />
          </HStack>
          <HStack space={2}>
            <Btn value={7} onPress={handlePress} colorScheme="regularPink" />
            <Btn value={8} onPress={handlePress} colorScheme="regularPink" />
            <Btn value={9} onPress={handlePress} colorScheme="regularPink" />
            <Btn value={0} onPress={handlePress} colorScheme="regularPink" />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}
