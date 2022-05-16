import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
    config: {
        initialColorMode: "dark",
    },

    colors: {
        background: "#141C2F",
        card: "#1F2A48",
        button: "#017AFE",
        user: "#1F4E8A",
        text: "#E7E7EB",
        hover: "#016DFE",
    },

    fonts: {
        body: "JetBrains Mono, monospace",
    },

    fontSize: {
        xs: "0.75rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
    },

    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },

    components: {
        Input: {
            baseStyle: {
                variant: "unstyled",
            },
        },
    },

    styles: {
        global: {
            "html, body, #root": {
                heigth: "100%",
            },
        },
    },
});
