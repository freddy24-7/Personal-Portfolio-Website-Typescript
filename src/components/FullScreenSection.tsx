import React, { ReactNode } from "react";
import { VStack, StackProps } from "@chakra-ui/react";

interface FullScreenSectionProps extends StackProps {
    children: ReactNode;
    isDarkBackground: boolean;
}

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection: React.FC<FullScreenSectionProps> = ({
    children,
    isDarkBackground,
    ...boxProps
}) => {
    return (
        <VStack
            backgroundColor={boxProps.backgroundColor}
            color={isDarkBackground ? "white" : "black"}
            p={8} // Apply padding here
        >
            <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
                {children}
            </VStack>
        </VStack>
    );
};

export default FullScreenSection;
