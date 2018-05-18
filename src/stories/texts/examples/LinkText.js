import React from 'react';
import { text } from '@storybook/addon-knobs';
import LinkText from '../../../components/texts/LinkText';

export default () => <LinkText>{text('text', 'リンク用のテキスト')}</LinkText>;
