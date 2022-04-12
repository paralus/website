import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  List,
  ListItem,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

// const features = [
//   {
//     id: "1",
//     image: "../../images/home.png",
//     heading: "One platform to manage access to every Kubernetes cluster",
//     description:
//       "Easily generate, manage and revoke kubeconfig for different clusters and people, for single and multi cloud environments. Whatever and wherever clusters you have, configure access to them all in one place.",
//   },
//   {
//     id: "2",
//     icon: "https://rafay.co/wp-content/uploads/2021/08/Stop-Rogue-Admins-Icon.svg",
//     text: "Stop rogue Kubernetes admins with user-level audit logs",
//   },
//   {
//     id: "3",
//     icon: "https://rafay.co/wp-content/uploads/2021/08/Comply-with-Security-Icon.svg",
//     text: "Comply with internal security policies & industry regulations",
//   },
//   {
//     id: "4",
//     icon: "https://rafay.co/wp-content/uploads/2021/08/Happy-Teams-Icon.svg",
//     text: "Make your Security and DevSecOps teams happy",
//   },
// ];

export default function DetailedFeatures() {
  return (
    <>
      <Container maxW={"7xl"} py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
          <Stack spacing={4}>
            <Heading>
              Free, Open Source platform to manage access to every Kubernetes
              cluster
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Easily generate, manage and revoke kubeconfig for different
              clusters and people, for single and multi cloud environments.
              Whatever and wherever clusters you have, configure access to them
              all in one place.
            </Text>
            <List spacing={2}>
              <ListItem fontWeight={600}>
                Use OIDC to configure organization and user level settings with
                inheritance.
              </ListItem>
              <ListItem fontWeight={600}>
                Integrate SSO and RBAC to control access to resources.
              </ListItem>
              <ListItem fontWeight={600}>
                Create custom roles and permissions.
              </ListItem>
              <ListItem fontWeight={600}>
                Manage cluster level settings.
              </ListItem>
            </List>
          </Stack>
          <Stack>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src="../../images/home.png"
              objectFit={"cover"}
            />
          </Stack>
        </SimpleGrid>
      </Container>
      <Container maxW={"7xl"} py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
          <Stack>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src="../../images/project-permission.png"
              objectFit={"cover"}
            />
          </Stack>
          <Stack spacing={4}>
            <Heading>Zero-trust security by default</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              ZTKA uses zero-trust security principles to provide a way to
              access clusters via kubectl commands.
            </Text>
            <List spacing={2}>
              <ListItem fontWeight={600}>
                Dynamically revoke permissions based on user access.
              </ListItem>
              <ListItem fontWeight={600}>
                Configure time-based authentication.
              </ListItem>
              <ListItem fontWeight={600}>
                Control kubectl access via pre-configured user and organization
                roles.
              </ListItem>
              <ListItem fontWeight={600}>
                Protect your Kubernetes resources from bad actors.
              </ListItem>
            </List>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container maxW={"7xl"} py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
          <Stack spacing={4}>
            <Heading>Real-time Audit Logs</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              View all cluster access activity logs in one place, historically
              and in real-time.
            </Text>
            <List spacing={2}>
              <ListItem fontWeight={600}>
                See who accessed which Kubernetes resources when.
              </ListItem>
              <ListItem fontWeight={600}>
                View cluster resource access and activity history.
              </ListItem>
              <ListItem fontWeight={600}>
                Filter activity by name, date, cluster, namespace, and methods
                used to access the resources.
              </ListItem>
            </List>
          </Stack>
          <Stack>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src="../../images/audit-log-2.png"
              objectFit={"cover"}
            />
          </Stack>
        </SimpleGrid>
      </Container>
      <Container maxW={"7xl"} py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
          <Stack>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src="../../images/ui-5.png"
              objectFit={"cover"}
            />
          </Stack>
          <Stack spacing={4}>
            <Heading>Multiple interface options</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Whether you prefer an elaborate GUI or using your machine’s
              terminal, ZTKA ships with several interaction options. In short,
              ZTKA comes with a UI or no UI.
            </Text>
            <List spacing={2}>
              <ListItem fontWeight={600}>
                Install ZTKA in your cluster using Helm, and access it through a
                web GUI or web CLI console.
              </ListItem>
              <ListItem fontWeight={600}>Use ZTKA via the REST API.</ListItem>
              <ListItem fontWeight={600}>
                Or use `rctl` to manage kubeconfig files directly in your
                machine’s terminal.
              </ListItem>
            </List>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
