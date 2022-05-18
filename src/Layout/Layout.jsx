import { Stack } from "@chakra-ui/react";

import DataProvider from "../Provider/DataProvider";
import Header from "../Components/Header";
import Search from "../Components/Search";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <DataProvider>
            <Stack
                alignContent={"center"}
                alignItems={"center"}
                height={{ base: "100%", md: "100vh" }}
                justifyContent={"center"}
                left={"50%"}
                margin={"auto"}
                maxW={"600px"}
                p={6}
                spacing={10}
            >
                <Header />
                <Search />
                <Footer />
            </Stack>
        </DataProvider>
    );
};

export default Layout;
