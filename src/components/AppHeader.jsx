import { Pressable, StyleSheet, Text, View } from 'react-native';

import { tokens } from '../tokens.js';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.subtitle] Shown only in the large size.
 * @param {'large' | 'compact'} [props.size]
 * @param {() => void} [props.onBack] Shows a Back button when passed.
 * @param {string} [props.actionLabel] Label for the right-side button.
 * @param {() => void} [props.onAction] Shows the right-side button when passed with actionLabel.
 * @param {string} [props.testID]
 */
export function AppHeader({
  title,
  subtitle,
  size = 'large',
  onBack,
  actionLabel,
  onAction,
  testID,
}) {
  const isLarge = size === 'large';

  return (
    <View style={styles.header} testID={testID}>
      <View style={styles.topRow}>
        {onBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            hitSlop={8}
            onPress={onBack}
            style={({ pressed }) => [styles.back, pressed ? styles.pressed : undefined]}
          >
            <Text style={styles.backText}>‹ Back</Text>
          </Pressable>
        ) : (
          <View />
        )}

        {!isLarge ? (
          <Text accessibilityRole="header" numberOfLines={1} style={styles.compactTitle}>
            {title}
          </Text>
        ) : null}

        {actionLabel && onAction ? (
          <Pressable
            accessibilityRole="button"
            hitSlop={8}
            onPress={onAction}
            style={({ pressed }) => (pressed ? styles.pressed : undefined)}
          >
            <Text style={styles.actionText}>{actionLabel}</Text>
          </Pressable>
        ) : (
          <View />
        )}
      </View>

      {isLarge ? (
        <View style={styles.largeBlock}>
          <Text accessibilityRole="header" style={styles.largeTitle}>
            {title}
          </Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: tokens.color.surface,
    borderBottomColor: tokens.color.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.md,
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 32,
  },
  back: {
    paddingVertical: tokens.spacing.xs,
  },
  backText: {
    color: tokens.color.brand,
    fontSize: 16,
    fontWeight: '600',
  },
  compactTitle: {
    color: tokens.color.ink,
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    marginHorizontal: tokens.spacing.sm,
    textAlign: 'center',
  },
  actionText: {
    color: tokens.color.brand,
    fontSize: 16,
    fontWeight: '600',
  },
  largeBlock: {
    gap: tokens.spacing.xs,
    marginTop: tokens.spacing.sm,
  },
  largeTitle: {
    color: tokens.color.ink,
    fontSize: 30,
    fontWeight: '800',
  },
  subtitle: {
    color: tokens.color.mutedInk,
    fontSize: 15,
  },
  pressed: {
    opacity: 0.6,
  },
});
