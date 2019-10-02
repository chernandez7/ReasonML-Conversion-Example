import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";

import Button from "./src/Button";
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

export default App;
