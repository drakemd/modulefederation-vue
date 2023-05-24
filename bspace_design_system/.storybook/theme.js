// .storybook/YourTheme.js

import { create } from '@storybook/theming/create'
import Logo from '../src/assets/logo.png'

export default create({
  base: 'light',
  brandTitle: 'Design System',
  brandUrl: 'https://example.com',
  brandImage: Logo,
  brandTarget: '_self',
});