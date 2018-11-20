/**
 * Created by piotr on 11/18/18.
 */

import React from 'react';
import { Button, View, StyleSheet, Image } from 'react-native';

export default class HomeScreen extends React.Component
{
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('./src/ico-react.png')} />
                <Button
                    style={styles.button}
                    title={'Go Next'}
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    image: {
        width: '100%',
        height: '50%'
    },
    button: {

    }
});
