import { Stack } from "@chakra-ui/react";

import Main from "../Components/Main";
import Header from "../Components/Header";
import Search from "../Components/Search";

const Layout = () => {
    return (
        <Stack
            alignContent={"center"}
            alignItems={"center"}
            height={"100vh"}
            justifyContent={"center"}
            left={"50%"}
            margin={"auto"}
            maxW={"600px"}
            p={6}
            spacing={10}
        >
            <Header />
            <Search />
            <Main />
        </Stack>
    );
};

export default Layout;
