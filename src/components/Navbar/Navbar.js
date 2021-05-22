import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useHistory,
    useLocation
  } from "react-router-dom";

import Home from '../Home/Home';
import LoginPage from '../Auth/Login';
import BookDetail from '../BookDetail/BookDetail';
import AddBook from '../Form/Form';
import BookList from '../BookList/BookList';
import { useAuth } from '../AuthContext/use-auth';

const PrivateRoute = ( {children , ...rest} ) => {
  const auth = useAuth();

  return(
    <Route { ...rest} render={() => {
      return auth.user === null ? <Redirect to='/login'/> : children

    }}/>
  );
} 

const Navbar = (props) => {
    const auth = useAuth()
    return(
        
        
          
            
            <Router>
            <Switch>
            <Route path='/bookDetail'>
                <BookDetail />
            </Route>
            <PrivateRoute path='/addBook'>
                <AddBook />
            </PrivateRoute>
            <Route path='/bookList'>
                <BookList />
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>
            
            <Route path="/">
              <Home />
            </Route>
            </Switch>
            
            </Router>
            
            
            
          
            
    );
}

export default Navbar;