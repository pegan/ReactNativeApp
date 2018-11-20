/**
 * Created by piotr on 11/18/18.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import PropTypes from "prop-types";
import Cell from './Cell'
import ActionButton from 'react-native-action-button';

type Props = {};
export default class SceneOne extends Component<Props>
{
    static navigationOptions = {
        title: 'Events',
    };

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
            ],
            text: 'You are here: - seconds',
            number: 0,
            timer: null
        };
    }

    timer = () => {
        let i = 0;
        setInterval(() => (
            this.setState(previousState => (
                { text: 'You are here: ' + i.toString() + ' seconds' }
            )),
                i += 1
        ), 1000);
    };

    componentWillMount () {
        this.setState(() => (
            { timer: this.timer() }
        ));
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form')
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.state.text}</Text>
                <View style={styles.container}>
                    <FlatList
                        renderItem={ ({item}) =>
                            <Cell title={item.key}/>
                        }
                        data={this.state.data}
                        initialNumToRender={5}
                        //keyExtractor={item => item.key}
                     />
                </View>
                <ActionButton
                key="fab"
                buttonColor="rgba(231,76,60,1)"
                onPress={this.handleAddEvent}
                />
            </View>
        );
    }
}

/*
                    <FlatList
                        data={this.state.data}
                        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    />
                    */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#f0f0f0',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});