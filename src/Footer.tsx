import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  Image,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box bg="brand.dark" color="white">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text display="inline" mr={2} fontSize={"sm"}>
                made with 💖 by
              </Text>
              <Image
                src={
                  "https://rafay.co/wp-content/themes/sightbox/static/images/logo.svg?rafay"
                }
                height={10}
                display="inline-block"
                pt={6}
              />
            </Box>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"GitHub"}
                href={"https://github.com/rafaysystems"}
              >
                <FontAwesomeIcon icon={faGithub} />
              </SocialButton>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/rafaysystemsinc"}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Project</ListHeader>
            <Link href={"#"}>GitHub</Link>
            <Link href={"#"}>Documentation</Link>
            <Link href={"#"}>About CNCF</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Community</ListHeader>
            <Link href={"#"}>Join our Slack</Link>
            <Link href={"#"}>Code of Conduct</Link>
            <Link href={"#"}>Blog</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg="white"
                border={0}
                _focus={{
                  bg: "brand.medium",
                }}
              />
              <IconButton
                bg="brand.light"
                color="white"
                _hover={{
                  bg: "gray.600",
                }}
                aria-label="Subscribe"
                icon={<EmailIcon />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
        <Text fontSize={"sm"} textAlign={"center"} pt={15}>
          Copyright © {new Date().getFullYear()} Cloud Base Project Authors. All
          rights reserved. The Linux Foundation has registered trademarks and{" "}
          <a href="https://www.linuxfoundation.org/trademark-usage">
            uses trademarks
          </a>
          .
        </Text>
      </Container>
    </Box>
  );
}
