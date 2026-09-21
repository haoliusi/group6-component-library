import { expect, fn, userEvent, within } from 'storybook/test';

import { ListItem } from './ListItem.jsx';

/** @type {import('@storybook/react-vite').Meta<typeof ListItem>} */
const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  tags: ['autodocs'],

  // Set the default props shared by the stories below.
  args: {
    title: 'Ada Lovelace',
    subtitle: 'Engineer',
    trailing: 'chevron',
    onPress: fn(),
  },

  // Configure how props appear in Storybook's Controls panel.
  argTypes: {
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    leadingText: {
      control: 'text',
      description: 'Defaults to the first two letters of the title.',
    },
    trailing: {
      control: 'inline-radio',
      options: ['chevron', 'badge', 'none'],
    },
    badgeText: {
      control: 'text',
      description: 'Only rendered when trailing is "badge".',
    },
    onPress: {
      action: 'pressed',
    },
  },

  // Add a component description to the generated documentation.
  parameters: {
    docs: {
      description: {
        component:
          'A single row for a list. The right edge is chosen from a fixed set of options rather than accepting arbitrary content, which keeps rows visually consistent across screens.',
      },
    },
  },
};

export default meta;

/** @typedef {import('@storybook/react-vite').StoryObj<typeof meta>} Story */

// Use all the default props from the shared configuration.
/** @type {Story} */
export const Default = {};

// The badge replaces the chevron and needs its own text.
/** @type {Story} */
export const WithBadge = {
  args: {
    title: 'Notifications',
    subtitle: 'Unread messages',
    trailing: 'badge',
    badgeText: '12',
  },
};

// Without onPress the row is not pressable and exposes no button role.
/** @type {Story} */
export const Static = {
  args: {
    title: 'Build number',
    subtitle: '2.0.0',
    trailing: 'none',
    onPress: undefined,
  },
};

// The avatar falls back to initials, but a caller can override the text.
/** @type {Story} */
export const CustomInitials = {
  args: {
    title: 'Design system',
    subtitle: 'Shared tokens',
    leadingText: 'DS',
  },
};

// Show how several rows stack into a list on a narrow screen.
/** @type {Story} */
export const InAList = {
  globals: {
    viewport: {
      value: 'compactPhone',
      isRotated: false,
    },
  },
  render: (args) => (
    <>
      <ListItem {...args} title="Ada Lovelace" subtitle="Engineer" />
      <ListItem
        {...args}
        title="Grace Hopper"
        subtitle="Compiler pioneer"
        trailing="badge"
        badgeText="3"
      />
      <ListItem {...args} title="Alan Turing" subtitle="Mathematician" />
    </>
  ),
};

// Test that pressing the row reports the interaction to its parent.
/** @type {Story} */
export const PressBehavior = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: 'Ada Lovelace, Engineer' }),
    );

    await expect(args.onPress).toHaveBeenCalled();
  },
};
