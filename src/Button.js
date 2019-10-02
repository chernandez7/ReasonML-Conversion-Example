import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";

import Style from "./Button.style";

const Button = ({ text, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View
      style={[
        Style.container,
        text === "+" ? { borderColor: "green" } : { borderColor: "red" }
      ]}
    >
      <Text style={Style.text}>{text}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default Button;
