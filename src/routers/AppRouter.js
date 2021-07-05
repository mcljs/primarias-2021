import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import Menu from "../components/ui/Menu";
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';
import useBreakpoint from '../hooks/useBreakpoint'
import {GobernacionScreen} from '../components/screen/Gobernacion';
import {AlcaldiaScreen} from '../components/screen/Alcaldia';
import {ConcejalesScreen} from '../components/screen/Concejales';
export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const [isClosed, setClosed] = React.useState(true);

  const isStatic = useBreakpoint("sm");

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async(user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
                dispatch( startLoadingNotes( user.uid ) );

            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <h1>Cargando...</h1>
        )
    }

    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />
       <Menu isStatic={isStatic} isClosed={isClosed} setClosed={setClosed}>
                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ JournalScreen }
                    />
                      <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/gobernacion"
                        component={ GobernacionScreen }
                    />
  <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/alcaldia"
                        component={ AlcaldiaScreen }
                    />
 <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/concejales"
                        component={ ConcejalesScreen }
                    />

        </Menu>
                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
