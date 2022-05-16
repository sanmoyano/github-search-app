import {
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Stack,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import React from "react";

const Main = () => {
    const colorMode = useColorModeValue("gray.100", "card");
    const infoColorMode = useColorModeValue("gray.300", "background");

    return (
        <Stack
            bgColor={colorMode}
            borderRadius={"2xl"}
            direction={"row"}
            height={"auto"}
            justifyContent={"space-between"}
            p={10}
            spacing={10}
            width={"100%"}
        >
            <Stack>
                <SkeletonCircle size={24} />
            </Stack>

            <Stack spacing={6} w={"100%"}>
                <Stack direction={"row"} justifyContent={"space-between"} spacing={6}>
                    <Stack direction={"column"} spacing={6} w={"150px"}>
                        <Skeleton h={"16px"} />
                        <Skeleton h={"16px"} />
                        <Skeleton h={"16px"} />
                    </Stack>
                    <Stack w={"100px"}>
                        <Skeleton h={"16px"} />
                    </Stack>
                </Stack>
                <Stack
                    bgColor={infoColorMode}
                    borderRadius={"2xl"}
                    direction={"row"}
                    fontSize={"xs"}
                    justifyContent={"flex-start"}
                    p={6}
                    spacing={10}
                    w={"100%"}
                >
                    <Text>Repos</Text>
                    <Text>Followers</Text>
                    <Text>Following</Text>
                </Stack>

                <Stack direction={"row"} spacing={6} width={"100%"}>
                    <Stack spacing={4} w={"50%"}>
                        <Skeleton h={"16px"} />
                        <Skeleton h={"16px"} />
                    </Stack>
                    <Stack spacing={4} w={"50%"}>
                        <Skeleton h={"16px"} />
                        <Skeleton h={"16px"} />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Main;
