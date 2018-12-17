import { StyleSheet } from 'react-native';
import SYSTEM_COLORS from './colors.styles.js';

export default StyleSheet.create({
  mainText: {
    fontSize: 34,
    marginBottom: 4,
    fontFamily: 'System',
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: 20,
    fontWeight: "bold",
    color: SYSTEM_COLORS.green
  },
  header: {
    paddingLeft: 20,
    marginTop: 30,
    marginBottom: 20,
  }
});