import { Pressable, StyleSheet, Text, View } from 'react-native';

import { tokens } from '../tokens.js';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {string} [props.leadingText] Text for the avatar circle; defaults to the first two letters of the title.
 * @param {'chevron' | 'badge' | 'none'} [props.trailing] What appears on the right edge.
 * @param {string} [props.badgeText] Shown when trailing is 'badge'.
 * @param {() => void} [props.onPress] Makes the row pressable.
 * @param {string} [props.testID]
 */
export function ListItem({
  title,
  subtitle,
  leadingText,
  trailing = 'chevron',
  badgeText,
  onPress,
  testID,
}) {
  const initials = (leadingText ?? title ?? '').slice(0, 2).toUpperCase();

  return (
    <Pressable
      accessibilityRole={onPress ? 'button' : undefined}
      accessibilityLabel={subtitle ? `${title}, ${subtitle}` : title}
      disabled={!onPress}
      onPress={onPress}
      testID={testID}
      style={({ pressed }) => [
        styles.row,
        pressed && onPress ? styles.pressed : undefined,
      ]}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      <View style={styles.body}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        {subtitle ? (
          <Text numberOfLines={1} style={styles.subtitle}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      {trailing === 'badge' && badgeText ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeText}</Text>
        </View>
      ) : null}
      {trailing === 'chevron' ? <Text style={styles.chevron}>›</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    backgroundColor: tokens.color.surface,
    borderBottomColor: tokens.color.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    gap: tokens.spacing.md,
    minHeight: 64,
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md,
  },
  pressed: {
    backgroundColor: tokens.color.canvas,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: tokens.color.brandSoft,
    borderRadius: tokens.radius.pill,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  avatarText: {
    color: tokens.color.brand,
    fontSize: 14,
    fontWeight: '700',
  },
  body: {
    flex: 1,
    gap: 2,
  },
  title: {
    color: tokens.color.ink,
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: tokens.color.mutedInk,
    fontSize: 14,
  },
  badge: {
    backgroundColor: tokens.color.brand,
    borderRadius: tokens.radius.pill,
    minWidth: 24,
    paddingHorizontal: tokens.spacing.sm,
    paddingVertical: 2,
  },
  badgeText: {
    color: tokens.color.white,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  chevron: {
    color: tokens.color.mutedInk,
    fontSize: 24,
  },
});
