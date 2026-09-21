import { useArgs } from 'storybook/preview-api';
import { expect, fn, userEvent, within } from 'storybook/test';

import { TextField } from './TextField.jsx';

/** @type {import('@storybook/react-vite').Meta<typeof TextField>} */
const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],

  // Set the default props shared by the stories below.
  args: {
    label: 'Email',
    value: '',
    placeholder: 'you@example.com',
    helperText: 'We only use this to send build notifications.',
    onChangeText: fn(),
  },

  // Configure how props appear in Storybook's Controls panel.
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    errorText: {
      control: 'text',
      description: 'Replaces the helper text and recolors the border.',
    },
    disabled: {
      control: 'boolean',
    },
    secureTextEntry: {
      control: 'boolean',
    },
    onChangeText: {
      action: 'changed',
      table: {
        disable: true,
      },
    },
  },

  // Add a description to the generated documentation.
  parameters: {
    docs: {
      description: {
        component:
          'A controlled input: its parent owns the text and decides what to do with each change. The error state is requested with errorText rather than a color prop, so every invalid field looks the same.',
      },
    },
  },

  // Keep the typed value synchronized with Storybook's controls.
  render: function ControlledTextField(args) {
    const [{ value }, updateArgs] = useArgs();

    return (
      <TextField
        {...args}
        value={value}
        onChangeText={(nextValue) => {
          // Record the interaction and store the new text.
          args.onChangeText?.(nextValue);
          updateArgs({ value: nextValue });
        }}
      />
    );
  },
};

export default meta;

/** @typedef {import('@storybook/react-vite').StoryObj<typeof meta>} Story */

// Use the shared configuration and default arguments above.
/** @type {Story} */
export const Controlled = {};

// The error message replaces the helper text instead of appearing beside it.
/** @type {Story} */
export const WithError = {
  args: {
    value: 'not-an-email',
    errorText: 'Enter a complete email address.',
  },
};

// A disabled field cannot be edited and reports that state to screen readers.
/** @type {Story} */
export const Disabled = {
  args: {
    value: 'locked@example.com',
    disabled: true,
    helperText: 'Your email is managed by the course roster.',
  },
};

// Passwords reuse the same component rather than a separate one.
/** @type {Story} */
export const Password = {
  args: {
    label: 'Password',
    value: 'hunter2',
    placeholder: undefined,
    secureTextEntry: true,
    helperText: 'At least 12 characters.',
  },
};

// Test that typing reports each change back to the parent.
/** @type {Story} */
export const TypingBehavior = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText('Email'), 'hi@example.com');

    await expect(args.onChangeText).toHaveBeenCalled();
  },
};
