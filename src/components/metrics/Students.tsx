import { Box, Flex, Text, Tabs, TabList, Tab, Image } from "@chakra-ui/react";
import { BsCalendar4Week } from "react-icons/bs";
import DonutChart from "react-donut-chart";
import graphImg from "../../assets/graph.png";

const NewStudents = () => {
  return (
    <Box
      bg="#fff"
      p={{ base: 3, lg: 5, xl: 6 }}
      height="420px"
      borderRadius="3xl"
      w="full"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text>New Students Stats</Text>

        <Tabs variant="unstyled">
          <TabList bgColor="gray.100" borderRadius="xl" p={1}>
            <Tab
              _selected={{ color: "black", bg: "#fff" }}
              fontSize="xs"
              fontWeight={500}
              px={4}
              borderRadius="lg"
              color="gray.600"
            >
              Day
            </Tab>
            <Tab
              _selected={{ color: "black", bg: "#fff" }}
              fontSize="xs"
              fontWeight={500}
              px={4}
              borderRadius="lg"
              color="gray.600"
            >
              Week
            </Tab>
            <Tab
              _selected={{ color: "black", bg: "#fff" }}
              fontSize="xs"
              fontWeight={500}
              px={4}
              borderRadius="lg"
              color="gray.600"
            >
              Month
            </Tab>
          </TabList>
        </Tabs>
      </Flex>

      <Box>
        <Image src={graphImg} alt="" width="100%" height="100%" />
      </Box>
    </Box>
  );
};

const Enrollment = () => {
  const data = [
    { label: "All Students", value: 71 },
    { label: "Paid Students", value: 29 },
  ];

  const colors = ["#782ef3", "#FC8800"];
  return (
    <Box
      bg="#fff"
      p={{ base: 3, lg: 5, xl: 6 }}
      height="420px"
      borderRadius="3xl"
      w="full"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text>Enrolment Insight</Text>

        <Flex color="gray.500" alignItems="center" gap={1}>
          <BsCalendar4Week style={{ fontSize: "17px" }} />
          <Text>This Month</Text>
        </Flex>
      </Flex>

      <Flex alignItems="center" justifyContent="center" mt={8}>
        <DonutChart
          width={480}
          height={310}
          data={data}
          colors={colors}
          interactive={true}
          formatValues={(values, total) =>
            `${((values / total) * 100).toFixed(2)}%`
          }
          strokeColor="transparent"
        />
      </Flex>
    </Box>
  );
};

export const StudentStats = () => {
  return (
    <Flex gap={6} mt={6}>
      <Box w={{ base: "100%", lg: "48%" }}>
        <NewStudents />
      </Box>
      <Box w={{ base: "100%", lg: "49%" }}>
        <Enrollment />
      </Box>
    </Flex>
  );
};
