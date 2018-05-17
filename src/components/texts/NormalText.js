import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#333',
    fontSize: 16,
  },
});

const NormalText = ({ children }) => <Text style={styles.text}>{children}</Text>;

NormalText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NormalText;
