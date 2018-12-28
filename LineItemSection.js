import React from 'react';
import { Text, FlatList, View } from 'react-native';
import styles from './LineItem.styles.js';

export default class LineItemSection extends React.Component {
  constructor(props) {
    super(props);
    this.getSum = this.getSum.bind(this);
    this.renderDate = this.renderDate.bind(this);
    this.diffDays = this.diffDays.bind(this);
    this.renderOverUnderLimit = this.renderOverUnderLimit.bind(this);
  }
  getSum(items) {
    return items.length == 0 ? 0 : items.map(x=>parseFloat(x.cost)).reduce((a,c) => { return a+c}).toFixed(2);
  }
  renderDate(timestamp) {
    const d = new Date(timestamp);
    return d.toString();
  }
  diffDays(d1, d2) {
    console.log(d1, d2);
    return Math.abs(Math.round((d1-d2) / (1000*60*60*24)));
  }
  renderOverUnderLimit(limit, spending) {
    if (limit == spending) {
      return `You've reached your limit for the day!`;
    }
    else if (limit > spending) {
      return `Yes! You're under by ${(limit-spending).toFixed(2)}`;
    }
    else {
      return `NO! You're over by ${(spending-limit).toFixed(2)}`;
    }
  }
  render() {
    const limit = this.diffDays(this.props.curr_time, this.props.lower_time_bound)*this.props.limit_per_day;
    return (
      <View>
        <Text>
          {this.props.header}
        </Text>
        <Text>lists purchases after/at: {this.renderDate(this.props.lower_time_bound)}</Text>
        <Text>
          {`You spent $${this.getSum(this.props.items)}, your limit is $${limit}`}
        </Text>
        <Text>
          {this.renderOverUnderLimit(limit, this.getSum(this.props.items))}
        </Text>
        <Text>{'\n'}</Text>
      </View>
    );
  }
}