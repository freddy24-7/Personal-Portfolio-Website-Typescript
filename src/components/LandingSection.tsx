import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting: string = "Hello, I am Pete!";
const bio1: string = "A frontend developer";
const bio2: string = "specialized in React";

const avatarUrl: string = "https://i.pravatar.cc/150?img=7";

const LandingSection: React.FC = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground={true}
        backgroundColor="#2A4365"
    >
        <VStack spacing={4} alignItems="center">
            <Avatar size="xl" src={avatarUrl} />
            <Heading as="h1" size="xl" color="white">
                {greeting}
            </Heading>
            <Heading as="h2" size="lg" color="white">
                {bio1}
            </Heading>
            <Heading as="h2" size="lg" color="white">
                {bio2}
            </Heading>
        </VStack>
    </FullScreenSection>
);

export default LandingSection;
