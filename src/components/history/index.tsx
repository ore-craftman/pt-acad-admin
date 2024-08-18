import { Flex, Box } from "@chakra-ui/react";
import { PurchaseHistory } from "./Purchase";
import { EventHistory } from "./Events";

export const HistoryData = () => {
  return (
    <Flex gap={6} my={6}>
      <Box width={{ base: "100%", lg: "68%" }}>
        <PurchaseHistory />
      </Box>
      <Box width={{ base: "100%", lg: "30%" }}>
        <EventHistory />
      </Box>
    </Flex>
  );
};
