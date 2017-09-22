import React from 'react';
import { StyleSheet, Text, View, Slider, Switch, Alert, Button } from 'react-native';

export default class App extends React.Component {
  toggleAlert() {
    return Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up rt working oyour </Text>
        <Slider
          minimumValue={0}
          maximumValue={100}
          step={5}
          onValueChange={(value) => value}
        />
        <Switch />
        <Button title="test alert" color="#841584" accessibilityLabel="Learn more about this purple button" onPress={this.toggleAlert} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
