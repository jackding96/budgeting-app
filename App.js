import React from 'react';
import { ScrollView, SectionList, Button, FlatList, Text, View } from 'react-native';

import LineItemSection from './LineItemSection';
import dummyData from './dummyData.js';
import styles from './App.styles.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // Binding functions
    this.getDay = this.getDay.bind(this);
    this.setDay = this.setDay.bind(this);
    this.setMonth = this.setMonth.bind(this);
    this.getSum = this.getSum.bind(this);
  
    // Timestamp variables
    this.CURR_TIME = new Date();

    this.state = {
      limit_per_day: 15,
      line_items_sections: [
        {
          header: 'Today',
          lower_time_bound: this.setDay(this.CURR_TIME, 0),
          upper_time_bound: this.CURR_TIME,
          items: [],
        },
        {
          header: 'This Week',
          lower_time_bound: this.setDay(this.CURR_TIME, -7),
          upper_time_bound: this.setDay(this.CURR_TIME, 0) - 1,          
          items: [],
        },
        {
          header: '2 Weeks',
          lower_time_bound: this.setDay(this.CURR_TIME, -14),
          upper_time_bound: this.setDay(this.CURR_TIME, -7) - 1,          
          items: [],
        },
        {
          header: '3 Weeks',
          lower_time_bound: this.setDay(this.CURR_TIME, -21),
          upper_time_bound: this.setDay(this.CURR_TIME, -14) - 1,          
          items: [],
        }, 
        {
          header: 'Month',
          lower_time_bound: this.setMonth(this.CURR_TIME, -1),
          upper_time_bound: this.setDay(this.CURR_TIME, -21) -1,          
          items: [],
        }, 
        {
          header: '2 Months',
          lower_time_bound: this.setMonth(this.CURR_TIME, -2),
          upper_time_bound: this.setMonth(this.CURR_TIME, -1) - 1,          
          items: [],
        },
        {
          header: '3 Months',
          lower_time_bound: this.setMonth(this.CURR_TIME, -3),
          upper_time_bound: this.setMonth(this.CURR_TIME, -2) - 1,          
          items: [],
        },                                            
      ]
    }
  }
  getDay(currTime) {
    let newTime = new Date(currTime);
    newTime.setHours(0);
    newTime.setMinutes(0);
    newTime.setSeconds(0);
    newTime.setMilliseconds(0);
    return newTime.getTime();
  }
  setDay(currTime, increment) {
    let newTime = new Date(this.getDay(currTime));
    newTime.setDate(newTime.getDate() + increment);
    return newTime.getTime();
  }
  setMonth(currTime, increment) {
    let newTime = new Date(this.getDay(currTime));
    newTime.setMonth(newTime.getMonth() + increment);
    return newTime.getTime();
  }
  getSum(items) {
    return `$${items.length == 0 ? 0 : items.map(x=>parseFloat(x.cost)).reduce((a,c) => { return a+c}).toFixed(2)}`;
  }  

  componentWillMount() {
    const data = Object.values(dummyData).map(x => JSON.parse(x)).sort((a,b) => a.timestamp <= b.timestamp);
    const newState = {...this.state};

     // Sort raw data into the state object
    newState.line_items_sections.forEach((line_item) => {
      // line_item.items = data.filter(x => x.timestamp >= line_item.lower_time_bound && x.timestamp <= line_item.upper_time_bound);
      line_item.items = data.filter(x => x.timestamp >= line_item.lower_time_bound);
    });

    this.setState({newState});
  }

  render() {
    return (
      <View>
        <Text>Your Spending:</Text>
        <FlatList
          data = {this.state.line_items_sections}
          renderItem = {({item}) => (
            <LineItemSection
              header = {item.header}
              items = {item.items}
              curr_time = {this.CURR_TIME.getTime()}
              lower_time_bound = {item.lower_time_bound}
              limit_per_day = {this.state.limit_per_day}
            />
          )}
        />
      </View>
    );
  }
}
