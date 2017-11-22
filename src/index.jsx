/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import firebase from 'firebase';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import './styles/styles.scss';
import firebaseConfig from '../config/firebase-config';


const root = document.getElementById('root');
firebase.initializeApp(firebaseConfig);

render(
  <AppContainer>
    <App />
  </AppContainer>,
  root,
);

if (module.hot) module.hot.accept(App, () => render(App));
