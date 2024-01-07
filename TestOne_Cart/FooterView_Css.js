import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  footerBgView: {
    marginBottom: 0,
    height: 100,
    backgroundColor: '#FBD01E',
    flexDirection: 'row',
  },
  totalBaseView: {
    marginBottom: 0,
    height: 100,
    width: '30%',
    backgroundColor: '#E1B91B',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerTotalValueText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
  },
  viewCartTextBgView: {
    width: '70%',
    marginRight: 0,
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
    backgroundColor: '#FBD01E',
  },

  viewCartWithArrowView: {
    backgroundColor: '#FBD01E',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerViewCartText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    fontWeight: '300',
  },

  // calorie icon
  backIconDesign: {
    width: 30,
    height: 30,
    margin: 20,
    borderRadius: 0,
  },
});

export {styles};
