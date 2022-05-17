import { Button, FormControl, Icon, Input, Stack, useColorModeValue } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { useState, useContext } from "react";

import { DataContext } from "../Provider/DataProvider";
import Item from "../Components/Item";

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
    const {
        avatar,
        userName,
        login,
        bio,
        repos,
        followers,
        following,
        location,
        email,
        company,
        blog,
        id,
        twitter,
        searchUser,
        handleOnChange,
        handleSubmit,
    } = useContext(DataContext);

    return (
        <>
            <FormControl as={"form"} onSubmit={handleSubmit}>
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
                        as={"input"}
                        fontSize={{ base: "sm", sm: "md" }}
                        placeholder={"Search GitHub username..."}
                        value={searchUser}
                        variant={"unstyled"}
                        onChange={handleOnChange}
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
            <Item
                avatar={avatar}
                bio={bio}
                blog={blog}
                company={company}
                email={email}
                followers={followers}
                following={following}
                id={id}
                location={location}
                login={login}
                name={userName}
                repos={repos}
                twitter={twitter}
            />
        </>
    );
};

export default Search;
