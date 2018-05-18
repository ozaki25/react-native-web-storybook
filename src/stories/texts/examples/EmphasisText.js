import React from 'react';
import { text } from '@storybook/addon-knobs';
import EmphasisText from '../../../components/texts/EmphasisText';

export default () => <EmphasisText>{text('text', '強調したいテキスト')}</EmphasisText>;
