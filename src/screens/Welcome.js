import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Welcome extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome</Text>
                <Button title={'Login'} onPress={() => this.props.navigation.navigate('Home')} />
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