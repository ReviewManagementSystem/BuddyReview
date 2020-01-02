import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default FriendComponentRow = (props) => {
    const imageHeight = 80;
    const imageWidth = 80;

    return (
        <View>
            <View style={styles.listItem}>
                <Image style={{ alignSelf:'center', marginLeft: 10, width: imageWidth, height: imageHeight }}
                    source={{ uri: props.data.image }} />
                <View style={styles.textItemContainer}>
                    <Text style={styles.textItem}>{props.data.title}</Text>
                    <Text style={styles.subTitleTextItem}>{props.data.subTitle}</Text>
                </View>
                <Ionicons
                    style={{ marginRight: 20, alignSelf: 'center' }}
                    name='ios-arrow-forward'
                    size={30}
                />
            </View>
            <View style={{ backgroundColor: 'light-grey', height: 0.5, width: '90%', alignSelf: 'center' }} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        height: 100,
    },
    textItem: {
        padding: 0,
        marginLeft: 0,
        fontSize: 25,
        textAlign: 'left'
    },
    subTitleTextItem: {
        padding: 0,
        marginTop: 14,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    textItemContainer: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'column',
        marginLeft: 10,
    }
});