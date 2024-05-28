
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import TaskList from './src/views/TaskList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TaskList);
