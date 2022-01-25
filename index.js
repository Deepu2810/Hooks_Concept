/**
 * @format
 */

import React, {useState, useEffect} from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {RootSiblingParent} from 'react-native-root-siblings';
import Root from '@root/root';
import {Provider} from 'react-redux';
import configurationStore from '@redux/store';
const store = configurationStore();
const HooksConcept = props => (
  <RootSiblingParent>
    <Provider store={store}>
      <Root />
    </Provider>
  </RootSiblingParent>
);
AppRegistry.registerComponent(appName, () => HooksConcept);
