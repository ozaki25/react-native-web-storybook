import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#333',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

const EmphasisText = ({ children }) => <Text style={styles.text}>{children}</Text>;

EmphasisText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EmphasisText;
