/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
AppRegistry.registerComponent(appName, () => App);
