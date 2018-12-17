import { StyleSheet } from 'react-native';
import SYSTEM_COLORS from './colors.styles.js';

export default StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  listItemLeftContainer: {
    marginRight: 15,
  },
  listItemRightContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  listItemIcon: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: SYSTEM_COLORS.yellow,
  },
  listItemCategoryText: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'System',
    opacity: 0.9
  },
  listItemMainDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },  
  listItemSecondaryDetails: {
    display: 'flex',
    flexDirection: 'row',
  },
  listLineSecondary: {
    display: 'flex',
    flexDirection: 'row',
  },
  listItemCostText: {
    fontSize: 17,
    fontFamily: 'System', 
    opacity: 0.9
  },
  listItemStoreText: {
    fontFamily: 'System',
    // opacity: 0.8,
    // fontWeight: 'bold'
  },
  listItemTimeText: {
    fontFamily: 'System',
    // opacity: 0.8,
  }
});