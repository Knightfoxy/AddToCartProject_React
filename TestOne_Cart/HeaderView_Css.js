import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  // header back view
  headerView: {
    flexDirection: 'coloumn',
    height: 117,
    width: Dimensions.get('window').width,
    backgroundColor: '#2FCC70',
    marginLeft: 0,
    marginRight: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },

  // hamburger Button design
  pressableButton: {
    position: 'absolute',
    left: 20,
    top: 64,
    height: 40,
    width: 40,
  },

  // calorie icon
  backIconDesign: {
    width: 22,
    height: 22,
    margin: 6,
    borderRadius: 0,
  },

  // Screen Heading text
  headingText: {
    borderWidth: 0,
    top: 70,
    marginLeft: 60,
    borderColor: 'red',
    textAlign: 'left',
    color: 'white',
    fontSize: 19,
    fontWeight: '400',
  },

  // filter + search bg view
  filterButtonBgView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width - 100,
    marginTop: 25,
    backgroundColor: '#2FCC70',
  },

  // filter icon
  filterIconDesign: {
    width: 18,
    height: 18,
    margin: 4,
  },

  basicWhiteText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },
});

export {styles};
