import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Redux Counter App</Text>
      <View style={styles.counterDesign}>
        <View style={styles.touchableOpacityView}>
          <TouchableOpacity onPress={() => dispatch(decrement())}>
            <Text style={{ fontSize: 50 }}> - </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.countNumber}> {count} </Text>

        <View style={styles.touchableOpacityView}>
          <TouchableOpacity onPress={() => dispatch(increment())}>
            <Text style={{ fontSize: 30 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  counterDesign: {
    backgroundColor: "#D3D3D3",
    height: 80,
    width: "70%",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  touchableOpacityView: {
    height: 80,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  countNumber: {
    height: 70,
    borderRadius: 4,
    backgroundColor: "#fff",
    width: "40%",
    textAlign: "center",
    fontSize: 30,
  },
});

export default Counter;
