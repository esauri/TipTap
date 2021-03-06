import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(246, 247, 249, 0.08)',
    marginRight: 5,
    borderRadius: 4,
    padding: 10,
  },
  selected: {
    backgroundColor: '#4cd964',
    opacity: 1,
  },
  defaultText: {
    color: '#fff',
  },
  selectedText: {
    color: '#020202',
  },
  text: {
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
