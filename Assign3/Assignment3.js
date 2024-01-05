import React, {useState, useEffect} from 'react';
import FoodItemComponent from '/Users/ai/FirstProject_React/FoodItemComponent.js';
import {
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Keyboard,
  FlatList,
} from 'react-native';

const ApiInitiation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://dev-mgk75mxv0v8pklm.api.raw-labs.com/karanApi')
      .then(result => result.json())
      .then(data => setData(data))
      .catch(error => {
        console.log({error});
      });
  };

  const renderItem = ({item}) => (
    <View
      style={{
        marginTop: 20,
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: item.color,
      }}>
      <Image
        src={item.imgUrl}
        style={{
          height: 60,
          width: '90%',
          alignContent: 'center',
          marginTop: 20,
          marginBottom: 20,
          borderRadius: 20,
        }}></Image>
      <Text>Name: {item.title}</Text>
      <Text>Bday: {item.dob}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ApiInitiation;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  headingText: {
    padding: 5,
    borderWidth: 0,
    borderColor: 'red',
    margin: 0,
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
  },
  inputTextHeading: {
    paddingLeft: 10,
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  headingView: {
    marginTop: 30,
    backgroundColor: 'white',
  },
  formView: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    width: 'auto',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textInputView: {
    margin: 10,
    marginBottom: 14,
    height: 40,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 12,
    textAlign: 'left',
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: 'green',
  },

  button: {
    margin: 30,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    overflow: 'hidden',
  },
});
