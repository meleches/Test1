import React, { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios';

const url = 'http://localhost:3000/users/login'
const urlUser = 'http://localhost:3000/Users/user'
const urlLogout = 'http://localhost:3000/Users/logout'

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  }
  // Hook for child components to get the auth object ...
  // ... and re-render when it changes.
  export const useAuth = () => {
    return useContext(authContext);
  };

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [isloggedIn,setIsloggedin] = useState(false)
    
    
    const signin = (data,callback) => {
      
      return axios.post(url,data).then( (res) => {
        setUser(res.data.username);
        setIsloggedin(true);
        console.log(res.data.username);
        callback(true);
        return res.data.username;
        } ).catch( (e) => console.log(e));
    };


    const signup = (email, password) => {
      
    };

    
    const signout = () => {
      //setUser(null);
      axios.get(urlLogout).then( (res) => {
        console.log(res)
        setIsloggedin(false)
        setUser(null);
      }
      )
    };
    
    
    useEffect(() => {
      axios.get(urlUser).then( (res) => {
        console.log(res.data)
        setUser(res.data);
        setIsloggedin(true);
      })
    }, []);

    // Return the user object and auth methods
    return {
      user,
      signin,
      signup,
      signout,
      
    };
  }