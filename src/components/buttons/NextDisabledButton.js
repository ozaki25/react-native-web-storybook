import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { nextDisabled } from '../../images/';

const styles = StyleSheet.create({
  image: {
    height: 44,
    width: 300,
  },
});

const NextDisabledButton = () => <Image source={nextDisabled} style={styles.image} />;

export default NextDisabledButton;
