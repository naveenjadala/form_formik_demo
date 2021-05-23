/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Progressbar = ({ selecter }) => {
    return (
        <View style={{ ...styles.container }}>
            <View style={{ ...styles.selected_highlight }}>
                <View style={{ ...styles.inner_circle_style, backgroundColor: selecter[0] ? null : 'white' }} />
            </View>
            <View style={{ ...styles.progress_line }} />
            <View style={{ ...styles.selected_highlight }}>
                <View style={{ ...styles.inner_circle_style, backgroundColor: selecter[1] ? null : 'white' }} />
            </View>
            <View style={{ ...styles.progress_line }} />
            <View style={{ ...styles.selected_highlight }}>
                <View style={{ ...styles.inner_circle_style, backgroundColor: selecter[2] ? null : 'white' }} />
            </View>
        </View>
    );
};

export default Progressbar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 50,
    },
    selected_highlight: {
        borderRadius: 50,
        backgroundColor: 'blue',
        height: 15, width: 15,
        justifyContent: 'center',
    },
    inner_circle_style: {
        borderRadius: 50,
        height: 9,
        width: 9,
        alignSelf: 'center',
    },
    progress_line: {
        width: 30,
        height: 2,
        backgroundColor: 'blue',
        alignSelf: 'center',
    },
});
