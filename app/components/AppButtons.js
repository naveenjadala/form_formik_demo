/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useFormikContext } from 'formik';
import AppErrorMessage from './AppErrorMessage';

const AppButtons = ({ name, ...otherProps }) => {
    const { handleChange, errors, touched, setFieldTouched } = useFormikContext();
    return (
        <>
            <View style={{ width: '100%', backgroundColor: 'white', marginTop: 20, marginBottom: 20 }}>
                <Text style={{ padding: 10, backgroundColor: 'white' }}>{name}</Text>
                <View style={{ width: '100%', height: 0.5, backgroundColor: 'black' }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ width: '50%' }} onPress={() => handleChange('yes')}>
                        <Text>
                            Yes
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {handleChange(name); console.log(name)}} style={{ width: '50%', padding: '5%', elevation: 1, shadowColor: '#aaa' }}>
                        <Text>
                            no
                    </Text>
                    </TouchableOpacity>
                </View>
                {/* <TextInput
                    style={{ padding: 10 }}
                    onChangeText={handleChange(name)}
                    onBlur={() => setFieldTouched(name)}
                    {...otherProps}
                /> */}
                <AppErrorMessage error={errors[name]} visible={touched[name]} />
            </View>
        </>
    );
};

export default AppButtons;

const styles = StyleSheet.create({});
