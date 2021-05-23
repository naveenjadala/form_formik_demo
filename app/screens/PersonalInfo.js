/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFormLoader } from '../redux/Action/Action';

import * as Yup from 'yup';
import AppFormField from '../components/AppFormField';
import AppForm from '../components/AppForm';
import AppFormButton from '../components/AppFormButton';
import Progressbar from './Progressbar';

const validateSchema = Yup.object().shape({
    height: Yup.string().required().label('height'),
    weight: Yup.string().required().label('weight'),
    age: Yup.string().required().label('age'),
});

const PersonalInfo = ({navigation}) => {
    const dispatch = useDispatch();
    const selecter = useSelector(state => state.formReducer);
    console.log(selecter);
    return (
        <ScrollView>
            <View style={styles.loginContainer}>
            <Progressbar selecter={selecter.formLoader}/>

                <Text>Let's start with basics</Text>
                <Text>Remember - If you are not sure of answers, your best gess if fine for now</Text>

                <AppForm
                    initialValues={{ height: '', weight: '', age: '' }}
                    onSubmit={values => {
                        let val = [true, true];
                        dispatch(setFormLoader(val));
                        navigation.navigate('PersonalInfo');
                    }}
                    validationSchema={validateSchema}>
                    {/* <> */}
                    <AppFormField
                        name="height"
                        placeholder="Height"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="default"
                    />

                    <AppFormField
                        name="weight"
                        placeholder="Weight"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="default"
                    />

                    <AppFormField
                        name="age"
                        placeholder="Age"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="default"
                    />
                    <AppFormButton title="submit" />
                </AppForm>
            </View>
        </ScrollView>
    );
};

export default PersonalInfo;

const styles = StyleSheet.create({

    loginContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        elevation: 10,
        backgroundColor: '#e6e6e6',
    },
    textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },
});
