import { Box, Flex, Text } from "@chakra-ui/react";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { PiFiles } from "react-icons/pi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { BsFillCalendarDateFill } from "react-icons/bs";

export const MetricSummary = () => {
  return (
    <Box bg="#fff" p={{ base: 3, lg: 5, xl: 6 }} borderRadius="3xl">
      <Flex gap={4} flexWrap="wrap" justifyContent={{ xl: "space-between" }}>
        <Box
          borderColor="gray.100"
          borderWidth={1}
          px={4}
          py={6}
          borderRadius="xl"
          w={{ base: "100%", md: "48%", xl: "23%" }}
        >
          <FaUserFriends color="#782DF3" />

          <Text color="gray.500" mt={6}>
            Total Students
          </Text>
          <Flex my={1} alignItems="center" justifyContent="space-between">
            <Text color="primary.500" fontSize="lg" fontWeight={600}>
              24, 120
            </Text>
            <Flex alignItems="center" gap={2}>
              <FaUsers color="#782DF3" />
              <Text fontSize="sm" color="gray.500">
                30 New Students
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Box
          borderColor="gray.100"
          borderWidth={1}
          px={4}
          py={6}
          borderRadius="xl"
          w={{ base: "100%", md: "48%", xl: "23%" }}
        >
          <PiFiles color="#FFC107" />

          <Text color="gray.500" mt={6}>
            Total Courses Created
          </Text>
          <Flex my={1} alignItems="center" justifyContent="space-between">
            <Text color="gold" fontSize="lg" fontWeight={600}>
              125
            </Text>
            <Flex alignItems="center" gap={2}>
              <PiFiles color="#FFC107" />
              <Text fontSize="sm" color="gray.500">
                3 New Courses
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Box
          borderColor="gray.100"
          borderWidth={1}
          px={4}
          py={6}
          borderRadius="xl"
          w={{ base: "100%", md: "48%", xl: "23%" }}
        >
          <RiShoppingCart2Fill color="#00A78E" />

          <Text color="gray.500" mt={6}>
            Total Courses Purchased
          </Text>
          <Flex my={1} alignItems="center" justifyContent="space-between">
            <Text color="#00A78E" fontSize="lg" fontWeight={600}>
              125
            </Text>
            <Flex alignItems="center" gap={2}>
              <RiShoppingCart2Fill color="#00A78E" />
              <Text fontSize="sm" color="gray.500">
                3 New Courses Purchased
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Box
          borderColor="gray.100"
          borderWidth={1}
          px={4}
          py={6}
          borderRadius="xl"
          w={{ base: "100%", md: "48%", xl: "23%" }}
        >
          <BsFillCalendarDateFill color="#FC8800" />

          <Text color="gray.500" mt={6}>
            Total Events Created
          </Text>
          <Flex my={1} alignItems="center" justifyContent="space-between">
            <Text color="#FC8800" fontSize="lg" fontWeight={600}>
              105
            </Text>
            <Flex alignItems="center" gap={2}>
              <BsFillCalendarDateFill color="#FC8800" />
              <Text fontSize="sm" color="gray.500">
                3 New Events Created
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
