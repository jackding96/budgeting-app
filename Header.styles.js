import { StyleSheet } from 'react-native';
import SYSTEM_COLORS from './colors.styles.js';

export default StyleSheet.create({
  mainText: {
    fontSize: 17,
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
    paddingBottom: 12,
    marginTop: 10,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,    
    marginBottom: 5,
    borderTopWidth: 1,
    borderTopColor: SYSTEM_COLORS.extralightgray
  }
});