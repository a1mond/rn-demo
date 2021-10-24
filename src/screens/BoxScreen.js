import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.parentOne}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
        </View>
        <View style={styles.parentTwo}>
            <View style={styles.box}></View>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 20
    },
    parentOne: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: 'black'
    },
    parentTwo: {
        alignItems: 'center'
    }
});

export default BoxScreen;