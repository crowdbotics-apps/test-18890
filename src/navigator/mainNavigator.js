import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList78319Navigator from '../features/NotificationList78319/navigator';
import Settings78318Navigator from '../features/Settings78318/navigator';
import Settings78310Navigator from '../features/Settings78310/navigator';
import UserProfile78308Navigator from '../features/UserProfile78308/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList78319: { screen: NotificationList78319Navigator },
Settings78318: { screen: Settings78318Navigator },
Settings78310: { screen: Settings78310Navigator },
UserProfile78308: { screen: UserProfile78308Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
