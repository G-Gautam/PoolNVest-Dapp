import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ColorPropType,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export default class Dashboard extends Component{
  state = {
    data:[
      {
        label: 'Stock 0',
        value: 'This is Stock 0'
      },
      {
        label: 'Stock 1',
        value: 'This is Stock 1'
      },
      {
        label: 'Stock 2',
        value: 'This is Stock 2'
      },
      {
        label: 'Stock 3',
        value: 'This is Stock 3'
      },
      {
        label: 'Stock 4',
        value: 'This is Stock 4'
      },
    ],
};

onPress = data => this.setState({ data });

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    return (
      <View>
      <View style={[styles.totalContainer]}>
      <Text style={[styles.totalMoneyText]}>$000.00</Text>
      <Text style={[styles.totalMoneyHeading]}>Total</Text>
      </View>
      <View style={[styles.yourContainer]}>
      <View style={[styles.yourTotalContainer]}>
      <Text style={[styles.yourMoneyHeading]}>Your Total: </Text>
      <Text style={[styles.yourMoneyText]}>$000.00</Text>
      </View>
      <View style={[styles.yourPercentageContainer]}>
      <Text style={[styles.returnPercentageHeading]}>Your Percentage: </Text>
      <Text 
      style={[styles.returnPercentage]}
      onChangeText>000.00</Text>
      <Text style={[styles.percentSymbol]}>%</Text>
      </View>
      </View>
      <View style={[styles.stocksTabContainer]}>
      <View style={[styles.container]}>
        <Text style = {[styles.valueText]}>
        Value = {selectedButton}
        </Text>
        <RadioGroup radioButtons={this.state.data} onPress={this.onPress}/>
        </View>
      <View style={[styles.stocksTabHeadingContainer]}>
      </View>
      </View>
      <View style={[styles.submitButtonContainer]}>
      <TouchableHighlight style={[styles.submitButton]}>
      <Text style={[styles.submitButtonText]}>Submit</Text>
      </TouchableHighlight>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 18,
    marginBottom: 25,
  },
  totalContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },
  totalMoneyText: {
    fontSize: 75,
    fontWeight: "bold",
    marginTop: 50,
  },
  totalMoneyHeading: {
    fontSize: 20,
    marginTop: -15,
    marginBottom: 10,
    fontWeight: "bold",
  },
  yourContainer: {
    marginLeft: 40,
  },
  yourTotalContainer: {
    flexDirection: 'row',
  },
  yourMoneyHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  yourMoneyText: {
    fontStyle: "italic",
    fontSize: 20,
  },
  yourPercentageContainer: {
    flexDirection: 'row',
  },
  returnPercentageHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  returnPercentage: {
    fontStyle: "italic",
    fontSize: 20,
  },
  percentSymbol: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  stocksTabContainer: {

  },
  stocksTabHeadingContainer: {

  },
  submitButtonContainer: {
    bottom: -150,
    marginTop: 30,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 20,
    backgroundColor: '#ffae00',
  },
  submitButton: {
    backgroundColor: '#ffae00',
  },
  submitButtonText: {
    color: 'white',
  },
});