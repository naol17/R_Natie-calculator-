import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
} from "react-native";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  const buttons = [
    "C",
    "DEL",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];
  function calculator() {
    let lastArr = currentNumber[currentNumber.length - 1];

    if (
      lastArr === "/" ||
      lastArr === "*" ||
      lastArr === "-" ||
      lastArr === "+" ||
      lastArr === "."
    ) {
      setCurrentNumber(currentNumber);
      return;
    } else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  }
  function handleInput(buttonPressed) {
    if (
      buttonPressed === "+" ||
      buttonPressed === "-" ||
      buttonPressed === "*" ||
      buttonPressed === "/"
    ) {
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPressed);
        return;
      } else if (
        buttonPressed === 1 ||
        buttonPressed === 2 ||
        buttonPressed === 3 ||
        buttonPressed === 4 ||
        buttonPressed === 5 ||
        buttonPressed === 6 ||
        buttonPressed === 7 ||
        buttonPressed === 8 ||
        buttonPressed === 9 ||
        buttonPressed === 0 ||
        buttonPressed === "."
      ) 
}
export default App;
