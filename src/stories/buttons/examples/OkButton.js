import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import OkButton from '../../../components/buttons/OkButton';

export default () => <OkButton onPress={action('click ok button')} disabled={boolean('disabled', false)} />;
