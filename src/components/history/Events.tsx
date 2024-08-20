import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import AddIcon from "../../assets/add.svg";
import GoogleMeetIcon from "../../assets/google-meet.svg";
import TrashIcon from "../../assets/trash.svg";
import CalendarIcon from "../../assets/calendar.svg";

export const EventHistory = () => {
  const data = [
    { title: "Journalism Mastery", isGoogleMeet: true },
    { title: "Journalism Mastery", isGoogleMeet: true },
  ];
  return (
    <Box
      bg="#fff"
      p={{ base: 3, lg: 5, xl: 6 }}
      minH={340}
      borderRadius="3xl"
      w="full"
      position="relative"
    >
      <Flex alignItems="center" justifyContent="space-between" mb={6}>
        <Text>Events History</Text>

        <Flex color="gray.500" alignItems="center" gap={1}>
          <Image src={CalendarIcon} alt="" />
          <Text>This Month</Text>
        </Flex>
      </Flex>

      <Box mt={6} mb={4}>
        <Flex direction="column" gap={4}>
          {data.map(({ title, isGoogleMeet }, idx) => (
            <Flex justify="space-between" alignItems="center" key={idx}>
              <Box>
                <Text>{title}</Text>
                {isGoogleMeet && (
                  <Flex gap={2} alignItems="center">
                    <Image src={GoogleMeetIcon} alt="" />
                    <Text fontSize="sm">Google Meet</Text>
                  </Flex>
                )}
              </Box>

              <Button
                size="sm"
                leftIcon={<Image src={TrashIcon} w={4} alt="" />}
                colorScheme="red"
                variant="outline"
                borderColor="gray.100"
                borderRadius="full"
              >
                Remove
              </Button>
            </Flex>
          ))}
        </Flex>

        <Flex
          justify="center"
          alignItems="center"
          mt={6}
          position="absolute"
          left={0}
          bottom={10}
          w="full"
        >
          <Button
            leftIcon={<Image src={AddIcon} w={6} alt="" />}
            colorScheme="gray"
            variant="outline"
            borderRadius="full"
            color="gray.600"
            fontWeight={550}
          >
            Create Event
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
