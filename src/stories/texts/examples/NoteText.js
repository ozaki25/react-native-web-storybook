import React from 'react';
import { text } from '@storybook/addon-knobs';
import NoteText from '../../../components/texts/NoteText';

export default () => <NoteText>{text('text', '注意書き用のテキスト')}</NoteText>;
