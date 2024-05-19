import { Container, Text, VStack, HStack, Box, Link, IconButton, List, ListItem, ListIcon, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaPython, FaEnvelope, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">
          Ram Charan Reddy
        </Heading>
        <Text fontSize="lg">Python Developer</Text>

        <HStack spacing={4}>
          <Link href="mailto:mr.ramcharanreddy@gmail.com" isExternal>
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
          </Link>
          <Link href="tel:+916385655711" isExternal>
            <IconButton aria-label="Phone" icon={<FaPhone />} size="lg" />
          </Link>
          <Link href="https://github.com/MrRamcharanreddy" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://www.linkedin.com/in/ramcharan15" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
        </HStack>

        <Box>
          <Heading as="h2" size="md" mt={4}>
            Skills
          </Heading>
          <List spacing={2} mt={2}>
            <ListItem>
              <ListIcon as={FaPython} color="green.500" />
              Python
            </ListItem>
            <ListItem>
              <ListIcon as={FaPython} color="green.500" />
              Django
            </ListItem>
            <ListItem>
              <ListIcon as={FaPython} color="green.500" />
              Flask
            </ListItem>
            <ListItem>
              <ListIcon as={FaPython} color="green.500" />
              Pandas
            </ListItem>
            <ListItem>
              <ListIcon as={FaPython} color="green.500" />
              NumPy
            </ListItem>
            <ListItem>
              <ListIcon as={FaPython} color="green.500" />
              Machine Learning
            </ListItem>
            <ListItem>
              <ListIcon as={FaPython} color="green.500" />
              Data Analysis
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="md" mt={4}>
            Projects
          </Heading>
          <List spacing={2} mt={2}>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Project 1:
              </Text>{" "}
              Web Scraping Tool using BeautifulSoup and Selenium
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Project 2:
              </Text>{" "}
              Machine Learning Model for Predicting Stock Prices
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Project 3:
              </Text>{" "}
              Django-based Web Application for Task Management
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Project 4:
              </Text>{" "}
              Data Analysis and Visualization with Pandas and Matplotlib
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
