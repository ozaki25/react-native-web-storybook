import React from 'react';
import { text } from '@storybook/addon-knobs';
import RedEmphasisNoteText from '../../../components/texts/RedEmphasisNoteText';

export default () => <RedEmphasisNoteText>{text('text', '赤字の注意書き用テキスト')}</RedEmphasisNoteText>;
