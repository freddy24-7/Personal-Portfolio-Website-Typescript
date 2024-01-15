import React from "react";
import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            backgroundColor="white"
        >
            <Image src={imageSrc} alt={title} />
            <VStack spacing={2} p={4}>
                <Heading as="h3" size="md">
                    {title}
                </Heading>
                <Text color="gray.600">{description}</Text>
            </VStack>
            <HStack
                p={4}
                borderTopWidth="1px"
                borderColor="gray.200"
                justifyContent="space-between"
            >
                <Text color="green.500">
                    <FontAwesomeIcon icon={faArrowRight} size="1x" /> Learn More
                </Text>
                {/* Add a link or button for "Learn More" */}
            </HStack>
        </Box>
    );
};

export default Card;
