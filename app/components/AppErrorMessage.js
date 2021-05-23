/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AppErrorMessage = ({error, visible}) => {
  if (!visible || !error) {
    return null;
  }
  return <Text style={{ padding: 10, color: 'red' }}>{error}</Text>;
};

export default AppErrorMessage;

const styles = StyleSheet.create({});
