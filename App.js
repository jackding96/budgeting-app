import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import Header from './Header.js';
import LineItem from './LineItem.js';
import styles from './App.styles.js';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator='False'>
        <View style={styles.container}>
          <Header/>
          <LineItem/>
        </View>
      </ScrollView>
    );
  }
}
