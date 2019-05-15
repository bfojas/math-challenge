import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";

const Touchable =
  Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

const Tiles = props => {

    const { value } = props;
    let primeCheck = () => {
      for (var i = 2; i < value; i++) {
        if (value % i === 0) {
          return false;
        }
      }
      return value > 1;
    };
  
    let typeLimit = primeCheck() ? 3 : 4;
  
    let type = [
      () => {
        let randomizedAdd = Math.floor(Math.random() * (value - 2) + 2);
        return `${randomizedAdd} + ${value - randomizedAdd}`;
      },
  
      () => {
        let randomizedSub = Math.floor(Math.random() * (value - 2) + 2);
        return `${randomizedSub + value} - ${randomizedSub}`;
      },
  
      () => {
        let randomizedDiv = Math.floor(Math.random() * (value - 2) + 2);
        return `${randomizedDiv * value} / ${randomizedDiv}`;
      },
  
      () => {
        let factors = [];
        for (let i = 2; i < Math.floor(value / 2); i++) {
          if (value % i === 0) {
            factors.push(i);
          }
        }
        let randomizedTime = factors[Math.floor(Math.random() * factors.length)];
        return `${value / randomizedTime} * ${randomizedTime}`;
      }
    ];
  
    let formula = type[Math.floor(Math.random() * typeLimit)]();
  

    return (
    //   this.state.values ?   
      <Touchable
        onPress={() => props.answer(value)}
        background={TouchableNativeFeedback.Ripple("#FFFFFF", true)}
      >
        <View style={styles.tile}>
          <Text style={styles.tile_text}>{formula}</Text>
        </View>
      </Touchable>
    //   :
    //   null
    );
//   }
}

export default Tiles;

const styles = StyleSheet.create({
  tile: {
    margin: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "20%",
    fontSize: 40,
    flexDirection: "row",
    backgroundColor: "#00c0fe",
    borderRadius: 10
  },
  tile_text: {
    fontSize: 40,
    width: "100%",
    height: "35%",
    textAlign: "center"
  }
});
