import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { AppHeader, ListItem, TextField } from '../index.js';

describe('public components', () => {
  it('calls AppHeader onBack', () => {
    const onBack = vi.fn();
    render(<AppHeader title="Settings" onBack={onBack} size="compact" />);

    fireEvent.click(screen.getByRole('button', { name: 'Go back' }));

    expect(onBack).toHaveBeenCalledOnce();
  });

  it('calls ListItem onPress', () => {
    const onPress = vi.fn();
    render(<ListItem title="Ada Lovelace" subtitle="Engineer" onPress={onPress} />);

    fireEvent.click(screen.getByRole('button', { name: 'Ada Lovelace, Engineer' }));

    expect(onPress).toHaveBeenCalledOnce();
  });

  it('reports TextField changes', () => {
    const onChangeText = vi.fn();
    render(<TextField label="Email" onChangeText={onChangeText} />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'hi@example.com' },
    });

    expect(onChangeText).toHaveBeenCalledWith('hi@example.com');
  });
});
