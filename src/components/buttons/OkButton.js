import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ok } from '../../images/';

const styles = StyleSheet.create({
  image: {
    height: 44,
    width: 150,
  },
});

const OkButton = ({ onPress, disabled }) => (
  <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.image}>
    <Image source={ok} style={styles.image} />
  </TouchableOpacity>
);

OkButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

OkButton.defaultProps = {
  disabled: false,
};

export default OkButton;
