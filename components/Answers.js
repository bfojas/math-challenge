import React from "react";
import {StyleSheet, View, Text} from "react-native"

const Answers = props => {
    const {value,correct} = props.answer
return (
    <View style={[{...styles.tile, backgroundColor: correct ? "green" : "red"}]}>
      <Text style={styles.tile_text}>{value}</Text>
    </View>
)

}

export default Answers;

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
    //   backgroundColor: "green",
      borderRadius: 10
  
    },
    tile_text: {
      fontSize: 40,
      width: "100%",
      height: "35%",
      textAlign: "center"
    }
  });