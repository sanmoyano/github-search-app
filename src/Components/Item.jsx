import { Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const Item = ({ ...props }) => {
    const colorMode = useColorModeValue("gray.100", "card");
    const infoColorMode = useColorModeValue("gray.300", "background");

    const configInfoText = {
        fontSize: "xs",
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
                            <Text color={"button"}>@{props.login}</Text>
                        </Stack>
                        <Stack w={"100%"}>
                            <Text>user id: {props.twitter}</Text>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Text>{props.bio}</Text>
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
                    <Text>Repos {props.repos}</Text>
                    <Text>Followers {props.followers} </Text>
                    <Text>Following {props.following} </Text>
                </Stack>

                <Stack direction={{ base: "column", md: "row" }} spacing={6} width={"100%"}>
                    <Stack spacing={4} w={"100%"}>
                        <Text {...configInfoText}>{props.location}</Text>
                        <Text {...configInfoText}>{props.email}</Text>
                    </Stack>
                    <Stack spacing={4} w={"100%"}>
                        <Text {...configInfoText}>{props.company}</Text>
                        <Text {...configInfoText}>{props.blog}</Text>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Item;
