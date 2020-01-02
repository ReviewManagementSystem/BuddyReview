import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class ReviewDetailScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>ReviewDetailScreen</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});