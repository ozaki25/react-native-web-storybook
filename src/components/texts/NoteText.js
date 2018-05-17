import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#333',
    fontSize: 14,
  },
});

const NoteText = ({ children }) => <Text style={styles.text}>{children}</Text>;

NoteText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NoteText;
