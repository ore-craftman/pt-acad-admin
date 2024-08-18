import { Box, Flex, Text } from "@chakra-ui/react";
import { BsCalendar4Week } from "react-icons/bs";

export const EventHistory = () => {
  return (
    <Box bg="#fff" p={{ base: 3, lg: 5, xl: 6 }} borderRadius="3xl" w="full">
      <Flex alignItems="center" justifyContent="space-between">
        <Text>Events History</Text>

        <Flex color="gray.500" alignItems="center" gap={1}>
          <BsCalendar4Week style={{ fontSize: "17px" }} />
          <Text>This Month</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
