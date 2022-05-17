import { Box, Icon, Image, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaLaptopCode } from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

const Item = ({ ...props }) => {
    const colorMode = useColorModeValue("gray.100", "card");
    const infoColorMode = useColorModeValue("gray.300", "background");

    const configInfoText = {
        fontSize: "xs",
    };

    const configStadisticsText = {
        fontSize: "lg",
        fontWeight: "bold",
    };

    return (
        <Stack
            bgColor={colorMode}
            borderRadius={"2xl"}
            direction={{ base: "column", sm: "row" }}
            height={"auto"}
            justifyContent={"space-between"}
            p={10}
            spacing={10}
            width={"100%"}
        >
            <Stack>
                <Image borderRadius={"full"} src={props.avatar} w={"150px"} />
            </Stack>

            <Stack spacing={6} w={"100%"}>
                <Stack direction={"column"} justifyContent={"space-between"} spacing={6}>
                    <Stack direction={"row"} spacing={6}>
                        <Stack w={"100%"}>
                            <Text as={"h1"} fontSize={"lg"} fontWeight={"bold"}>
                                {props.name}
                            </Text>
                            <Link
                                isExternal
                                as="a"
                                color={"button"}
                                href={`https://github.com//${props.login}`}
                                target="_blank"
                            >
                                <Text>@{props.login}</Text>
                            </Link>
                        </Stack>
                        <Stack w={"100%"}>
                            <Link
                                isExternal
                                as="a"
                                href={`https://twitter.com/${props.twitter}`}
                                target="_blank"
                            >
                                <Stack alignItems={"center"} direction={"row"} spacing={2}>
                                    <Icon as={FaTwitter} />
                                    <Text>{props.twitter}</Text>
                                </Stack>
                            </Link>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Text fontSize={"md"}>{props.bio}</Text>
                    </Stack>
                </Stack>
                <Stack
                    bgColor={infoColorMode}
                    borderRadius={"2xl"}
                    direction={{ base: "column", md: "row" }}
                    fontSize={"xs"}
                    justifyContent={"flex-start"}
                    p={6}
                    spacing={10}
                    w={"100%"}
                >
                    <Box>
                        Repos <Text {...configStadisticsText}> {props.repos} </Text>
                    </Box>
                    <Box>
                        Followers <Text {...configStadisticsText}> {props.followers} </Text>
                    </Box>
                    <Box>
                        Following <Text {...configStadisticsText}> {props.following} </Text>
                    </Box>
                </Stack>

                <Stack direction={{ base: "column", md: "row" }} spacing={6} width={"100%"}>
                    <Stack spacing={4} w={"100%"}>
                        <Stack
                            alignItems={"center"}
                            direction={"row"}
                            spacing={2}
                            {...configInfoText}
                        >
                            <Icon as={MdLocationOn} />
                            <Text>{props.location}</Text>
                        </Stack>
                        <Text {...configInfoText}>{props.email}</Text>
                    </Stack>
                    <Stack spacing={4} w={"100%"}>
                        <Stack
                            alignItems={"center"}
                            direction={"row"}
                            spacing={2}
                            {...configInfoText}
                        >
                            <Icon as={FaLaptopCode} />
                            <Text>{props.company}</Text>
                        </Stack>
                        <Link
                            isExternal
                            as="a"
                            href={`${props.blog}`}
                            target="_blank"
                            {...configInfoText}
                        >
                            <Stack
                                alignItems={"center"}
                                direction={"row"}
                                spacing={2}
                                {...configInfoText}
                            >
                                <Icon as={BiLink} />
                                <Text>{props.blog}</Text>
                            </Stack>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Item;
