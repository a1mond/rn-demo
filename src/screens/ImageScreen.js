import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
        <ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')} imageScore={7} />
        <ImageDetail title='Beach' imageSource={require('../../assets/beach.jpg')} imageScore={10} />
        <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')} imageScore={12} />
    </View>;
};

const styles = StyleSheet.create({

});

export default ImageScreen;