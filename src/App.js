import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar/Navbar';

import { ProvideAuth } from './components/AuthContext/use-auth';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
    },
    table: {
        minWidth: 650,
      },
  }));


const App = () => {
    
      

    
    return(
        <ProvideAuth>
          <>
          <Navbar />
          </>
        </ProvideAuth>
        
    );
};




export default App