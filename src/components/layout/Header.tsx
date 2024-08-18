import { Box, Flex, Button, Heading, Text, Avatar } from "@chakra-ui/react";
import moment from "moment";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const InfoCard = () => {
  return (
    <Box>
      <Flex justifyContent="space-between">
        <Flex gap={2} fontSize="lg">
          <Flex
            alignItems="center"
            justifyContent="center"
            borderRadius="full"
            w={8}
            h={8}
            bgColor="gray.100"
          >
            <IoIosNotificationsOutline fontSize="16px" />
          </Flex>
        </Flex>

        <Flex gap={1}>
          <Box mx={2}>
            <Heading
              fontSize={{ base: "11px", xl: "13px" }}
              fontWeight={400}
              m={0}
            >
              Dan Abrahmov
            </Heading>
            <Text color="gray.500" fontSize={{ base: "8px", xl: "10px" }} m={0}>
              ADMIN
            </Text>
          </Box>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            size="sm"
          />
          <Button p={0} variant="ghost" color="gray.500">
            <IoChevronDownSharp />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export const Header = () => {
  const { pathname } = useLocation();
  const routeBase = pathname.split("/")[1];

  return (
    <Flex
      justifyContent="space-between"
      bg="#fff"
      p={{ base: 3, lg: 4, xl: 5 }}
      borderRadius="3xl"
      mb={{ base: 4, lg: 6 }}
    >
      <Box flexGrow={8}>
        <Heading fontSize={{ base: "lg", md: "xl" }} fontWeight={400}>
          {routeBase.toLowerCase() === "dashboard"
            ? "Admin Overview"
            : `Our ${
                routeBase.charAt(0).toUpperCase() +
                routeBase.slice(1).toLowerCase()
              }`}
        </Heading>

        <Text color="gray.500" fontSize="sm">
          {moment(new Date().toLocaleDateString()).format("dddd Do MMM YYYY")}
        </Text>
      </Box>

      <Box flexGrow={1}>
        <InfoCard />
      </Box>
    </Flex>
  );
};
