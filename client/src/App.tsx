import React, { useState, useContext } from 'react';
import CreateRecipeForm from './components/Profile/CreateRecipeForm';
import HomePage from './components/Home Page/HomePage';
import PulloutMenu from './components/Home Page/PulloutMenu';
import RSSFeed from './components/rss/RSSFeedContainer';
import Search from './components/Search';
import ProfilePage from './components/Profile/ProfilePage';
import VideoModal from './components/VideoModal';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';


const App: React.FC = (): JSX.Element => {
  
  const { getUser } = useContext(UserContext)

  return (
    <div>
      {getUser()}
      <Link to={'/'}>
        <img src="https://upload.wikimedia.org/wikipedia/en/5/52/Star_Fox_SNES.jpg" width='200' />
      </Link>
      <PulloutMenu />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path="/recipe_finder">
          <Search />
        </Route>
        <Route path='/rss'>
          <RSSFeed />
        </Route>
        <Route path='/profile'>
          <ProfilePage /> 
        </Route>
      </Switch>

    </div>
  );
};
export default App;
