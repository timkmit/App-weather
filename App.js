import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Alert } from 'react-native';
import Loading from './loading';
import * as Location from 'expo-location';
import React from 'react';
import Weather from './Weather'
import axios from 'axios';

const API_KEY = 'b8e23a932d9db1f0a6b90f4f8a39d609';


export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async () =>{
    const {data: {main: {temp} ,weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?=37.785834&lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    const condition = "Clear";
    this.setState({
      isLoading: false, 
      temp: data.main.temp, 
      condition: weather[0].main,
    });
    console.Console.log(data);
  }

  getLocation = async () => {
    try{
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      
      console.log(coords.latitude, coords.longitude);
    } catch (error) {
        Alert.alert('Cant find u', "too sad(");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    const {isLoading, temp, condition} = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>
    );
  }
}