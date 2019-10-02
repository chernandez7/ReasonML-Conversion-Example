import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";

import Style from "./App.style";

class App extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  decrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <View style={Style.container}>
        <Text style={Style.count}>{count}</Text>
        <View style={Style.buttonsContainer}>
          <Button text="-" onPress={() => this.decrement()} />
          <Button text="+" onPress={() => this.increment()} />
        </View>
      </View>
    );
  }
}

const Button = ({ text, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View
      style={[
        Style.button,
        text === "+" ? { borderColor: "green" } : { borderColor: "red" }
      ]}
    >
      <Text style={Style.buttonText}>{text}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default App;
