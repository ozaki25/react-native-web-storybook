import React from 'react';
import PropTypes from 'prop-types';
import NextEnabledButton from './NextEnabledButton';
import NextDisabledButton from './NextDisabledButton';

const NextButton = ({ disabled, onPress }) =>
  (disabled ? <NextDisabledButton disabled /> : <NextEnabledButton onPress={onPress} />);

NextButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

NextButton.defaultProps = {
  disabled: false,
  onPress: () => {},
};

export default NextButton;
