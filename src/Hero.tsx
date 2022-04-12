import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box bg="brand.dark" color="white">
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Zero-Trust Access <br />
            <Text as={"span"} color="brand.light">
              for Kubernetes
            </Text>
          </Heading>
          <Image
            src={
              "https://rafay.co/wp-content/uploads/2021/05/Zero-Trust-Kubectl-Access.png"
            }
          />
          <Text color={"gray.500"}>
            The Zero-Trust Access Service enables controlled, audited access for
            developers, SREs and automation systems to your Kubernetes
            infrastructure, with just-in-time service account creation and
            user-level credentials management integrated with your enterprise’s
            RBAC/SSO solution.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Link href="https://docs-demo-rust.vercel.app" isExternal>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"brand.light"}
                _hover={{
                  bg: "brand.medium",
                }}
              >
                Get Started
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
