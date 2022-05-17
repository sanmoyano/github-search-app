import { Stack } from "@chakra-ui/react";

import Header from "../Components/Header";
import Search from "../Components/Search";
import DataProvider from "../Provider/DataProvider";

const Layout = () => {
    return (
        <DataProvider>
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
            </Stack>
        </DataProvider>
    );
};

export default Layout;
