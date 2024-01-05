import React from 'react';
import {
  Text,
  Pressable,
  View,
  Image,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  ImageBackground,
} from 'react-native';

export default class FoodItemComponent extends React.Component {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.foodMainView}>
        <Image
          style={styles.foodImage}
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGJvd2x8ZW58MHx8MHx8fDA%3D"
        />
        <View style={styles.nameAndCalorieMainView}>
          <Text style={styles.foodNameText}> {title} </Text>
          <View style={styles.calorieValueView}>
            <Image
              style={styles.calorieIconDesign}
              source={require('./x.png')}
            />
            <Text style={styles.calorificValuetext}>340 Cal</Text>
          </View>
        </View>
        <View style={styles.pressableButton}>
          <Image
            style={styles.backIconDesign}
            src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672374-chevron-right-1024.png"></Image>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // forwarding button design
  pressableButton: {
    position: 'absolute',
    right: 14,
    top: 40,
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: 'white',
    shadowColor: 'black',
  },
  // Food image
  foodImage: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 13,
  },

  // Food name text design
  foodNameText: {
    marginTop: 18,
    flex: 0.8,
    marginLeft: 10,
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },

  // foodItemCell
  foodMainView: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#F0F4F7',
    height: 90,
    flexDirection: 'row',
    borderRadius: 14,
    overflow: 'hidden',
  },

  // Food name with calorie value section
  nameAndCalorieMainView: {
    flexDirection: 'column',
    height: 75,
  },

  // Calorific value background view
  calorieValueView: {
    flexDirection: 'row',
    width: 78,
    opacity: 20,
    marginTop: 12,
    marginLeft: 8,
    flex: 1,
    paddingLeft: 3,
    alignItems: 'center',
    backgroundColor: '#F2FEF7',
    padding: 0,
    borderRadius: 10,
  },

  // Calorific value text
  calorificValuetext: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#64C88E',
  },

  // calorie icon
  calorieIconDesign: {
    width: 12,
    height: 12,
    margin: 6,
    borderRadius: 0,
  },

  // calorie icon
  backIconDesign: {
    width: 15,
    height: 15,
    margin: 9,
    borderRadius: 0,
  },
});
