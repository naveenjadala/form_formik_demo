/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setFormLoader, saveDetails } from '../redux/Action/Action';

import AppFormField from '../components/AppFormField';
import AppForm from '../components/AppForm';
import AppFormButton from '../components/AppFormButton';
import Progressbar from './Progressbar';

const validateSchema = Yup.object().shape({
    name: Yup.string().required().label('FullName'),
    gender: Yup.string().required().label('Gender'),
    zipcode: Yup.string().required().label('zipcode'),
});

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const selecter = useSelector(state => state.formReducer);
    return (
        <ScrollView>
            <View style={styles.loginContainer}>
                <Progressbar selecter={selecter.formLoader} />

                <Text>Let's start with basics</Text>
                <Text>Remember - If you are not sure of answers, your best gess if fine for now</Text>

                <AppForm
                    initialValues={{ name: '', gender: '', zipcode: '' }}
                    onSubmit={values => {
                        let val = [true, false];
                        dispatch(setFormLoader(val));
                        if (Object.keys(selecter.personalData).length === 0) {
                            dispatch(saveDetails(values));
                        }
                        navigation.navigate('PersonalInfo');
                    }}
                    validationSchema={validateSchema}>
                    <AppFormField
                        name="name"
                        placeholder="Full Name"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="default" 
                        value={selecter.personalData['name']}                       
                    />

                    <AppFormField
                        name="gender"
                        placeholder="Gender"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="default"
                        value={selecter.personalData['gender']}
                    />

                    <AppFormField
                        name="zipcode"
                        placeholder="Zip code"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="default"
                        value={selecter.personalData['zipcode']}
                    />
                    <AppFormButton title="submit" />
                </AppForm>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

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
