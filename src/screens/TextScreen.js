import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return <View>
        <Text style={styles.textStyle}>Enter password:</Text>
        <TextInput
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => {
                setPassword(value);
            }}
        />
        {password.length < 5 ? <Text>Password should be longer than 5 characters</Text> : null}

    </View>;
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 15,
        padding: 3
    },
    textStyle: {
        fontSize: 20
    }
});

export default TextScreen;