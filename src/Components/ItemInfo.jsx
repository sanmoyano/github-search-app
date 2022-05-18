import { Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ItemInfo = ({ icono, data }) => {
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
                <Text as={"p"} {...configInfoText}>
                    {data}
                </Text>
            ) : (
                <Text as={"p"} {...configAvaliableText}>
                    Not Available
                </Text>
            )}
        </Stack>
    );
};

export default ItemInfo;
