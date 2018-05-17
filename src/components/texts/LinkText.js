import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#3366ff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

const LinkText = ({ children }) => <Text style={styles.text}>{children}</Text>;

LinkText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinkText;
