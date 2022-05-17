import { Icon, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ItemInfo = ({ icono, data, link }) => {
    const configAvaliableText = {
        fontSize: "xs",
        color: "gray.500",
    };

    const configInfoText = {
        fontSize: "xs",
    };

    return (
        <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Icon as={icono} />
            {data || null || ("" && " ") ? (
                <Link as="a" href={link} target={"_blank"}>
                    <Text {...configInfoText}>{data}</Text>
                </Link>
            ) : (
                <Text {...configAvaliableText}>Not Available</Text>
            )}
        </Stack>
    );
};

export default ItemInfo;
