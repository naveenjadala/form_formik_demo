/* eslint-disable prettier/prettier */
import React from 'react';
import { Button } from 'react-native';

import { useFormikContext } from 'formik';

const AppFormButton = ({ title }) => {
    const { handleSubmit, isValid, dirty } = useFormikContext();
    return (
        <>
            <Button onPress={handleSubmit} title={title} disabled={!(isValid && dirty)} />
        </>
    );
};

export default AppFormButton;
