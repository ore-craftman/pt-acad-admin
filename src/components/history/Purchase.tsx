import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import moment from "moment";
import { BsCalendar4Week } from "react-icons/bs";

export const PurchaseHistory = () => {
  const data = [
    {
      title: "Investigative Journalism For Beginners",
      date: new Date().toLocaleDateString(),
      price: "23, 000",
    },
    {
      title: "Press Freedom",
      date: new Date().toLocaleDateString(),
      price: "53, 000",
    },
    {
      title: "Social Media Journalism",
      date: new Date().toLocaleDateString(),
      price: "15, 000",
    },
    {
      title: "Investigative Journalism For Beginners",
      date: new Date().toLocaleDateString(),
      price: "23, 000",
    },
    {
      title: "Press Freedom",
      date: new Date().toLocaleDateString(),
      price: "53, 000",
    },
    {
      title: "Social Media Journalism",
      date: new Date().toLocaleDateString(),
      price: "15, 000",
    },
  ];

  return (
    <Box bg="#fff" p={{ base: 3, lg: 5, xl: 6 }} borderRadius="3xl" w="full">
      <Flex alignItems="center" justifyContent="space-between" mb={4}>
        <Text>Course Purchase History</Text>

        <Flex color="gray.500" alignItems="center" gap={1}>
          <BsCalendar4Week style={{ fontSize: "17px" }} />
          <Text>This Month</Text>
        </Flex>
      </Flex>

      <Box my={6}>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Course</Th>
                <Th>Date</Th>
                <Th isNumeric>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ title, date, price }, idx) => (
                <Tr key={idx}>
                  <Td>{title}</Td>
                  <Td>{moment(date).format("Do MMM YYYY")}</Td>
                  <Td isNumeric>{"₦" + price}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
