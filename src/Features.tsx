import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

const features = [
  {
    id: "1",
    icon: "https://rafay.co/wp-content/uploads/2021/08/Centralized-Kubecti-Icon.svg",
    text: "Centralize kubectl access to your entire fleet with automated RBAC",
  },
  {
    id: "2",
    icon: "https://rafay.co/wp-content/uploads/2021/08/Stop-Rogue-Admins-Icon.svg",
    text: "Stop rogue Kubernetes admins with user-level audit logs",
  },
  {
    id: "3",
    icon: "https://rafay.co/wp-content/uploads/2021/08/Comply-with-Security-Icon.svg",
    text: "Comply with internal security policies & industry regulations",
  },
  {
    id: "4",
    icon: "https://rafay.co/wp-content/uploads/2021/08/Happy-Teams-Icon.svg",
    text: "Make your Security and DevSecOps teams happy",
  },
];

export default function GridListWithHeading() {
  return (
    <Box p={20} id="features">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Secure Cluster Access from Anywhere</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Govern the use of kubectl for each user account, without the need to
          manage RBAC and RBAC policies.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <Stack key={feature.id} align={"center"}>
              <Image src={feature.icon} height={12} />
              <Text color={"gray.600"} align={"center"}>
                {feature.text}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
