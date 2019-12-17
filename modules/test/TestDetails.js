import React from 'react';
import {View, Text} from 'react-native';

class TestDetails extends React.Component {
  render() {
    const {
      navigation: {getParam},
    } = this.props;
    const letter = getParam('letter');
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>TestDetails: {letter}</Text>
      </View>
    );
  }
}

export default TestDetails;
