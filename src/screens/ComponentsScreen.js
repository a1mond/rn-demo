import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    let name = 'Vladyslav';

    return <View>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={styles.additionalText}>My name is {name}</Text>
    </View>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    additionalText: {
        fontSize: 20
    }
});

export default ComponentsScreen;