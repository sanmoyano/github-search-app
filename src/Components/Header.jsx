import { Button, Icon, Stack, Text, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = () => {
    const { toggleColorMode } = useColorMode(true);

    const colorModeIcon = useColorModeValue(BsFillMoonFill, BsFillSunFill);

    return (
        <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
        >
            <Text as={"h1"} fontWeight={"bold"}>
                devfinder
            </Text>
            <Button onClick={toggleColorMode}>
                {colorModeIcon === BsFillMoonFill ? (
                    <Text fontWeight={"normal"}>dark</Text>
                ) : (
                    <Text fontWeight={"normal"}>light</Text>
                )}
                <Icon as={colorModeIcon} marginLeft={4} />
            </Button>
        </Stack>
    );
};

export default Header;
