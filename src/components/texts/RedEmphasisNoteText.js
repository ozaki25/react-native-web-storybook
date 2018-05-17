import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#d70000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const RedEmphasisNoteText = ({ children }) => <Text style={styles.text}>{children}</Text>;

RedEmphasisNoteText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RedEmphasisNoteText;
