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
import {LegislativosScreen} from '../components/screen/Legislativos';
import PerfilGobernacion from '../components/screen/perfil-gobernacion';
import PerfilAlcaldia from '../components/screen/perfil-alcaldia';
import Loaded from '../components/Loaded';

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
                <div
        key={`loaded`}
        style={{
          alignItems: "center",
          backgroundColor: "#0e182a",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,

        }}
        >
        <Loaded /> 
        </div>
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
 <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/legislativos"
                        component={ LegislativosScreen }
                    />
 <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/perfil-gobernacion"
                        component={ PerfilGobernacion }
                    />

 <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/perfil-alcaldia"
                        component={ PerfilAlcaldia }
                    />
        </Menu>
                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
