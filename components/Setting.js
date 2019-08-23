import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button"

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: this.props.navigation.state.params.timer,
      difficulty: this.props.navigation.state.params.difficulty
    };
  }

  setUp = (type) => {
    
    let limit
    if (type === "timer") {
      limit = 30
    } else {
      limit = 10
    }
    this.state[type] < limit
      ? this.setState({
          [type]: this.state[type] + 1
        })
      : null;
  };

  setDown = (type) => {
    this.state[type] > 1
      ? this.setState({
          [type]: this.state[type] - 1
        })
      : null;
  };

  submit = () => {
    const { navigate } = this.props.navigation;
    this.props.navigation.state.params.setTimer(this.state);
    navigate("HomeScreen");
  };

  static navigationOptions = {
    title: "Back"
  };
  render() {
    return (
      <View style={styles.settings}>
        <Text style={styles.timer_display}>Time: {this.state.timer}</Text>
        <View style={styles.button_container}>
          <Button style={styles.buttons} text_style={styles.button_text} title="-" onPress={()=>this.setDown("timer")} />
          <Button style={styles.buttons} text_style={styles.button_text} title="+" onPress={()=>this.setUp("timer")} />
        </View>
        <Text style={styles.timer_display}>difficulty: {this.state.difficulty}</Text>
        <View style={styles.button_container}>
          <Button style={styles.buttons} text_style={styles.button_text} title="-" onPress={()=>this.setDown("difficulty")} />
          <Button style={styles.buttons} text_style={styles.button_text} title="+" onPress={()=>this.setUp("difficulty")} />
        </View>
        <Button style={styles.submit} text_style={styles.button_text} title="Submit" onPress={this.submit} />
      </View>
    );
  }
}

export default Setting;

const styles = StyleSheet.create({
  settings: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00c0fe"
  },
  timer_display: {
    height: "10%",
    textAlign: "center",
    fontSize: 36,
    color: "white"
  },
  button_container: {
    height: "25%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "15%",
    width: "90%",
  },
  buttons: {
    textAlign: "center",
    height: "66%",
    width: "35%",
    margin: 10,
  },
  submit: {
    height: "10%",
    width: "50%",
  },
  button_text: {
    color: "white",
    textAlign: "center"
  }
});
