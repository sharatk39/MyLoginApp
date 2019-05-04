import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from './login';
import Home from './home';
import Loading from './loading';
const AppStack = createStackNavigator(
    {
        home: Home
    }
);
const AuthStack = createSwitchNavigator(
    {
        login: Login
    }
);

export const AppContainer = createAppContainer(
    createSwitchNavigator(
        {
            loading: Loading,
            app: AppStack,
            auth: AuthStack,
        },
        {
            initialRouteName: 'loading',
        }
    )
);