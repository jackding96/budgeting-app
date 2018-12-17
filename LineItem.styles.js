import { StyleSheet } from 'react-native';
import SYSTEM_COLORS from './colors.styles.js';

export default StyleSheet.create({
  list: {
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  listIcon: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: SYSTEM_COLORS.yellow,
  },
  listTextMain: {
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.9,
    fontFamily: 'System',
  },
  listLineSecondary: {
    display: 'flex',
    flexDirection: 'row',
  },
  listTextSecondary: {
    fontSize: 15,
    opacity: 0.9,
    fontFamily: 'System',
  },
  listTextBig: {
    fontSize: 20,
    opacity: 0.9,
    fontFamily: 'System', 
  }
});