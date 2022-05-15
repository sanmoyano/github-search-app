import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
    config: {
        initialColorMode: "dark",
    },
    styles: {
        global: {
            "html, body, #root": {
                heigth: "100%",
            },
        },
    },
});
