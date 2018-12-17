import { StyleSheet } from 'react-native';
import SYSTEM_COLORS from './colors.styles.js';

export default StyleSheet.create({
  mainText: {
    fontSize: 20,
    marginBottom: 4,
    fontFamily: 'System',
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: 34,
    fontWeight: "bold",
    color: SYSTEM_COLORS.green
  },
  header: {
    paddingBottom: 10,
    marginTop: 30,
    marginBottom: 20,
    display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: SYSTEM_COLORS.extralightgray
  }
});