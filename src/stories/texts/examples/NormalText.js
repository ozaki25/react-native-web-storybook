import React from 'react';
import { text } from '@storybook/addon-knobs';
import NormalText from '../../../components/texts/NormalText';

export default () => <NormalText>{text('text', '通常テキスト')}</NormalText>;
