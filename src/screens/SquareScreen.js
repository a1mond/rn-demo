import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_STEP = 10;

const check = (amount, change) => {
    if (amount + change > 255 || amount + change < 0) return false;
    return true;
};

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green || 'blue', amount: COLOR_STEP }

    switch (action.colorToChange) {
        case 'Red':
            if (check(state.red, action.amount)) return { ...state, red: state.red + action.amount };
            return state;
        case 'Green':
            if (check(state.green, action.amount)) return { ...state, green: state.green + action.amount };
            return state;
        case 'Blue':
            if (check(state.blue, action.amount)) return { ...state, blue: state.blue + action.amount };
            return state;
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;


    return <View>
        <ColorCounter
            onIncrease={() => dispatch({ colorToChange: 'Red', amount: COLOR_STEP })}
            onDecrease={() => dispatch({ colorToChange: 'Red', amount: -COLOR_STEP })}
            color='Red'
        />
        <ColorCounter
            onIncrease={() => dispatch({ colorToChange: 'Green', amount: COLOR_STEP })}
            onDecrease={() => dispatch({ colorToChange: 'Green', amount: -COLOR_STEP })}
            color='Green'
        />
        <ColorCounter
            onIncrease={() => dispatch({ colorToChange: 'Blue', amount: COLOR_STEP })}
            onDecrease={() => dispatch({ colorToChange: 'Blue', amount: -COLOR_STEP })}
            color='Blue'
        />
        <View style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})`, alignSelf: 'center' }} />
        <Text>{`rgb(${ red }, ${ green }, ${ blue })`}</Text>
    </View>;
};

const styles = StyleSheet.create({

});

export default SquareScreen;