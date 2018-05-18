import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { next } from '../../images/';

const styles = StyleSheet.create({
  image: {
    height: 44,
    width: 300,
  },
});

const NextEnabledButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.image}>
    <Image source={next} style={styles.image} />
  </TouchableOpacity>
);

NextEnabledButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default NextEnabledButton;
