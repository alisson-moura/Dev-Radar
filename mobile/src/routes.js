import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
                title: 'DevRadar',
                headerTitleAlign: 'center',
            },
        },

        Profile: {
            screen: Profile,
            navigationOptions:{
                title: 'GitHub',
                headerTitleAlign: 'center',
            },
        },
    },{
        defaultNavigationOptions:{
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerStyle:{
                backgroundColor: '#7D10E7', 
            }
        },
    })
);

export default Routes;