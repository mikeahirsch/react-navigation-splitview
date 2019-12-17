import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {ModuleNavigator} from './modules/test';

const AppNavigator = createStackNavigator({
  Test: ModuleNavigator,
});

export default createAppContainer(AppNavigator);
