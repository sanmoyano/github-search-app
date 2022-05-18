import { Link, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Stack>
            <Text color={"gray.500"} fontSize={"xs"}>
                Made with{" "}
                <span aria-label="love" role="img">
                    ❤️
                </span>{" "}
                by{" "}
                {
                    <Link href="https://smportfolio.vercel.app/" target={"_blank"}>
                        {" "}
                        Santiago Moyano
                    </Link>
                }{" "}
                {"- 2022"}
            </Text>
        </Stack>
    );
};

export default Footer;
