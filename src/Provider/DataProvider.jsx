import { useState, createContext } from "react";
import { useToast } from "@chakra-ui/react";

export const DataContext = createContext();

const { Provider } = DataContext;

const DataProvider = ({ children }) => {
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
    const [twitter, setTwitter] = useState("");

    const [searchUser, setSearchUser] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const toast = useToast();

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
        twitter_username,
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
        setTwitter(twitter_username);
    };

    const handleOnChange = (e) => {
        setSearchUser(e.target.value);
    };

    const END_POINT = "https://api.github.com/users";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${END_POINT}/${searchUser}`);
            const data = await response.json();

            if (data.message === "Not Found") {
                toast({
                    position: "top-right",
                    duration: 3000,
                    isClosable: true,
                    isVisible: true,
                    title: "User Not Found",
                    description: "Please enter a valid username",
                    status: "error",
                });
                throw Error(data.message);
            } else {
                setUserInput(e);
                setData(data);
            }
        } catch (error) {
            console.log(error); //maneja si hay un error en la api
        } finally {
            setIsLoading(false);
        }
        setSearchUser("");
    };

    const contextValues = {
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
        isLoading,
        searchUser,
        userInput,
        handleOnChange,
        handleSubmit,
    };

    return <Provider value={contextValues}>{children}</Provider>;
};

export default DataProvider;
