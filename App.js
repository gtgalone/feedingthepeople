import React from 'react';
import { StyleSheet, Text, View, Slider, Switch, Alert, Button, DrawerLayoutAndroid } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      drawer: false,
    }
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }
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
  openDrawer() {
    this.refs['drawer'].openDrawer();
  }
  closeDrawer() {
    this.refs['drawer'].closeDrawer();
  }
  render() {
    const navigationView = (
      <View style={styles.container}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        <Button title="test alert" color="#841584" accessibilityLabel="Learn more about this purple button" onPress={this.closeDrawer} />
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={'drawer'}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={styles.container}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
          <Button title="test alert" color="#841584" accessibilityLabel="Learn more about this purple button" onPress={this.openDrawer} />
        </View>
      </DrawerLayoutAndroid>
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
