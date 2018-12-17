import { StyleSheet } from 'react-native';
import SYSTEM_COLORS from './colors.styles.js';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
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
  },
  list: {
    paddingLeft: 40,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  listIcon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: SYSTEM_COLORS.pink,
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