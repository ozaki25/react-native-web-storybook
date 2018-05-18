/* eslint import/no-extraneous-dependencies: 0 */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import NormalText from './examples/NormalText';
import EmphasisText from './examples/EmphasisText';
import RedEmphasisText from './examples/RedEmphasisText';
import NoteText from './examples/NoteText';
import RedEmphasisNoteText from './examples/RedEmphasisNoteText';
import LinkText from './examples/LinkText';

const stories = storiesOf('Syoto/Texts', module);

stories
  .add('base text', withInfo('通常の文章で使うテキストコンポーネント')(NormalText))
  .add('emphasis text', withInfo('通常の文章の中で強調したいところに使うテキストコンポーネント')(EmphasisText))
  .add(
    'red emphasis text',
    withInfo('通常の文章の中で赤字で強調したいところに使うテキストコンポーネント')(RedEmphasisText),
  )
  .add('note text', withInfo('注意書きの文章で使うテキストコンポーネント')(NoteText))
  .add(
    'red emphasis note text',
    withInfo('注意書きの文章の中で赤字で強調したいところに使うテキストコンポーネント')(RedEmphasisNoteText),
  )
  .add('link text', withInfo('リンクの文字列に使うテキストコンポーネント')(LinkText));
