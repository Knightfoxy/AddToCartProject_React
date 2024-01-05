import React, {createRef} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNum: '',
      age: '',
      password: '',
      activeInputField: null,
    };
    this.nameIpRef = createRef();
    this.emailIpRef = createRef();
    this.phoneIpRef = createRef();
    this.ageIpRef = createRef();
    this.passwordIpRef = createRef();
  }

  handleFocus = inputName => {
    this.setState({activeInputField: inputName});
  };

  handleBlur = () => {
    this.setState({activeInputField: null});
  };

  handleChange = (fieldName, value) => {
    this.setState({[fieldName]: value});
  };

  handleClick = () => {
    const {name, email, phoneNum, age, password} = this.state;
    console.log('name:', name);
    console.log('password:', password);
    console.log('Mobile Number:', phoneNum);
    console.log('Email:', email);
    console.log('Age:', age);
  };

  focusNextField = nextField => {
    this.setState({activeInputField: nextField});
  };

  render() {
    const {activeInputField} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.mainView}>
            <View style={styles.headingView}>
              <Text style={styles.headingText}>Create Account</Text>
            </View>
            <View style={styles.formView}>
              <Text style={styles.inputTextHeading}>Full Name</Text>
              <TextInput
                keyboardType="default"
                style={[
                  styles.textInputView,
                  activeInputField === 'name'
                    ? {borderColor: 'orange'}
                    : {borderColor: 'green'},
                ]}
                onSubmitEditing={() => this.focusNextField('emailIpRef')}
                onChangeText={text => this.handleChange('name', text)}
                ref={this.inputRef}
                onFocus={() => this.handleFocus('name')}
                onBlur={this.handleBlur}
                placeholder="Enter Name"></TextInput>
              <Text style={styles.inputTextHeading}>Email</Text>
              <TextInput
                onChangeText={text => this.handleChange('email', text)}
                keyboardType="email-address"
                style={[
                  styles.textInputView,
                  activeInputField === 'email'
                    ? {borderColor: 'orange'}
                    : {borderColor: 'green'},
                ]}
                onSubmitEditing={() => this.focusNextField('phoneIpRef')}
                onFocus={() => this.handleFocus('email')}
                onBlur={this.handleBlur}
                placeholder="Enter Email"></TextInput>
              <Text style={styles.inputTextHeading}>Phone Number</Text>
              <TextInput
                onChangeText={text => this.handleChange('phoneNum', text)}
                keyboardType="phone-pad"
                style={[
                  styles.textInputView,
                  activeInputField === 'phoneNum'
                    ? {borderColor: 'orange'}
                    : {borderColor: 'green'},
                ]}
                onFocus={() => this.handleFocus('phoneNum')}
                onBlur={this.handleBlur}
                placeholder="Enter Phone Number"></TextInput>
              <Text style={styles.inputTextHeading}>Age</Text>
              <TextInput
                onChangeText={text => this.handleChange('age', text)}
                keyboardType="number-pad"
                style={[
                  styles.textInputView,
                  activeInputField === 'age'
                    ? {borderColor: 'orange'}
                    : {borderColor: 'green'},
                ]}
                onFocus={() => this.handleFocus('age')}
                onBlur={this.handleBlur}
                placeholder="Enter Age"></TextInput>
              <Text style={styles.inputTextHeading}>Password</Text>
              <TextInput
                onChangeText={text => this.handleChange('password', text)}
                secureTextEntry={true}
                style={[
                  styles.textInputView,
                  activeInputField === 'password'
                    ? {borderColor: 'orange'}
                    : {borderColor: 'green'},
                ]}
                onFocus={() => this.handleFocus('password')}
                onBlur={this.handleBlur}
                placeholder="Enter Password"></TextInput>
            </View>
            <View style={styles.button}>
              <Button
                title="Create Account"
                onPress={this.handleClick}
                color={'black'}></Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

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
