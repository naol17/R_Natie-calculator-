import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Vibration} from 'react-native';
import {useState} from 'react';
import { Entypo } from '@expo/vector-icons';

function App(){
    const [darkMode, setDarkMode] = useState(false);
    const [currentNumber, setCurrentNumber] = useState('');
    const [lastNumber, setLastNumber] = useState('');
  
    const buttons = ['C', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
  


}
export default App