import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const UserContext = createContext({});

const UserContextProvider  = ({children}) => {
    const [user, setUser] = useState(null);

    // Function to fetch user profile
    const fetchUserProfile = () => {
        axios.get('/profile').then(({data}) => {
            setUser(data);
        });
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    return (
        <UserContext.Provider value={{user, setUser, fetchUserProfile}}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };





