import { Button, FormControl, Icon, Input, Stack, useColorModeValue } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { useState, useEffect } from "react";

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

    const [avatar, setAvatar] = useState("");
    const [userName, setUserName] = useState("");
    const [login, setLogin] = useState("");
    const [bio, setBio] = useState("");
    const [repos, setRepos] = useState(0);
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [blog, setBlog] = useState("");
    const [id, setId] = useState(0);

    const [searchUser, setSearchUser] = useState([]);

    const setData = ({
        avatar_url,
        login,
        name,
        id,
        bio,
        public_repos,
        followers,
        following,
        location,
        email,
        company,
        blog,
    }) => {
        setAvatar(avatar_url);
        setUserName(name);
        setLogin(login);
        setBio(bio);
        setRepos(public_repos);
        setFollowers(followers);
        setFollowing(following);
        setLocation(location);
        setEmail(email);
        setCompany(company);
        setBlog(blog);
        setId(id);
    };

    const handleOnChange = (e) => {
        setSearchUser(e.target.value);
    };

    const END_POINT = "https://api.github.com/users";

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${END_POINT}/${searchUser}`)
            .then((response) => response.json())
            .then((data) => setData(data));

        setSearchUser("");
    };

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
            />
        </>
    );
};

export default Search;
