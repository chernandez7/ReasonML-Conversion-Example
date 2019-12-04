import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import JSButton from "./src/js/Button";
import JSApp from "./src/js/App";
import ReasonApp from "./src/re/App.bs";
import ReasonButton from "./src/re/MyButton.bs";

const Style = StyleSheet.create({
  container: {
    flex: 1
  },
  appContainer: {
    flex: 1,
    alignItems: "center"
  }
});

class App extends React.Component {
  state = {
    isReason: true
  };

  render() {
    const { isReason } = this.state;
    return (
      <SafeAreaView style={Style.container}>
        {isReason ? (
          <View style={Style.appContainer}>
            <ReasonApp />
            <ReasonButton
              text="Switch"
              onPress={() => this.setState({ isReason: !isReason })}
            />
          </View>
        ) : (
          <View style={Style.appContainer}>
            <JSApp />
            <JSButton
              text="Switch"
              onPress={() => this.setState({ isReason: !isReason })}
            />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

export default App;
