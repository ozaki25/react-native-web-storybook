import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#d70000',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

const RedEmphasisText = ({ children }) => <Text style={styles.text}>{children}</Text>;

RedEmphasisText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RedEmphasisText;
