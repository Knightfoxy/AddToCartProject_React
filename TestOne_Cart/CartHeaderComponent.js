import {React, memo} from 'react';
import {Dimensions} from 'react-native';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from './HeaderView_Css';

const HeaderViewComponent = () => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity style={styles.pressableButton}>
        <Image
          style={styles.backIconDesign}
          source={require('/Users/ai/FirstProject_React/TestOne_Cart/Assets/hamburgericon.png')}
        />
      </TouchableOpacity>
      <Text style={styles.headingText}>Golden Corral - Addison</Text>

      {/* filter+ search Button */}
      <View style={styles.filterButtonBgView}>
        <Image
          style={styles.filterIconDesign}
          source={require('/Users/ai/FirstProject_React/TestOne_Cart/Assets/hamburgericon.png')}
        />
        <Text style={styles.basicWhiteText}>FILTER</Text>
        <Image
          style={styles.backIconDesign}
          source={require('/Users/ai/FirstProject_React/TestOne_Cart/Assets/searchWhite.png')}
        />
      </View>
    </View>
  );
};

export default memo(HeaderViewComponent);
