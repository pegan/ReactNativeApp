/**
 * Created by piotr on 11/18/18.
 */


import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from './HomeScreen';
import SceneOne from './SceneOne';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Detail: {
        screen: SceneOne,
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer