import { StyleSheet, Text, TextInput, View } from 'react-native';

import { tokens } from '../tokens.js';

/**
 * @param {object} props
 * @param {string} props.label Visible label above the input.
 * @param {string} [props.value] Current text (controlled).
 * @param {(text: string) => void} [props.onChangeText] Called on every keystroke.
 * @param {string} [props.placeholder]
 * @param {string} [props.helperText] Hint shown under the input.
 * @param {string} [props.errorText] Replaces the helper text and turns the border to the warning color.
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.secureTextEntry] Hides the text, for passwords.
 * @param {string} [props.testID]
 */
export function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  helperText,
  errorText,
  disabled = false,
  secureTextEntry = false,
  testID,
}) {
  const hasError = Boolean(errorText);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        accessibilityState={{ disabled }}
        editable={!disabled}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={tokens.color.mutedInk}
        secureTextEntry={secureTextEntry}
        testID={testID}
        value={value}
        style={[
          styles.input,
          hasError ? styles.inputError : undefined,
          disabled ? styles.inputDisabled : undefined,
        ]}
      />
      {hasError ? (
        <Text style={styles.errorText}>{errorText}</Text>
      ) : helperText ? (
        <Text style={styles.helperText}>{helperText}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: tokens.spacing.xs,
    width: '100%',
  },
  label: {
    color: tokens.color.ink,
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    backgroundColor: tokens.color.surface,
    borderColor: tokens.color.border,
    borderRadius: tokens.radius.sm,
    borderWidth: 1.5,
    color: tokens.color.ink,
    fontSize: 16,
    minHeight: 48,
    paddingHorizontal: tokens.spacing.md,
  },
  inputError: {
    borderColor: tokens.color.warning,
  },
  inputDisabled: {
    backgroundColor: tokens.color.canvas,
    opacity: 0.6,
  },
  helperText: {
    color: tokens.color.mutedInk,
    fontSize: 13,
  },
  errorText: {
    color: tokens.color.warning,
    fontSize: 13,
    fontWeight: '600',
  },
});
