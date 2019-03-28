import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

const whatsapp = props => (
    <App />
);
AppRegistry.registerComponent(appName, () => whatsapp);
