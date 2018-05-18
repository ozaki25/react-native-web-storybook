import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import NextButton from '../../../components/buttons/NextButton';

export default () => <NextButton onPress={action('clicked next button')} disabled={boolean('disabled', false)} />;
