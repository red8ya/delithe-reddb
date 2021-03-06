import React from 'react';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import { useRoute } from 'react-router5';
import { router } from '../routes';
import Home from './pages/Home';
import About from './pages/About';
import SkillSimulator from './pages/SkillSimulator';
import { getQueryStringValues } from '../query';
import './app.scss';

const App = () => {
  const { route } = useRoute();

  if (!router) {
    return null;
  }

  if (route.name === 'home') {
    return <Home initialQuery={getQueryStringValues()} />;
  }

  if (route.name === 'skills') {
    return <SkillSimulator initialQuery={getQueryStringValues()} />;
  }

  if (route.name === 'about') {
    return <About />;
  }
};

export default App;
