import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CodePush from 'react-native-code-push';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));

const CodePushApp = CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.ON_NEXT_RESUME,
  minimumBackgroundDuration: 30,
  rollbackRetryOptions: { maxRetryAttempts: 10 }
})(() => {
  return <App />;
});

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(CodePushApp));