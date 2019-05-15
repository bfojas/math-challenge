import React, { Component } from "react";
import { StyleSheet, Text, View} from "react-native";
import Button from "./Button"
import Tiles from "./Tiles";
import Timer from "./Timer";
import Answers from "./Answers"

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      timer: this.props.navigation.state.params.timer,
      one: 0,
      two: 0,
      score: 0,
      answered: false,
      correct: "",
      correctColor: null,
      right: "",
      wrong: ""
    };
  }

  static navigationOptions = {
    title: "Back"
  };

 
  randomize = () => {
    let symbol = Math.floor(Math.random() * 2);
    let diff = Math.floor(Math.random() * (10 - 1) + 1);
    let one = Math.floor(Math.random() * (25 - 12) + 12);
    let two = symbol ? one + diff : one - diff;
    this.setState({
      one: {value: one, correct: one > two ? true : false },
      two: {value: two, correct: one > two ? false : true },
      answered: false
    });
  };

  start = () => {
    this.setState({ started: true });
  };

  answer = value => {
    const { one, two, score } = this.state;
    this.setState({ answered: true });
    let right = one.value > two.value ? one.value : two.value;
    if (value === right) {
      this.setState({
        score: score + 1,
        correct: `CORRECT!`,
        correctColor: "green"
      });
    } else {
      this.setState({
        correct: `WRONG...`,
        correctColor: "red"
      });
    }
    // setTimeout(()=>this.randomize(), 2000)
  };

  fillAnswer = (value, key) => {
    this.setState({[key]: value})
  }
 

  render() {
    
    const { correct, correctColor, score, answered, one, two } = this.state;
    return this.state.started ? (
      <View style={styles.game_container}>
        <Timer
          timer={this.state.timer}
          answer={this.answer}
          randomize={this.randomize}
          showAnswer={this.hideAnswer}
          score={score}
          answered={answered}
        />
        {answered ?
        <View style={styles.tiles}>
          <Answers answer={one}/>
          <Answers answer={two}/>
        </View>
        :
        <View style={styles.tiles}>
          <Tiles
            value={this.state.one.value}
            answer={this.answer}
            answered={this.state.answered}
            name="answerOne"
            fillAnswer={this.fillAnswer}
          />
          <Tiles
            value={this.state.two.value}
            answer={this.answer}
            answered={this.state.answered}
            name="answerTwo"
            fillAnswer={this.fillAnswer}
          />
        </View>
        
        }
        <View style={[{ ...styles.correct, backgroundColor: correctColor }]}>
          <Text style={styles.correct_text}>{correct}</Text>
        </View>
      </View>
    ) : (
      <View style={[{...styles.game_container, backgroundColor: "#00c0fe"}]}>
        <Button style={styles.button} text_style={styles.button_text} title="Ready?" onPress={this.start} />
      </View>
    );
  }
}

export default Game;

const styles = StyleSheet.create({
  game_container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  tiles: {
    flex: 4,
    flexDirection: "column",
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "green",
    width: "90%",
    height: "25%"
  },
  correct: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  correct_text: {
    fontSize: 30
  },
  button: {
    width: "50%",
    height: "10%",
    margin: 5
  },
  button_text: {
    fontWeight: "bold"
  }
});
