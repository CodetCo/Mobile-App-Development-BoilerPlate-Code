import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.message,
    };
  }

  onButtonPressed() {
    if (this.state.message === this.props.message) {
      this.setState({
        message: "New Changed Message",
      });
    } else {
      this.setState({
        message: this.props.message,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>The message state value is {this.state.message}</Text>
        <Button
          title="Change message value"
          onPress={() => this.onButtonPressed()}
        />
      </View>
    );
  }
}
export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
