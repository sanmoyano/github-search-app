import { useEffect, useState } from "react";

import Search from "../Components/Search";

const DataProvider = () => {
    const [users, setUsers] = useState([]);

    // const END_POINT = "https://api.github.com/users";
    const END_POINT = "https://fakestoreapi.com/users";

    useEffect(() => {
        fetch(END_POINT)
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return <Search users={users} />;
};

export default DataProvider;
