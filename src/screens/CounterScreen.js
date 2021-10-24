import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const STEP = 1;

const reducer = (state, action) => {
    switch(action.type) {
        case 'change_inc':
            return { ...state, counter: state.counter + action.payload };
        case 'change_dec':
            return { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const { counter } = state
    return <View>
        <Button title='Increase' onPress={() => {
            dispatch({ type: 'change_inc', payload: STEP });
        }} />
        <Button title='Decrease' onPress={() => {
            dispatch({ type: 'change_dec', payload: STEP });
        }} />
        <Text>Counter: { counter }</Text>
    </View>;
};

const styles = StyleSheet.create({

});

export default CounterScreen;