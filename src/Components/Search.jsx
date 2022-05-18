import {
    Button,
    FormControl,
    Icon,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Spinner,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { useContext } from "react";

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
        userInput,
        isLoading,
        searchUser,
        handleOnChange,
        handleSubmit,
    } = useContext(DataContext);

    return (
        <>
            <Stack w={"100%"}>
                <FormControl as={"form"} onSubmit={handleSubmit}>
                    <Stack
                        alignItems={"center"}
                        bgColor={colorMode}
                        borderRadius={"2xl"}
                        direction={"row"}
                        justifyContent={"center"}
                        p={3}
                        spacing={4}
                    >
                        <Icon as={BiSearch} color={iconColorMode} h={6} w={6} />
                        <Input
                            as={"input"}
                            fontSize={{ base: "sm", sm: "md" }}
                            p={2}
                            placeholder={"Search GitHub username..."}
                            value={searchUser}
                            variant={"unstyled"}
                            onChange={handleOnChange}
                        />
                        <Button
                            _hover={{ bgColor: "hover" }}
                            display={{ base: "none", sm: "flex" }}
                            onClick={handleSubmit}
                            {...buttonConfig}
                        >
                            Search
                        </Button>
                    </Stack>
                    <Button
                        _hover={{ bgColor: "hover" }}
                        display={{ base: "flex", sm: "none" }}
                        marginTop={4}
                        onClick={handleSubmit}
                        {...buttonConfig}
                    >
                        Search
                    </Button>
                </FormControl>
            </Stack>
            {userInput === "" ? (
                <Text fontWeight={"semibold"}> Find a user account </Text>
            ) : isLoading ? (
                <Spinner
                    color="blue.500"
                    emptyColor="gray.200"
                    size="xl"
                    speed="0.65s"
                    thickness="4px"
                />
            ) : (
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
            )}
        </>
    );
};

export default Search;
