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

    return (
        <Stack
            bgColor={colorMode}
            borderRadius={"2xl"}
            direction="row"
            justifyContent={"space-between"}
            p={12}
            spacing={6}
            width={"100%"}
        >
            <Stack>
                <SkeletonCircle size={24} />
            </Stack>
            <Stack direction={"column"} spacing={6} w={"150px"}>
                <Skeleton h={"16px"} />
                <Skeleton h={"16px"} />
                <Skeleton h={"16px"} />
            </Stack>
            <Stack w={"100px"}>
                <Skeleton h={"16px"} />
            </Stack>
        </Stack>
    );
};

export default Main;
