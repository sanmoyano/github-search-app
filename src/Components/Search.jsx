import { Button, FormControl, Icon, Input, Stack, useColorModeValue } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
    const colorMode = useColorModeValue("gray.100", "card");
    const iconColorMode = useColorModeValue("button", "user");

    const buttonConfig = {
        bgColor: "button",
        borderRadius: "lg",
        color: "text",
        paddingX: "8",
        size: "md",
        variant: "solid",
    };

    return (
        <FormControl>
            <Stack
                alignItems={"center"}
                bgColor={colorMode}
                borderRadius={"2xl"}
                direction={"row"}
                justifyContent={"center"}
                p={3}
                width={"100%"}
            >
                <Icon as={BiSearch} color={iconColorMode} h={6} w={6} />
                <Input
                    fontSize={{ base: "sm", sm: "md" }}
                    placeholder={"Search GitHub username..."}
                    variant={"unstyled"}
                />
                <Button
                    _hover={{ bgColor: "hover" }}
                    display={{ base: "none", sm: "flex" }}
                    {...buttonConfig}
                >
                    Search
                </Button>
            </Stack>
            <Button
                _hover={{ bgColor: "hover" }}
                display={{ base: "flex", sm: "none" }}
                marginTop={6}
                {...buttonConfig}
            >
                Search
            </Button>
        </FormControl>
    );
};

export default Search;
