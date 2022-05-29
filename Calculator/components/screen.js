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
import "./style";

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
    ) {
      Vibration.vibrate(35);
    }
    switch (buttonPressed) {
      case "DEL":
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case "C":
        Vibration.vibrate(35);
        setLastNumber("");
        setCurrentNumber("");
        return;
      case "=":
        Vibration.vibrate(35);
        setLastNumber(currentNumber + "=");
        calculator();
        return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }

  return(
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo
            name={darkMode ? "light-up" : "moon"}
            size={24}
            color={darkMode ? "white" : "black"}
            onPress={() => (darkMode ? setDarkMode(false) : setDarkMode(true))}
          />
        </TouchableOpacity>
          <Text style={styles.historyText}>{lastNumber}</Text>
          <Text style={styles.resultText}>{currentNumber}</Text>
        </View>
        <View style={styles.buttons}>
          {buttons.map((button) =>
            button === "=" ||
            button === "/" ||
            button === "*" ||
            button === "-" ||
            button === "+" ? (
              <TouchableOpacity
              key={button}
              style={[styles.button, { backgroundColor: "#00b9d6" }]}
              onPress={() => handleInput(button)}
            >
              <Text
                style={[styles.textButton, { color: "white", fontSize: 28 }]}
              >
                {button}
              </Text>
            </TouchableOpacity>
          ) : button === 0 ? (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor:
                    typeof button === "number"
                      ? darkMode
                        ? "#303946"
                        : "#fff"
                      : darkMode === true
                      ? "#414853"
                      : "#ededed",
                  minWidth: "36%",
                },
              ]}
              onPress={() => handleInput(button)}
            >
 <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          ) : button === "." || button === "DEL" ? (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor:
                    button === "."
                      ? darkMode
                        ? "#303946"
                        : "#fff"
                      : darkMode === true
                      ? "#414853"
                      : "#ededed",
                  minWidth: "37%",
                },
              ]}
              onPress={() => handleInput(button)}
            ></TouchableOpacity>


























  )
}
export default App;
