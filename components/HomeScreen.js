import React, { Component } from "react";
import {StyleSheet, Text, View, Linking} from "react-native";
import Button from "./Button"

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      timer: 5
    };
  }

  static navigationOptions = {
    // title: "Quick Maff"
    header: null
  };

  setTimer = (newTime) => {
      this.setState({
          timer: newTime
        })
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={[{...styles.text, ...styles.header}]}>Welcome!</Text>
        <Text style={styles.text}>This is a simple math game designed to test how quickly you can solve basic arithmetic problems. </Text>
        <Text style={styles.text}>You will be shown two cards, each with it's own problem to solve. Your objective is to figure out which card results in the highest answer, within the set amount of time.</Text>
        <Text style={styles.text}>Enjoy!</Text>
        <Button
          title="START!"
          style={styles.button}
          text_style={styles.button_text}
          onPress={() =>
            navigate("Game", {
              timer: this.state.timer
            })
          }
        />
        <Button
          title="Settings"
          style={styles.button}
          text_style={styles.button_text}
          onPress={() =>
            navigate("Setting", {
              setTimer: this.setTimer,
              timer: this.state.timer
            })
          }
        />
        <Text style={styles.text} onPress={()=> {Linking.openURL('https://bfojas.github.io/portfolio/')}}>
        Made by Bradley Fojas
        </Text>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#00c0fe",
    justifyContent: "space-around",
    alignItems: "center"
  },
  header: {
    fontSize: 30,
    fontWeight: "bold"
  },
  text: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    margin: 5
  },
  button: {
    width: "50%",
    height: "10%",
    margin: 5
  },
  button_text: {
    fontWeight: "bold"
  }
})
