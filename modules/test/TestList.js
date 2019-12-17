import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

class TestList extends React.Component {
  navigate = letter => {
    const {
      navigation: {navigate},
    } = this.props;
    navigate('TestDetails', {letter});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          padding: 20,
        }}>
        {data.map(letter => (
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              marginBottom: 10,
            }}
            key={letter}
            onPress={() => this.navigate(letter)}
            title={letter}>
            <Text>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default TestList;
