import React from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
    const { isLoading, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            type: "",
            comment: "",
        },
        onSubmit: async (values) => {
            try {
                await submit("/api/submitForm", values);
                onOpen(
                    "success",
                    `Thanks for your submission ${values.firstName}, we will get back to you shortly!`,
                );
                formik.resetForm();
            } catch (error) {
                onOpen(
                    "error",
                    "Something went wrong, please try again later!",
                );
            }
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            type: Yup.string(),
            comment: Yup.string()
                .required("Required")
                .min(25, "Must be at least 25 characters"),
        }),
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#512DA8"
            py={16}
            spacing={8}
        >
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading as="h1" id="contactme-section">
                    Contact me
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl
                                isInvalid={
                                    (formik.touched.firstName && formik.errors.firstName) as boolean
                                }
                            >
                                <FormLabel htmlFor="firstName">Name</FormLabel>
                                <Input
                                    {...formik.getFieldProps("firstName")}
                                    id="firstName"
                                    name="firstName"
                                />
                                <FormErrorMessage>
                                    {formik.errors.firstName}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl
                                isInvalid={
                                    (formik.touched.email && formik.errors.email) as boolean
                                }
                            >
                                <FormLabel htmlFor="email">
                                    Email Address
                                </FormLabel>
                                <Input
                                    {...formik.getFieldProps("email")}
                                    id="email"
                                    name="email"
                                    type="email"
                                />
                                <FormErrorMessage>
                                    {formik.errors.email}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="type">
                                    Type of enquiry
                                </FormLabel>
                                <Select
                                    {...formik.getFieldProps("type")}
                                    id="type"
                                    name="type"
                                >
                                    <option value="hireMe">
                                        Freelance project proposal
                                    </option>
                                    <option value="openSource">
                                        Open source consultancy session
                                    </option>
                                    <option value="other">Other</option>
                                </Select>
                            </FormControl>
                            <FormControl
                                isInvalid={
                                    (formik.touched.comment &&
                                    formik.errors.comment) as boolean
                                }
                            >
                                <FormLabel htmlFor="comment">
                                    Your message
                                </FormLabel>
                                <Textarea
                                    {...formik.getFieldProps("comment")}
                                    id="comment"
                                    name="comment"
                                    height={250}
                                />
                                <FormErrorMessage>
                                    {formik.errors.comment}
                                </FormErrorMessage>
                            </FormControl>
                            <Button
                                type="submit"
                                colorScheme="purple"
                                width="full"
                                isLoading={isLoading}
                            >
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default ContactMeSection;
