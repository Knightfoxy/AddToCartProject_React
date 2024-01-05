import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const FooterViewComponent = ({totalCost, totalCount}) => {
  return (
    <View style={styles.footerBgView}>
      <View style={styles.totalBaseView}>
        <Text style={styles.footerTotalValueText}>${totalCost}</Text>
      </View>
      <View style={styles.viewCartTextBgView}>
        <View style={styles.viewCartWithArrowView}>
          <Text style={styles.footerViewCartText}>
            VIEW CART ({totalCount})
          </Text>
          <Image
            style={styles.backIconDesign}
            source={require('/Users/ai/FirstProject_React/TestOne_Cart/Assets/arrowRight.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default FooterViewComponent;

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
