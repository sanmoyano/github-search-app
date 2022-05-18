import { Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <Stack color={"gray.500"} direction={"row"} spacing={4}>
            <Text fontSize={"xs"}>
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
            <Stack direction={"row"} spacing={2}>
                <Link href="https://github.com/sanmoyano" target={"_blank"}>
                    <Icon as={FaGithub} />
                </Link>
                <Link href="https://www.linkedin.com/in/santiago-moyano/" target={"_blank"}>
                    <Icon as={FaLinkedinIn} />
                </Link>
            </Stack>
        </Stack>
    );
};

export default Footer;
