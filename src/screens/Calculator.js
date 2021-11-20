import React, { useState } from "react";
import { Box, VStack, HStack } from "native-base";
import Btn from "../elements/Btn";
import Display from "../elements/Display";

export default function Calculator() {
  const [result, setResult] = useState(0);

  const handlePress = (value) => {
    if (typeof result === "number") {
      setResult(value);
    } else {
      setResult(result + value);
    }
  };

  const handleCalculate = () => {
    const calculate = eval(result);
    setResult(calculate);
  };

  const handlePercentage = () => {
    const percentage = result / 100;
    setResult(percentage);
  };

  return (
    <Box mx={7} mt={20}>
      <VStack space={5}>
        <Display result={result} setResult={setResult} />

        <VStack space={2}>
          <HStack space={2}>
            <Btn value="1" onPress={handlePress} colorScheme="regularPink" />
            <Btn value="2" onPress={handlePress} colorScheme="regularPink" />
            <Btn value="-" onPress={handlePress} colorScheme="darkPink" />
            <Btn value="+" onPress={handlePress} colorScheme="darkPink" />
          </HStack>
          <HStack space={2}>
            <Btn value="3" onPress={handlePress} colorScheme="regularPink" />
            <Btn value="4" onPress={handlePress} colorScheme="regularPink" />
            <Btn value="/" onPress={handlePress} colorScheme="darkPink" />
            <Btn value="*" onPress={handlePress} colorScheme="darkPink" />
          </HStack>
          <HStack space={2}>
            <Btn value="5" onPress={handlePress} colorScheme="regularPink" />
            <Btn value="6" onPress={handlePress} colorScheme="regularPink" />
            <Btn value="%" onPress={handlePercentage} colorScheme="darkPink" />
            <Btn value="=" onPress={handleCalculate} colorScheme="darkPink" />
          </HStack>
          <HStack space={2}>
            <Btn value="7" onPress={handlePress} colorScheme="regularPink" />
            <Btn value="8" onPress={handlePress} colorScheme="regularPink" />
            <Btn value="9" onPress={handlePress} colorScheme="regularPink" />
            <Btn value="0" onPress={handlePress} colorScheme="regularPink" />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}
