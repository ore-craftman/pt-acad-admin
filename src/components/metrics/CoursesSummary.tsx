import { Box, Flex, Image, Text } from "@chakra-ui/react";
import BookIcon from "../../assets/book.svg";
import BookmarkIcon from "../../assets/bookmark.svg";
import BookmarkYellowIcon from "../../assets/bookmark-yellow.svg";
import NoteIcon from "../../assets/note.svg";

export const CoursesSummary = () => {
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
          {/* <FaUserFriends color="#782DF3" /> */}
          <Image src={BookIcon} alt="" />

          <Text color="gray.500" mt={6}>
            Total Course Created
          </Text>
          <Flex my={1} alignItems="center" justifyContent="space-between">
            <Text color="primary.500" fontSize="lg" fontWeight={600}>
              10
            </Text>
            <Flex alignItems="center" gap={2}>
              {/* <FaUsers color="#782DF3" /> */}
              <Image src={BookIcon} alt="" w={4} />
              <Text fontSize="sm" color="gray.500">
                153 New Students
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
          {/* <PiFiles color="#FFC107" /> */}
          <Image src={NoteIcon} alt="" />

          <Text color="gray.500" mt={6}>
            Active Courses
          </Text>
          <Flex my={1} alignItems="center" justifyContent="space-between">
            <Text color="teal.500" fontSize="lg" fontWeight={600}>
              8
            </Text>
            <Flex alignItems="center" gap={2}>
              <Image src={NoteIcon} alt="" w={4} />
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
          <Image src={BookmarkIcon} alt="" />

          <Text color="gray.500" mt={6}>
            People Who Finished
          </Text>
          <Flex my={1} alignItems="center" justifyContent="space-between">
            <Text color="#1976D2" fontSize="lg" fontWeight={600}>
              125
            </Text>
            <Flex alignItems="center" gap={2}>
              <Image src={BookmarkIcon} alt="" w={4} />
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
          <Image src={BookmarkYellowIcon} alt="" />

          <Text color="gray.500" mt={6}>
            Draft
          </Text>
          <Flex my={1} alignItems="center" justifyContent="space-between">
            <Text color="gold" fontSize="lg" fontWeight={600}>
              15
            </Text>
            <Flex alignItems="center" gap={2}>
              <Image src={BookmarkYellowIcon} alt="" w={4} />
              <Text fontSize="sm" color="gray.500">
                See Drafts Below
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
