import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {styles} from './FooterView_Css';

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
