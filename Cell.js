/**
 * Created by piotr on 11/19/18.
 */

import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import {
    formatDate,
    getCountdownParts,
} from './api';


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    date: {
        fontWeight: '200',
        fontSize: 15,
        color: '#bdbdbd',
        width: '30%',
        textAlign: 'right',
    },
    title: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    },
    counterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    counter: {
        width: '25%',
        flex: 1,
    },
    counterText: {
        fontSize: 40,
        textAlign: 'center',
    },
    counterLabel: {
        fontSize: 13,
        fontWeight: '100',
        color: '#a3a3a3',
        textAlign: 'center',
        paddingTop: 0,
    },
});


export default class Cell extends React.Component
{
    constructor(props) {
        super(props);

        let title = this.props.title;

        this.state = {
            days: 20,
            hours: 3,
            minutes: 31,
            seconds: 45,
            date: '11 4 2018',
            //title: title
        };
    }

    render() {
        return (
            <TouchableHighlight>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.date}>'{formatDate(this.state.date)}'</Text>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>

                    <View
                        style={styles.counterContainer}
                    >
                        <View
                            style={styles.counter}
                        >
                            <Text style={styles.counterText}>{this.state.days}</Text>
                            <Text style={styles.counterLabel}>DAYS</Text>
                        </View>
                        <View
                            style={styles.counter}
                        >
                            <Text style={styles.counterText}>{this.state.hours}</Text>
                            <Text style={styles.counterLabel}>HOURS</Text>
                        </View>
                        <View
                            style={styles.counter}
                        >
                            <Text style={styles.counterText}>{this.state.minutes}</Text>
                            <Text style={styles.counterLabel}>MINUTES</Text>
                        </View>
                        <View
                            style={styles.counter}
                        >
                            <Text style={styles.counterText}>{this.state.seconds}</Text>
                            <Text style={styles.counterLabel}>SECONDS</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

