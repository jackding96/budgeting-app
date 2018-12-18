import React from 'react';
import { ScrollView, FlatList, Text, View } from 'react-native';

import Header from './Header.js';
import dummyData from './dummyData.js';
import LineItem from './LineItem.js';
import styles from './App.styles.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dayLineItems: {
        header: 'Today',
        data: [],
      },
      weekLineItems: {
        header: 'This Week',
        data: [],
      },
      monthLineItems: {
        header: 'This Month',
        data: [],
      },
    }

    this.getStartOfDay = this.getStartOfDay.bind(this);
    this.getStartOfWeek = this.getStartOfWeek.bind(this);
    this.getStartOfMonth = this.getStartOfMonth.bind(this);
  }
  getStartOfDay() {
    let currTime = new Date();
    currTime.setHours(0);
    currTime.setMinutes(0);
    currTime.setSeconds(0);
    currTime.setMilliseconds(0);
    return currTime.getTime();
  }
  getStartOfWeek() {
    let currTime = new Date(this.getStartOfDay());
    currTime.setDate(currTime.getDate() - 7);
    return currTime.getTime();
  }
  getStartOfMonth() {
    let currTime = new Date(this.getStartOfDay());
    currTime.setMonth(currTime.getMonth() - 1);
    return currTime.getTime();
  }
  componentWillMount() {
    const data = Object.values(dummyData).map(x => JSON.parse(x)).sort((a,b) => a.timestamp <= b.timestamp);
    const newState = {...this.state};
    newState.dayLineItems.data = data.filter(x => x.timestamp >= this.getStartOfDay());
    newState.weekLineItems.data = data.filter(x => x.timestamp >= this.getStartOfWeek());
    newState.monthLineItems.data = data.filter(x => x.timestamp >= this.getStartOfMonth());
    this.setState({newState});
  }
  render() {
    const total = this.state.weekLineItems.data.map(x=>parseFloat(x.cost)).reduce((a,c) => { return a+c}).toFixed(2);
    return (
      <ScrollView showsVerticalScrollIndicator='False'>
        <View style={styles.container}>
          <Header
            title={this.state.dayLineItems.header}
            total={total}
          />
          <FlatList
            data={this.state.dayLineItems.data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
              <LineItem
                category={item.category}
                store={item.store}
                cost={item.cost}
                time={item.timestamp}
              />
            }
          />
        </View>

        <View style={styles.container}>
          <Header
            title={this.state.weekLineItems.header}
          />
          <FlatList
            data={this.state.weekLineItems.data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
              <LineItem
                category={item.category}
                store={item.store}
                cost={item.cost}
                time={item.timestamp}
              />
            }
          />
        </View>

        <View style={styles.container}>
          <Header
            title={this.state.monthLineItems.header}
          />
          <FlatList
            data={this.state.monthLineItems.data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
              <LineItem
                category={item.category}
                store={item.store}
                cost={item.cost}
                time={item.timestamp}
              />
            }
          />
        </View>        

      </ScrollView>
    );
  }
}
