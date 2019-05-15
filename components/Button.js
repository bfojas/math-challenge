import React from "react";
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

const Button = props => {
  return (
    <Touchable onPress={() => props.onPress()}>
      <View style={[{ ...styles.view, ...props.style }]}>
        <Text style={[{ ...styles.text, ...props.text_style }]}>
          {props.title}
        </Text>
      </View>
    </Touchable>
  );
};

export default Button;

const styles = StyleSheet.create({
  view: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bbbbb9"
  },
  text: {
      fontSize: 30
  }
});
