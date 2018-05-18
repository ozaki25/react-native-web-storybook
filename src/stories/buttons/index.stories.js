import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import OkButton from './examples/OkButton';
import NextButton from './examples/NextButton';

const stories = storiesOf('Buttons', module);

stories.add('ok button', withInfo('OKボタン')(OkButton)).add('next button', withInfo('nextボタン')(NextButton));
