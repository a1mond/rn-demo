import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Alisa', key: '1' },
        { name: 'Sofa', key: '2' },
        { name: 'Maximka', key: '3' },
        { name: 'Den4ik', key: '4' }
    ]
    return <View>
        <Text style={styles.textStyle}>List Screen</Text>
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(x) => x.key}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.listItemStyle}>{item.name} {item.key}</Text>
            }}
        />
    </View>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        alignSelf: "center",
        margin: 3
    },
    listItemStyle: {
        fontSize: 25,
        marginVertical: 50
    }
});

export default ListScreen;