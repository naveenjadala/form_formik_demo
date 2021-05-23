/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { useFormikContext } from 'formik';
import AppErrorMessage from './AppErrorMessage';

const AppFormField = ({ name, placeholder, ...otherProps }) => {
    const { handleChange, errors, touched, setFieldTouched} = useFormikContext();
    return (
        <>
            <View style={{ width: '100%', backgroundColor: 'white', marginTop: 20, marginBottom: 20 }}>
                <Text style={{ padding: 10, backgroundColor: 'white' }}>{placeholder}</Text>
                <View style={{ width: '100%', height: 0.5, backgroundColor: 'black' }}></View>
                <TextInput
                    style={{ padding: 10 }}
                    onChangeText={handleChange(name)}
                    onBlur={() => setFieldTouched(name)}
                    {...otherProps}
                />
                <AppErrorMessage error={errors[name]} visible={touched[name]} />
            </View>
        </>
    );
};

export default AppFormField;

const styles = StyleSheet.create({});
