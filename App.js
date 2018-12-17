import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './App.styles.js';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator='False'>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.mainText}>Today</Text>
            <Text style={styles.secondaryText}>$26.32</Text>  
          </View>
          <View style={styles.list}>
            <View style={styles.listItem}>
              <Text>7/11</Text>
              <Text>Food</Text>
              <Text>$4.56</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
