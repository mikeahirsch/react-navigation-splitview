import React from 'react';
import {LayoutAnimation, View, Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import DeviceInfo from 'react-native-device-info';

import SplitViewInitialRoute, {setIsSplit} from './SplitViewInitialRoute';

class SplitView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSplit: false,
    };
    this.setIsSplit();
    this.setLayoutAnimation();
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.setIsSplit);
  }

  componentDidUpdate() {
    this.setLayoutAnimation();
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.setIsSplit);
  }

  setLayoutAnimation = () => {
    LayoutAnimation.configureNext({
      duration: 350,
      update: {
        type: 'easeInEaseOut',
      },
    });
  };

  setIsSplit = async () => {
    const {isTablet, isLandscape} = DeviceInfo;
    const newIsSplit = isTablet() && (await isLandscape());
    const {isSplit} = this.state;
    if (newIsSplit !== isSplit) {
      this.setState({isSplit: newIsSplit});
      setTimeout(() => {
        setIsSplit(newIsSplit);
      });
    }
  };

  getNavigator = () => {
    throw 'getNavigator must be overridden';
  };

  getRoutes = () => {
    throw 'getRoutes must be overridden';
  };

  render() {
    const {isSplit} = this.state;
    const Navigator = this.getNavigator();
    const routes = this.getRoutes();
    const initialRouteName = Object.keys(routes)[0];
    const List = routes[initialRouteName].screen;
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={isSplit ? {flex: 1} : {width: 0}}>
          <List {...this.props} />
        </View>
        <View style={{flex: 1}}>
          <Navigator {...this.props} />
        </View>
      </View>
    );
  }
}

export const createSplitViewNavigator = routes => {
  const routeKeys = Object.keys(routes);
  const InitialRoute = routes[routeKeys[0]];
  routes[routeKeys[0]] = {
    screen: props => {
      return (
        <SplitViewInitialRoute>
          <InitialRoute {...props} />
        </SplitViewInitialRoute>
      );
    },
  };
  return createStackNavigator(routes, {
    headerMode: 'none',
  });
};

export default SplitView;
