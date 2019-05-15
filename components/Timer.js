import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: this.props.timer
    };
  }

  interval 

  componentDidMount() {
      const {randomize} = this.props
    randomize();
    interval = setInterval(() => {
      if (this.state.timer > 1) {
        this.setState({
          timer: this.state.timer - 1
        });
      } else {

        this.setState({ timer: this.props.timer });
        if (this.props.answered) {
            randomize()
        } else {
        this.props.answer();
        }
      }
    }, 1000);
  }

  componentDidUpdate(prevProps) {
      if (prevProps.answered !== this.props.answered && this.props.answered) {
          this.setState({timer: 2})
      }
      if (prevProps.answered !== this.props.answered && !this.props.answered) {
        this.setState({timer: this.props.timer})
    }
  }

  componentWillUnmount () {
      clearInterval(interval)
  }

  render() {
    return (
      <View style={styles.timer}>
        <View style={styles.timer_boxes}>
            <Text style={styles.timer_text}>Time:</Text>
            <Text style={styles.timer_text}>{this.props.answered ? null : this.state.timer }</Text>
        </View>
        <View style={styles.timer_boxes}>
            <Text style={styles.timer_text}>Score:</Text>
            <Text style={styles.timer_text}>{this.props.score}</Text>
        </View>
      </View>
    );
  }
}

export default Timer;

const styles = StyleSheet.create({
    timer : {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row"
    },
    timer_boxes: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    timer_text: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 24
    }

})
