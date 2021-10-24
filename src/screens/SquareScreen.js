import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_STEP = 10;

const check = (payload, change) => {
    if (payload + change > 255 || payload + change < 0) return false;
    return true;
};

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { type: 'red' || 'green || 'blue', payload: COLOR_STEP }

    switch (action.type) {
        case 'change_red':
            if (check(state.red, action.payload)) return { ...state, red: state.red + action.payload };
            return state;
        case 'change_green':
            if (check(state.green, action.payload)) return { ...state, green: state.green + action.payload };
            return state;
        case 'change_blue':
            if (check(state.blue, action.payload)) return { ...state, blue: state.blue + action.payload };
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
            onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_STEP })}
            onDecrease={() => dispatch({ type: 'change_red', payload: -COLOR_STEP })}
            color='Red'
        />
        <ColorCounter
            onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_STEP })}
            onDecrease={() => dispatch({ type: 'change_green', payload: -COLOR_STEP })}
            color='Green'
        />
        <ColorCounter
            onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_STEP })}
            onDecrease={() => dispatch({ type: 'change_blue', payload: -COLOR_STEP })}
            color='Blue'
        />
        <View style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})`, alignSelf: 'center' }} />
        <Text>{`rgb(${ red }, ${ green }, ${ blue })`}</Text>
    </View>;
};

const styles = StyleSheet.create({

});

export default SquareScreen;