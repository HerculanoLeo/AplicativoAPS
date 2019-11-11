import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MainScreenAbertos from './screens/mainScreenAbertos';
import MainScreenSolucionados from './screens/mainScreenSolucionados';
import MainScreenFechados from './screens/mainScreenFechados';
import Products from './screens/produtos'

const optionalScatck = {
    headerStyle: {
        backgroundColor: '#299B41'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        textAlign: "center",
        flex: 1
    },
};
const optionalTab = {
    inactiveTintColor: '#fff',
    inactiveBackgroundColor: '#299B41',
    activeTintColor: '#fff',
    activeBackgroundColor: '#1D672C',
};

const ScatckAberto = createStackNavigator(
    {
        Aberto: MainScreenAbertos,
        Products
    }, {
        defaultNavigationOptions: optionalScatck
    }
);
const ScatckSolucionado = createStackNavigator(
    {
        Soluciona: MainScreenSolucionados,
        Products
    }, {
        defaultNavigationOptions: optionalScatck
    }
);
const ScatckFechado = createStackNavigator(
    {
        Fechado: MainScreenFechados,
        Products
    }, {
        defaultNavigationOptions: optionalScatck
    }
);
const AppContainer = createAppContainer(
    createBottomTabNavigator({
        Aberto: ScatckAberto,
        Soluciona: ScatckSolucionado,
        Fechado: ScatckFechado,
    }, {
        tabBarOptions: optionalTab,
    }

    )
);

export default AppContainer;