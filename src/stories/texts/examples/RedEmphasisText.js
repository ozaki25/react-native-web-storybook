import React from 'react';
import { text } from '@storybook/addon-knobs';
import RedEmphasisText from '../../../components/texts/RedEmphasisText';

export default () => <RedEmphasisText>{text('text', '赤字で強調したいテキスト')}</RedEmphasisText>;
