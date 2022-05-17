import { Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const Item = ({ ...props }) => {
    const colorMode = useColorModeValue("gray.100", "card");
    const infoColorMode = useColorModeValue("gray.300", "background");

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
                <Image borderRadius={"full"} src={props.avatar} />
            </Stack>

            <Stack spacing={6} w={"100%"}>
                <Stack direction={"column"} justifyContent={"space-between"} spacing={6}>
                    <Stack direction={"row"} spacing={6}>
                        <Stack w={"100%"}>
                            <Text>{props.name}</Text>
                            <Text>@{props.login}</Text>
                        </Stack>
                        <Stack w={"100%"}>
                            <Text>user id: {props.id}</Text>
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
                        <Text>{props.location}</Text>
                        <Text>{props.email}</Text>
                    </Stack>
                    <Stack spacing={4} w={"100%"}>
                        <Text>{props.company}</Text>
                        <Text>{props.blog}</Text>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Item;
