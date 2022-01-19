import { ChakraProvider } from "@chakra-ui/react";

export const withChakra = (component: () => React.ReactNode) => () => {
  return <ChakraProvider>{component()}</ChakraProvider>;
};
