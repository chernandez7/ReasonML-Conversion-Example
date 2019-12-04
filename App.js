import React from "react";
import { SafeAreaView } from "react-native";

import JSButton from "./src/js/Button";
import JSApp from "./src/js/App";
import ReasonApp from "./src/re/App.bs";
import ReasonButton from "./src/re/MyButton.bs";

class App extends React.Component {
  state = {
    isReason: true
  };

  render() {
    const { isReason } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {isReason ? (
          <React.Fragment>
            <ReasonApp />
            <ReasonButton
              text="Switch"
              onPress={() => this.setState({ isReason: !isReason })}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <JSApp />
            <JSButton
              text="Switch"
              onPress={() => this.setState({ isReason: !isReason })}
            />
          </React.Fragment>
        )}
      </SafeAreaView>
    );
  }
}

export default App;
