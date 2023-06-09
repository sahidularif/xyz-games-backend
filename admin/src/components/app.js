import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter, Routes } from "react-router-dom";

// components
import HomePage from './frontend/index';
import Dashboard from './frontend/user/dashboard';

 import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';

// import SplashForm from './splash/splash_form';
 import ProfileContainer from './profile/profile_container';


// import './reset.css'
// import './splash/splash.css'
// import './nav/navbar.css'
// import './session/login_form.css'

// import '../components/games/game_index_item.css'
// import './bet_modal/bet_modal.css'
 import './profile/profile.css'
// import './games/game_index_item.css'
// import './games/show_game.css'
// import './comments/comments.css'
 import './toast/toast.css'
 import './main/main.css'
// import './scroll_bar/scroll_bar.css'
// import './games/games_list.css'

import { fetchUser } from '../util/session_api_util';
import test from './main/test';
import Admin_fr from './frontend/admin_fr';
import AgentBalList from './agent_bl_tr/list.js';
import AgentBalTransfer from './agent_bl_tr/transfer.js';



const App = () => (
  <div>

    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/admin" component={HomePage } />
        <ProtectedRoute exact path="/agent-bal-list" component={AgentBalList } />
        <ProtectedRoute exact path="/agent-bal-tr" component={AgentBalTransfer } />
        <Route path="/" component={Admin_fr} />

        {/* <ProtectedRoute exact path="/admin" component={MainPageContainer } /> */}
        
    </Switch>

    

  </div>
);

export default App;