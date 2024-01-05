import React from 'react';
import FoodItemComponent from './FoodItemComponent.js';
import {
  Text,
  Pressable,
  View,
  Image,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Keyboard,
  FlatList,
  ImageBackground,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Open Face Egg Sandwich',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Sushi Platter',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Mango Sticky Rice',
  },
  {
    id: '7a597ef2-4e27-4d39-8f42-f4d9a8aa7f4c',
    title: 'Paella',
  },
  {
    id: 'f81d0e65-4f84-4f6a-9e7f-c5efb8c4a6a0',
    title: 'Ceviche',
  },
  {
    id: '6d93ac3a-3f9c-4290-8f3c-dccaa3c6a382',
    title: 'Pho',
  },
  {
    id: '2a8a6c13-55b0-4bcf-9d71-4ea17e0acdbb',
    title: 'Moroccan Tagine',
  },
  {
    id: 'e3c8c885-7ed3-43c5-b06a-ffef7a31b4bf',
    title: 'Poke Bowl',
  },
  {
    id: 'bfb0e4fb-07d0-45ec-bd90-7e19674ac240',
    title: 'Shawarma Wrap',
  },
  {
    id: '92ef68dd-94cc-4e74-a3d1-5d43f05c9d72',
    title: 'Jambalaya',
  },
  {
    id: '7584f345-7d4e-4b57-9670-fd8fc16a7d64',
    title: 'Banh Mi Sandwich',
  },
  {
    id: 'c6ee1664-1ff9-4171-9251-004522dc361f',
    title: 'Gyoza Dumplings',
  },
  {
    id: '8e8f43f8-b38f-4d37-92de-c875a9a2d524',
    title: 'Moussaka',
  },
];
export default class ListingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: DATA,
      searchedString: '',
    };
  }

  displaySearchedData = text => {
    const resultantArray = DATA.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    console.log(resultantArray);
    this.setState({
      menuData: resultantArray,
      searchedString: text,
    });
  };

  takeSearchedString = text => {
    this.state.searchedString = text;
    console.log(this.state.searchedString);
    this.displaySearchedData(text);
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainView}>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: '#F1F2F3',
                padding: 0,
                borderRadius: 8,
              },
              styles.pressableButton,
            ]}>
            <Image
              style={styles.backIconDesign}
              src="https://w7.pngwing.com/pngs/297/419/png-transparent-chevron-left-feather-icon.png"
            />
          </Pressable>
          <Text style={styles.headingText}>Lunch</Text>
          <View style={styles.textInputViewBg}>
            <Image
              style={styles.searchbarIconStyle}
              src="https://w7.pngwing.com/pngs/765/401/png-transparent-search-logo-magnifying-glass-computer-icons-search-box-icon-search-drawing-icon-lens-data-background-process-thumbnail.png"
            />
            <TextInput
              keyboardType="default"
              style={styles.textInputView}
              onChangeText={value => this.takeSearchedString(value)}
              placeholder="Search your choice"></TextInput>
          </View>
          <View style={{flex: 1}}>
            <FlatList
              data={this.state.menuData}
              renderItem={({item}) => <FoodItemComponent title={item.title} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // screen background
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },

  // Back Button design
  pressableButton: {
    position: 'absolute',
    left: 20,
    top: 12,
    height: 35,
    width: 35,
  },

  // Screen Heading text
  headingText: {
    padding: 15,
    borderWidth: 0,
    borderColor: 'red',
    margin: 0,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },

  // Screen Heading Background view
  headingView: {
    marginTop: 30,
    backgroundColor: 'white',
  },

  // Search Bar background view
  textInputViewBg: {
    flexDirection: 'row',
    marginTop: 14,
    height: 47,
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 20,
    padding: 5,
    paddingLeft: 12,
    textAlign: 'left',
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
  },

  // Search Bar view
  textInputView: {
    textAlign: 'left',
    flex: 0.9,
    marginLeft: 2,
    backgroundColor: '#F0F0F0',
  },

  // search bar icon design
  searchbarIconStyle: {
    width: 23,
    height: 23,
    margin: 8,
    borderRadius: 0,
  },

  // calorie icon
  backIconDesign: {
    width: 22,
    height: 22,
    margin: 6,
    borderRadius: 0,
  },
});
