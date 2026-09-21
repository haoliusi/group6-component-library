import { expect, fn, userEvent, within } from 'storybook/test';

import { AppHeader } from './AppHeader.jsx';

/** @type {import('@storybook/react-vite').Meta<typeof AppHeader>} */
const meta = {
  title: 'Components/AppHeader',
  component: AppHeader,
  tags: ['autodocs'],

  // Set the default props shared by the stories below.
  args: {
    title: 'Team directory',
    subtitle: 'Everyone in Group 6',
    size: 'large',
  },

  // Configure how props appear in Storybook's Controls panel.
  argTypes: {
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
      description: 'Shown only in the large size.',
    },
    size: {
      control: 'inline-radio',
      options: ['large', 'compact'],
    },
    actionLabel: {
      control: 'text',
    },
    onBack: {
      action: 'went back',
    },
    onAction: {
      action: 'action pressed',
    },
  },

  // Add a component description to the generated documentation.
  parameters: {
    docs: {
      description: {
        component:
          'A screen header with two sizes. The buttons appear only when their callbacks are supplied, so a caller cannot create a Back button that does nothing.',
      },
    },
  },
};

export default meta;

/** @typedef {import('@storybook/react-vite').StoryObj<typeof meta>} Story */

// Use all the default props from the shared configuration.
/** @type {Story} */
export const Large = {};

// Drop the subtitle to show the header at its smallest large-size height.
/** @type {Story} */
export const LargeWithoutSubtitle = {
  args: {
    subtitle: undefined,
  },
};

// The compact size centers the title, as a pushed screen would.
/** @type {Story} */
export const Compact = {
  args: {
    size: 'compact',
    onBack: fn(),
  },
  globals: {
    viewport: {
      value: 'compactPhone',
      isRotated: false,
    },
  },
};

// Both optional buttons require a callback and, for the action, a label.
/** @type {Story} */
export const WithBackAndAction = {
  args: {
    size: 'compact',
    title: 'Edit profile',
    actionLabel: 'Save',
    onBack: fn(),
    onAction: fn(),
  },
};

// Test that pressing Back reports the interaction to its parent.
/** @type {Story} */
export const BackButtonBehavior = {
  args: {
    size: 'compact',
    onBack: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button', { name: 'Go back' }));

    await expect(args.onBack).toHaveBeenCalled();
  },
};
