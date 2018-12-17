import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.mainText}>Today</Text>
          <Text style={styles.secondaryText}>$26.32</Text>  
          {/* <Text style={styles.fun}>Boobs</Text>         */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginLeft: 20
  },
  mainText: {
    fontSize: 34,
    marginBottom: 5,
    fontFamily: 'System',
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: 20,
    color: '#4CD964',
    fontWeight: "700"
  },
  fun: {
    fontSize: 100,
    fontWeight: "bold",
    color: "pink"
  }
});
