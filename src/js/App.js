import React from "react";
import { Text, View } from "react-native";

import Button from "./Button";
import Style from "./App.style";

function App(props) {
  const [count, setCount] = React.useState(() => 0);
  console.log(props);

  return (
    <View style={Style.container}>
      <Text style={Style.count}>{count}</Text>
      <View style={Style.buttonsContainer}>
        <Button text="-" onPress={() => setCount(count - 1)} />
        <Button text="+" onPress={() => setCount(count + 1)} />
      </View>
      <Text style={Style.count}>Currently running JS.</Text>
    </View>
  );
}

export default App;
