import { AppRegistry, Dimensions } from 'react-native';
//import App from './App';
import { DrawerNavigator } from 'react-navigation'

//Components
import HomeComponent from './src/components/HomeComponent'
import InfoComponent from './src/components/InfoComponent'

//Screen
import { Home, Info } from './screenName'
var { height, width } = Dimensions.get('window');

let routeConfig = {
  Home: {
    path: '/',
    screen: HomeComponent
  },
  Info: {
    path: '/',
    screen: InfoComponent
  }
};
let drawerNavigatorConfig = {
  initialRouteName: Home,
  drawerWidth: width / 2,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentOption: {
    activeTiniColor: 'red'
  },
  contentOptions: {
    activeTintColor: 'red',
  },
  drawerBackgroundColor: '#FFF',
};
const App = DrawerNavigator(routeConfig, drawerNavigatorConfig);
AppRegistry.registerComponent('drawer', () => App);
